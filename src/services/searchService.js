import axios from "axios";
const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';
const BASE_URL = 'https://api.themoviedb.org/3';
export  const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY, 
                query:query,  
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
