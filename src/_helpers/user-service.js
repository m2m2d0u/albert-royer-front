export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access_token) {
        // for Node.js Express back-end
        return {'access_token': user.access_token};
    } else {
        return {};
    }
}
export const getRefreshToken = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.refresh_token) {
        // for Node.js Express back-end
        return {'refresh_token': user.refresh_token};
    } else {
        return {};
    }
}
export const getInfoUser = (data) => {
    // console.log("Data:", data)
    return data ? {email: data.email, role: data.role.name, test: data.test._id, id: data?.id} : null
}
