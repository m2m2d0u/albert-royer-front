export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access_token) {
        // for Node.js Express back-end
        return {'x-access-token': user.access_token};
    } else {
        return {};
    }
}
export const getInfoUser = (data) => {
    return data ? {email: data.email, role: data.role.name, test: data.test._id} : null
}
