export const useHandleAddFacility = ({ url, data, type, dispatch, setLoading, setError, closeAddPopUp }) => {
    const add = async () => {
        setLoading(true);
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        const json = await response.json();

        if (json.success) {
            dispatch({ type: type, payload: json.data });
            closeAddPopUp();
            setLoading(false);
            setError(null);
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
        }
    }

    const handleAdd = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await add();
    }

    return { add, handleAdd }
}