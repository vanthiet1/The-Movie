import { ButtonStyle } from '../../../components/button/buttonStyle';
const Section = () => {
 
    return (
        <>
         <div className='w-full h-auto relative max-md:mt-[100px]'>
           <img className='filter blur-sm w-full'  src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/f8745b0e-cb07-404e-b5bf-e98d1584f283/VN-vi-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
         <div className='absolute left-1/4 top-2/4  max-xl:top-[200px] max-xl:left-[200px] max-md:top-[0] max-md:left-[0] max-md:p-[20px]'>
            <h1  className='text-6xl font-bold pb-5  max-xl:text-[3rem] max-md:text-[1.6rem]'>Hướng dẫn phát trực tuyến phim,<br />truyền hình và thể thao của bạn</h1>
            <span className='pb-5 inline-block max-md:text-[1.3rem] content-banner1'>Tìm nơi phát trực tuyến chương trình giải trí mới, <br />phổ biến và sắp ra mắt.</span>
              <div className="w-2/5 max-md:w-full max-md:text-[1rem]">
              <ButtonStyle  buttonContent={'Khám Phá & Phim Hay'} to={'/movies'}/>
              </div>
         </div>
         </div>
        </>
    );
};

export default Section;