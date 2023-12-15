import axios from "axios";

const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';
const BASE_URL = 'https://api.themoviedb.org/3';
export  const searchMovies = async (page=1,query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/keyword`, {
            params: {
                api_key: API_KEY, 
                page:page,
                query:query,      
            },
        });

        return response.data;
      
    } catch (error) {
        console.log(error);
    }
}
