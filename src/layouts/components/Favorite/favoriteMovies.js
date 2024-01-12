// FavoriteMovie.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonStyle } from '../../../components/button/buttonStyle';
import DeleteMovies from '../../../components/deleteFavoriteMovies/deleteMovies';

const FavoriteMovie = () => {
  document.title = 'Favorite';
  const location = useLocation();
  const { favoriteMovies } = location.state || {};

  const [storedFavoriteMovies, setStoredFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedFavoriteMovies = localStorage.getItem('favoriteMovies');
    const parsedFavoriteMovies = storedFavoriteMovies ? JSON.parse(storedFavoriteMovies) : [];
    setStoredFavoriteMovies(parsedFavoriteMovies);
  }, []);

  useEffect(() => {
    if (favoriteMovies && favoriteMovies.length > 0) {
      const updatedFavoriteMovies = [...storedFavoriteMovies, ...favoriteMovies];
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavoriteMovies));
      setStoredFavoriteMovies(updatedFavoriteMovies);
    }
  }, [favoriteMovies, storedFavoriteMovies]);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = storedFavoriteMovies.filter((favMovie) => favMovie.id !== movieId);
    setStoredFavoriteMovies(updatedFavorites);
    localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div className=' p-5 text-center h-auto'>
        {storedFavoriteMovies.length > 0 ? (
          <div className='grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1 '>
            {storedFavoriteMovies.map((favoriteMovie, index) => (
              <div key={index} className='w-[100%] p-5 border-2 border-gray-800 rounded-2xl'>
                <img
                  className='w-[100%] rounded-lg'
                  src={`https://image.tmdb.org/t/p/w500${favoriteMovie.poster_path}`}
                  alt=''
                />
                <p className='p-5'>{favoriteMovie.title}</p>
                <ButtonStyle to={`/Reviewmovies/${favoriteMovie.id}`} buttonContent={'Xem Phim'} />
                <DeleteMovies onDelete={() => removeFromFavorites(favoriteMovie.id)} />
              </div>
            ))}
          </div>
        ) : (
          <p>Không có bộ phim yêu thích được chọn.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteMovie;
