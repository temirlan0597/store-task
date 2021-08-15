
import { userService } from '@/_services/user.service';
import moment from 'moment'

const users = JSON.parse(localStorage.getItem('users'));
const state = {
	users: users ? users : []
  };
const actions = {
	getUsers({commit}, count){
		userService.getUserByCount(count).then( res => {
			const filteredUsers = res.results.map(item => {
				item.fullName = item.name.first + ' ' + item.name.last;
				item.regDate = moment(item.registered.date.slice(0,10)).format('DD.MM.YYYY');
				item.avatarUrl = item.picture.medium;
				item.birthday = moment(item.dob.date.slice(0,10)).format('DD.MM.YYYY');
				return item;
			});
			localStorage.setItem('users', JSON.stringify(filteredUsers));
			commit('SET_USERS', filteredUsers);
		})
	}
	
}

const mutations = {
	SET_USERS(state, data) {
		state.users = data;
	},
	REMOVE_USERS(state) {
		state.users = null;
	},
}

export const storage = {
	namespaced: true,
	state,
	actions,
	mutations
}
