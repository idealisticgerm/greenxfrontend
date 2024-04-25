import { useState, useEffect } from "react";
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from "axios";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    );
};

const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/user-auth");
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    return (ok ? <Outlet /> : (<div className="flex justify-center items-center h-[100vh]
    ">
        <h2 className="text-2xl font-semibold text-center">Please Login</h2></div>));
};

export default PrivateRoute;
