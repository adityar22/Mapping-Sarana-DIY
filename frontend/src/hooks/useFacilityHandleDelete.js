export const useHandleDelete = ({url, data, type, dispatch, setLoading, setError, notify, closePopup}) => {
    const remove = async () => {
        setLoading(true);
        const response = await fetch(url + data._id, {
            method: 'DELETE',
            headers: {

            }
        });

        const json = await response.json();

        if (json.success) {
            closePopup();
            setLoading(false);
            setError(null);
            dispatch({ type: type, payload: json.data });
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
        }
    }

    const handleRemove = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await remove();
    }

    return { remove, handleRemove };
}