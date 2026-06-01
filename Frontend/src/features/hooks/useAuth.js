import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/auth-context";
import { loginApi, registerApi, logoutApi, getMeApi } from "../services/api-auth.js";
import toast from "react-hot-toast";
import { data } from "react-router-dom";


export const useAuth = () => {

    const { loading, setLoding, user, setUser } = useContext(AuthContext);

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoding(true);
            const data = await registerApi({ username, email, password })
            setUser(data.user)
            setLoding(false)
        } catch (err) {
            toast(err.message);
        }
        finally {
            setTimeout(() => {
                setLoding(false);
            }, 2000);
        }

    }
    const handleLogin = async ({ email, password }) => {
        try {
            setLoding(true);
            const data = await loginApi({ email, password })
            setUser(data.user)
        } catch (err) {
            toast(err.message);
        }
        finally {
            setLoding(false);
        }
    }
    const handleLogout = async () => {
        try {
            setLoding(true);
            const data = await logoutApi()
            setUser(data.user)
            setLoding(false)
        } catch (err) {
            toast(err.message);
        }
        finally {
            setTimeout(() => {
                setLoding(false);
            }, 2000);
        }
    }

    const handelGetMe = async () => {
        try {

            const data = await getMeApi();
            setUser(data.user)
            setLoding(false)
        } catch (err) {
            toast(err.message);
        }
        finally {
            setTimeout(() => {
                setLoding(false);
            }, 2000);
        }
    }

    
    return { user, loading, handleRegister, handleLogin, handleLogout, handelGetMe };

}
