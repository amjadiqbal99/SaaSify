import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const useAuth = () => {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'loading') {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [status]);

    const login = async (credentials) => {
        return await signIn('credentials', {
            redirect: false,
            ...credentials,
        });
    };

    const logout = async () => {
        await signOut({ redirect: false });
    };

    const isAuthenticated = () => {
        return !!session;
    };

    return {
        loading,
        session,
        login,
        logout,
        isAuthenticated,
    };
};

export default useAuth;