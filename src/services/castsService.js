import axios from 'axios';
const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';
const BASE_URL = 'https://api.themoviedb.org/3';
     const fetchCast = async (id) => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/casts`,
          {
            params: {
              api_key: API_KEY, 
            },
          }
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    export {
        fetchCast
    }
    