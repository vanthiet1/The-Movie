import React from 'react';
import { Link } from 'react-router-dom'; 
const Header = () => {
    return (
        <>
        <div className='w-full bg-black p-10 flex items-center justify-between fixed top-0 left-0 z-10'>
            <div className="w-36 object-cover">
               <a href="/" className=''>
               <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" />
               </a>
            </div>
            <ul className='text-white font-bold flex w-2/5  justify-between'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                <li><Link to="/movie">Movie</Link></li>
                <li><Link to="/Show">Show</Link></li>
                <li><Link to="/Music">Music</Link></li>

            </ul>
            <div  className='pl-20 w-1/2'>
                <input className='w-full p-3 rounded-2xl bg-slate-800' type="text" placeholder='Tìm Phim' />
            </div>
           
         </div>
         
        </>
    );
};

export default Header;