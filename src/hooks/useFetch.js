import { useEffect, useReducer } from 'react';
import axios from 'axios';
const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'fetchAPI/request':
            return { ...state, isLoading: action.isLoading };
        case 'fetachAPI/success':
        case 'fetachAPI/error':
            return {
                ...state,
                isLoading: false,
                data: action.data,
                error: action.error,
            };
        default:
            break;
    }
};

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/request',
                isLoading: true,
            });

            setTimeout(async () => {
                try {
                    const res = await axios.get(url);
                    const data = await res.data;

                    dispatch({
                        type: 'fetachAPI/success',
                        isLoading: false,
                        data: data,
                        error: null,
                    });
                } catch (err) {
                    dispatch({
                        type: 'fetachAPI/error',
                        isLoading: false,
                        data: [],
                        error: err,
                    });
                }
            }, 1000);
        })();
    }, [url]);

    return { ...state };
};
