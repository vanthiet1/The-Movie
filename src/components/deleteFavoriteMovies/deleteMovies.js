import React from 'react';

const DeleteMovies = ({onDelete}) => {
    return (
        <div>
           <button onClick={onDelete}  className='p-5 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-red-500 opacity-90 mt-2'>
             Xóa
            </button> 
        </div>
    );
};

export default DeleteMovies;