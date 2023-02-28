export const useFacilityHandleEdit = ({url, data, updatedData, type, dispatch, setLoading, setError, closePopUp, notify }) => {
    const edit = async()=>{
        console.log(data)
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
            console.log(json.data[1]);
            dispatch({ type: type, payload: json.data[1] });
            closePopUp();
            setLoading(false);
            setError(null);
            // notify.info(json.message);
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
            notify.error(json.error);
        }
    }

    const handleEdit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await edit();
    }

    return {edit, handleEdit};
}