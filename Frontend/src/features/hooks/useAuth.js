import { useContext } from "react";
import { AuthContext } from "../auth/auth-context";
import { loginApi, registerApi, logoutApi, getMeApi } from "../services/api-auth.js";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { loading, setLoding, user, setUser } = context

    const handleRegister = async ({ username, email, password }) => {
        setLoding(true);
        const data = await registerApi({ username, email, password })
        setUser(data.user)
        setLoding(false)
    }
    const handleLogin = async ({ email, password }) => {
        setLoding(true);
        const data = await loginApi({ email, password })
        setUser(data.user)
        setLoding(false)
    }

    const handleLogout = async () => {
        setLoding(true);
        const data = await logoutApi()
        setUser(data.user)
        setLoding(false)
    }

    const handelGetMe = async () => {
        setLoding(true);
        const data = await getMeApi()
        setUser(data.user)
        setLoding(false)
    }

    return { user, loading, handleRegister, handleLogin, handleLogout, handelGetMe };

}
