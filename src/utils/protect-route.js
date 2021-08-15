export default {
	checkSuperAdmin (next) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.roles.some(i => i.code === 'ROLE_SUPER_ADMIN')) {
			next();
		} else {
			next('/');
		}
	},
	checkAdmin (next) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.roles.some(i => i.code === 'ROLE_ADMIN')) {
			next();
		} else {
			next('/');
		}
	},
	checkDoctor (next) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.roles.some(i => i.code === 'ROLE_DOCTOR')) {
			next();
		} else {
			next('/');
		}
	},
	checkPatient (next) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.roles.some(i => i.code === 'ROLE_PATIENT')) {
			next();
		} else {
			next('/');
		}
	},
	
};
