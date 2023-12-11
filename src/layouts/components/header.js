import React from 'react';
import { Link } from 'react-router-dom';
import Language from '../../components/OptionLanguage/language';
import { useTranslation } from 'react-i18next'; 

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='w-full bg-black p-10 flex items-center justify-between fixed top-0 left-0 z-10 opacity-90'>
                <div className="w-36 object-cover">
                    <a href="/" className=''>
                        <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" />
                    </a>
                </div>
                <ul className='text-white font-medium flex w-2/5  justify-around'>
                    <li><Link to="/">{t('Trang Chủ')}</Link></li>
                    <li><Link to="/movie">{t('Bộ Phim')}</Link></li>
                    <li><Link to="/favorite">{t('Yêu Thích')}</Link></li>
                </ul>
                <div className='w-2/6'>
                    <div className='relative'>
                        <input className='w-full p-3 rounded-2xl bg-slate-800' type="text" placeholder={t('Tìm Phim')} />
                        <div className='absolute top-4 right-10 hover:text-2xl ease-in duration-300 '>
                            <svg stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="search" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Language></Language>
                </div>
            </div>
        </>
    );
};

export default Header;
