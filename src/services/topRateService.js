import axios from "axios";
const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';
const BASE_URL = 'https://api.themoviedb.org/3';
const pages = 1;
        const fetchTopRateMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                        page:pages,
                    },
                });
                return response.data.results;
            } catch (error) {
                console.log(error);
            }
        }
   
      
export {
    fetchTopRateMovies,
  
}


