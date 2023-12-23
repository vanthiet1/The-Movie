import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Language from '../../components/OptionLanguage/language';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import { searchMovies } from '../../services/searchService';

const Header = () => {
    const { t } = useTranslation();
    // const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowResults(e.target.value.trim() !== '');
    };
    document.addEventListener('click',()=>{
        setShowResults(false);
    })

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (searchQuery.trim() !== '') { 
                    const response = await searchMovies(searchQuery);
                    setSearchResults(response.results);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchSearchResults();
    }, [ searchQuery]);

    return (
        <>
            <div className='w-full bg-black p-10 flex items-center justify-between fixed top-[-3px] left-0 z-10 opacity-90  max-xl:gap-5 max-md:p-[20px] max-md:top-[-5px]'>
                <div className="w-36 object-cover">
                    <a href="/" className=''>
                        <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" />
                    </a>
                </div>
                <ul className='text-white font-medium flex w-2/5 justify-around max-w-screen-md max-md:absolute max-md:bottom-[-700px] max-md:left-0 max-md:bg-black max-md:z-10 max-md:w-full max-md:h-[100px] max-md:flex max-md:items-center  '>
                    <li><Link to="/">{t('Trang Chủ')}</Link></li>
                    <li><Link to="/movies">{t('Bộ Phim')}</Link></li>
                    <li><Link to="/favorite">{t('Yêu Thích')}</Link></li>
                </ul>
                <div className='w-2/6 relative  max-md:w-[90%]'>
                    <div className='relative'>
                        <input
                            className='w-full p-3 rounded-2xl bg-slate-800'
                            type="text"
                            placeholder={t('Tìm Phim')}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <div className='absolute top-4 right-10 hover:text-2xl ease-in duration-300 max-md:right-7'>
                            <svg stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="search" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>

                    {showResults && (
                        <div className="absolute bg-slate-900 w-[475px] h-[400px] z-10 rounded-lg overflow-auto max-xl:left-[-0px] max-xl:w-[370px] max-md:w-[300px] max-md:left-[-50px]">
                            <div className='h-max'>
                                {searchResults.map((result) => (
                                    <Link to={`/Reviewmovies/${result.id}`} key={result.id}>
                                        <div className='w-full p-5 flex gap-4 cursor-pointer hover:brightness-125 hover:bg-slate-800'>
                                            {result.poster_path && result.title && result.overview ? (
                                                <>
                                                    <div className='w-[30%]'>
                                                        <img className='w-[100%] h-[100%] object-cover' src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="" />
                                                    </div>
                                                    <div className='w-[70%]'>
                                                        <span className='inline-block'>{result.title}</span>
                                                        <p className='text-[13px]'>{result.overview}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <span>Sớm cập nhật</span>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
