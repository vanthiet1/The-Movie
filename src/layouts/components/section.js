import React from 'react';
import { ButtonStyle } from '../../components/button/buttonStyle';
const Section = () => {
    return (
        <>
         <div className='w-full h-auto relative'>
           <img className='filter blur-sm w-full'  src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/319e80c0-66aa-416c-9407-c7377a8c126a/VN-vi-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
         <div className='absolute left-1/4 top-2/4'>
            <h1 className='text-6xl font-bold pb-5'>Hướng dẫn phát trực tuyến phim, <br /> truyền hình và thể thao của bạn</h1>
            <span className='pb-5 inline-block'>Tìm nơi phát trực tuyến chương trình giải trí mới, phổ biến và sắp ra mắt.</span>
            <ButtonStyle buttonContent={'Khám Phá & Phim Hay'} to={'/movie'}/>
         </div>
         </div>
        </>
    );
};

export default Section;