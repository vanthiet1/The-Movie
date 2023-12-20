import React from 'react';

const Footer = () => {
    const Data1 = ['Thông tin công ty', 'Giới thiệu dịch vụ sản phẩm', "Cách xem"];
    const Data2 = ['Đăng quảng cáo', 'Quan hệ kinh doanh', "CHợp tác cài đặt trước"];
    const Data3 = ['Phản ánh ý kiến', 'Trung tâm phản hồi bảo mật', "Câu hỏi thường gặp"];
    const Data4 = ['Điều khoản quyền riêng tư', 'Điều khoản sử dụng'];
    return (
        <>
            <div className="w-full h-auto">
                <div className=' w-full h-auto grid grid-cols-4 p-10 gap-10 max-md:grid max-md:grid-cols-2'>
                    <div className='w-full h-auto'>
                        <span className='block'>Giới thiệu về chúng tôi</span>
                        {Data1.map((infor1, index) => (
                            <span key={index} className='block text-2xl py-2 text-stone-400 cursor-pointer hover:text-stone-300'>{infor1}</span>
                        ))}
                    </div>
                    <div className='w-full h-auto'>
                        <span className='block'>Hợp tác</span>
                        {Data2.map((infor1, index) => (
                            <span key={index} className='block text-2xl py-2 text-stone-400 cursor-pointer hover:text-stone-300'>{infor1}</span>
                        ))}
                    </div>
                    <div className='w-full h-auto'>
                        <span className='block'>Hổ trợ và giúp đỡ</span>
                        {Data3.map((infor1, index) => (
                            <span key={index} className='block text-2xl py-2 text-stone-400 cursor-pointer hover:text-stone-300'>{infor1}</span>
                        ))}
                    </div>
                    <div className='w-full h-auto'>
                        <span className='block'>Điều khoản dịch vụ</span>
                        {Data4.map((infor1, index) => (
                            <span key={index} className='block text-2xl py-2 text-stone-400 cursor-pointer hover:text-stone-300'>{infor1}</span>
                        ))}
                    </div>
                </div>
                <div className="w-full text-center text-2xl max-md:p-[10px] max-md:pb-[100px]">
                    <span className='text-center w-full  text-stone-400'>Copyright © 2023 The Movie VanThiet</span>
                </div>
            </div>
        </>
    );
};

export default Footer;