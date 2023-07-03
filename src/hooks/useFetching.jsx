import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetching = async () => {
        try {
            setIsLoading(true);
            const result = await callback();
            setData(result);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error, data];
};
