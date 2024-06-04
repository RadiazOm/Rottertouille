import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const response = fetch(url
            )
                .then(response => response.json())
                .then(data => {
                    setData(data.products)
                }).catch((error) => (console.log(error)))
        };
        fetchData()
    }, []);
    return {data}
}

export default useFetch;