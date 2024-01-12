
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const LikeMovies = ({ itemMovies }) => {
    const navigate = useNavigate();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteMovies');
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    }, []);
    const addToFavorites = () => {
        const isDuplicate = favoriteMovies.some((favMovie) => favMovie.id === itemMovies.id);
    
        if (!isDuplicate) {
            const updatedFavorites = [...favoriteMovies, { ...itemMovies }];
            setFavoriteMovies(updatedFavorites);
            localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
            navigate('/favorite', { state: { favoriteMovie: { ...itemMovies } } });
        } else {
            alert('Đã có trong danh sách yêu thích')
        }
    };

    return (
        <div>
            <button onClick={() => addToFavorites(itemMovies)} className='p-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 mt-2'>
                Yêu thích
            </button>
        </div>
    );
};

export default LikeMovies;