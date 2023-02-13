export const useFacilityHandleEdit = ({url, data, updatedData, type, dispatch, setLoading, setError, closePopUp}) => {
    const edit = async()=>{
        setLoading(true);
        const response = await fetch(url+data.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData),
        })

        const json = await response.json();

        if (json.success) {
            dispatch({ type: type, payload: json.data });
            closePopUp();
            setLoading(false);
            setError(null);
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
        }
    }

    const handleEdit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await add();
    }

    return {edit, handleEdit};
}