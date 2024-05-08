import { useState, useEffect } from 'react';
import { getUserById, getUserByNameAndStrength } from './ClientHooks';

export function searchUserData() {
    const [strLoading, setLoading] = useState(true);
    const [strError, setError] = useState(null);
    const [strData, setUserData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const { loading, error, data } = await getUserByNameAndStrength('','','');
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

    return { strLoading, strError, strData };
}
