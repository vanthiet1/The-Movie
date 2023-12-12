import React from 'react';

const ButtonPage = ({content}) => {
    return (
        <div>
         <button className='p-5 bg-red-500 rounded-lg'>
           {content}
         </button>
        </div>
    );
};

export  {ButtonPage};