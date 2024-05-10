// import {useState, useEffect} from "react";
//
// const useFetch = ()=> {
//     const[items, setItems] = useState("");
//
//     useEffect(() => {
//         getItems()
//     }, []);
//
//     const getItems= async ()=> {
//         try {
//             const response = await fetch('https://localhost:8080/supermarkets');
//             const data = response.json();
//             setItems(data);
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     console.log(items);
// }
//
// export default useFetch();