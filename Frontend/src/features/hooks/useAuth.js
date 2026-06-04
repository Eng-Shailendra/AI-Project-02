import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { loginApi, registerApi, logoutApi, getMeApi } from "../api/api-auth.js";
import toast from "react-hot-toast";
import { data } from "react-router-dom";

export const useAuth = () => {
    const { loading, setLoading, user, setUser } = useContext(AuthContext);

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const data = await registerApi({ username, email, password });
            setUser(data.user);
            setLoading(false);

        } catch (err) {
            toast(err.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);
            const data = await loginApi({ email, password });
            setUser(data.user);
        } catch (err) {
            toast(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            const data = await logoutApi();
            setUser(data.user);
            setLoading(false);
        } catch (err) {
            toast(err.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const handelGetMe = async () => {
        try {
            const data = await getMeApi();
            setUser(data.user);
            setLoading(false);
        } catch (err) {
            toast(err.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    return { user, loading, handleRegister, handleLogin, handleLogout, handelGetMe };
};
