//import config from 'config';
import { authHeader, handleResponse } from '@/utils/authHeader';

export const userService = {
    //Delete user
    deleteUser (id) {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };

        return fetch(`${process.env.VUE_APP_BASE_URL}/v1/users/?id=${id}`, requestOptions).then(handleResponse);
    },
    //Create Users
    create (data) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        return fetch(`https://randomuser.me/api/`, requestOptions).then(handleResponse);
    },
    //Get bacnch of users
    getUserByCount (count) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        return fetch(`https://randomuser.me/api/?results=${count}`, requestOptions).then(handleResponse);
    },

    //Get By gender
    getByGender (gender) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(`https://randomuser.me/api/?gender=${gender}`, requestOptions).then(handleResponse);
    },

    //Update user
    update (user) {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`https://randomuser.me/api/`, requestOptions).then(handleResponse);
    },
};