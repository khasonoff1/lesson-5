import { useCallback, useState } from "react";
import { v4 } from "uuid";

const useCRUD = ({ localStorageKey, initialData }) => {
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || []);
    const [data, setData] = useState(initialData);
    const [validated, setValidated] = useState(false);
    const [selected, setSelected] = useState("null");
    const [search, setSearch] = useState("");

    const resetForm = useCallback(() => {
        setData(initialData);
    }, [initialData]);

    const handleData = useCallback(
        (e) => {
            setData({ ...data, [e.target.id]: e.target.value });
        },
        [data]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            if (form.checkValidity()) {
                let newAllData;
                let newData = { ...data, price: +data.price, id: v4() };
                if (selected === "null") {
                    newAllData = [...allData, newData];
                } else {
                    newAllData = allData.map((data) => {
                        if (data.id === selected) {
                            return newData;
                        } else {
                            return data;
                        }
                    });
                }

                setAllData(newAllData);
                resetForm();
                setSelected("null");
                localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
            } else {
                setValidated(true);
            }
        },
        [allData, data, localStorageKey, resetForm, selected]
    );

    const editData = useCallback(
        (id) => {
            console.log(id);
            let data = allData.find((data) => data.id === id);
            setSelected(id);
            setData(data);
        },
        [allData]
    );

    const deleteData = useCallback(
        (id) => {
            console.log(id);
            let newAllData = allData.filter((data) => data.id !== id);
            setAllData(newAllData);
            localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
        },
        [allData, localStorageKey]
    );

    const handleSearch = useCallback((e) => {
        console.log(e.target.value);
        setSearch(e.target.value.trim().toLowerCase());
    }, []);

    return {
        selected,
        validated,
        allData,
        data,
        search,
        handleSubmit,
        handleData,
        editData,
        deleteData,
        handleSearch,
    };
};

export default useCRUD;
