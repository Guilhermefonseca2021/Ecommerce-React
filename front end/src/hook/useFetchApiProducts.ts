










// import { useState, useEffect } from "react";
// import axios from "axios";
// import { AxiosResponse } from 'axios'
// import strapiApi from "../config/strapiApi";

// export default function useFetchAPIproducts() {
//   const [products, setProducts] = useState<AxiosResponse[]>([]);

//   useEffect(() => {
//     const fetchData = async function () {
//       try {
//         const response = await axios.get(`${strapiApi.apiUrl}/products` || "", {
//           headers: {
//             Authorization: "Bearer " + strapiApi.apiTokenProducts,
//           },
//         });

//         console.log(response); 
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData(); 
//   }, []); 

//   return { products };
// }
