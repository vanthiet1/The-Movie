// import { useEffect, useState } from "react";
// import { get } from '../utils/httpRequest';
// import Section from "../layouts/components/section"; 
// const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';

// const PopularServices = () => {
//     const [popularMovies, setPopularMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async (type = 'less', pageNum) => {
//             try {
//                 const response = await get('movie/popular', {
//                     params: {
//                         api_key: API_KEY,
//                         type,
//                         page: pageNum
//                     },
//                 });

//                 setPopularMovies(response.data);
//                 console.log();
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchData()
//     }, []);

//     return (
//         <>
          
//         </>
//     );
// };

// export default PopularServices;
