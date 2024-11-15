export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const actionLogin = (dataUser) => {
    return {
        type: LOGIN,
        payload: dataUser
    }
}
export const actionLogout = () => {
    return {
        type: LOGOUT
    }
}