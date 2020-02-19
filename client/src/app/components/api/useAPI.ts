import {useCallback, useState} from 'react';

type APIState = {
    data: any,
    success: boolean,
    loading: boolean,
    error: string
}

const useAPI = (initialData = null) => {
    const initialState: APIState = {
        data: initialData,
        success: false,
        loading: false,
        error: null
    };

    const [response, setResponse] = useState(initialState);

    const callAPI = async (URL: string, options: Object = {method: 'GET'}) => {
        setResponse({...response, success: false, loading: true});
        try {
            const response = await fetch(URL, options);
            if (response.status < 200 || response.status >= 300) throw new Error("Failed to fetch");
            const json = await response.json();
            setResponse({
                data: json,
                success: true,
                loading: false,
                error: null,
            });
        } catch (e) {
            setResponse({
                data: initialData,
                success: false,
                loading: false,
                error: e.message
            });
        }
    };

    return [response, useCallback(callAPI, [])];
};

export default useAPI;