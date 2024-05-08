import { useState, useEffect } from 'react';
import { getUserById } from '../hooks/ClientHooks';

export function useUserData() {
    const [userLoading, setLoading] = useState(true);
    const [userError, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { loading, error, data } = await getUserById('me');
                setLoading(loading);
                setError(error);
                setUserData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { userLoading, userError, userData };
}

export function useUserDataById(id) {
    const [userLoading, setLoading] = useState(true);
    const [userError, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { loading, error, data } = await getUserById(id);
                setLoading(loading);
                setError(error);
                setUserData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { userLoading, userError, userData };
}
