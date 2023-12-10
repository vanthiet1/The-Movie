import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
export const get = async (path,options = {})=>{
try {
    const response = await httpRequest.get(path,options);
    return response.data;
} catch (error) {
    console.log(error);
}
};
export default httpRequest;