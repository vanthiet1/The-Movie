import axios from "axios";
const API_KEY = 'b9213c2cb1c7e5cd36af34a45ccc92fe';
const BASE_URL = 'https://api.themoviedb.org/3';
const pages =  [1,2]
const fetchAllmovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page:pages[1],
            },
        });
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchAllmovies
};