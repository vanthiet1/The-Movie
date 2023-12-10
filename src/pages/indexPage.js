import React from 'react';
import  HomePage from './Home';
import  FavoritePage from './Favorite';
import  Movie from './Movie';

const indexPage = () => {
    return (
        <div>
            <HomePage></HomePage>
            <FavoritePage></FavoritePage>
            <Movie></Movie>
        </div>
    );
};

export default indexPage;