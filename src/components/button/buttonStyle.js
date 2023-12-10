import React from 'react';
import { Link } from 'react-router-dom';
const ButtonStyle = () => {
    return (
        <div>
       <Link to={'/movie'}>
       <button className='p-7 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500'>
        Discover Movies & TV shows
       </button>
       </Link>
        </div>
    );
};

export { ButtonStyle};