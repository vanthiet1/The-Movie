import React from 'react';
import { Link } from 'react-router-dom';
const ButtonStyle = ({buttonContent, to,target}) => {
    return (
        <div>
       <Link to={to}>
       <button className='p-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90'>
        {buttonContent}
       </button>
       </Link>
        </div>
    );
};

export { ButtonStyle};