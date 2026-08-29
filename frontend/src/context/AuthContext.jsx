import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    loginAdmin,
    getCurrentAdmin
} from "../services/authService";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [admin, setAdmin] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            setLoading(false);

            return;
        }


        getCurrentAdmin(token)

            .then((data) => {

                setAdmin(data.admin);

            })

            .catch(() => {

                localStorage.removeItem("token");

                setAdmin(null);

            })

            .finally(() => {

                setLoading(false);

            });

    }, []);


    const login = async (email, password) => {

        const data = await loginAdmin(
            email,
            password
        );

        localStorage.setItem(
            "token",
            data.token
        );

        setAdmin(data.admin);

        return data;
    };


    const logout = () => {

        localStorage.removeItem("token");

        setAdmin(null);
    };


    return (
        <AuthContext.Provider
            value={{
                admin,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {

    return useContext(AuthContext);
};