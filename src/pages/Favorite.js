import React from 'react';
import HeaderPage from '../layouts/components/header';
import FooterPage from '../layouts/components/footer';
const Favorite = () => {
    document.title="Favorite";
    return (
        <div>
        <HeaderPage></HeaderPage>
         <div className="mt-[100px] p-5 text-center h-[250px]">
         <h1 className='updating'>Tính năng đang phát triển bởi Văn thiết Frontend developer</h1>
         </div>
        <FooterPage></FooterPage>
        </div>
    );
};

export default Favorite;