import { store } from '../store';

export default function setAuth(isAuth:boolean){
    isAuth
        ? store.dispatch({ type: "LOGIN", isAuth: true })
        : store.dispatch({ type: "LOGOUT", isAuth: false })
}