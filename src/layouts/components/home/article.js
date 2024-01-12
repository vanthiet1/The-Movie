import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeMovies from '../../../components/likeMovies/likeMovies';
import { fetchPopularMovie } from '../../../services/popularServices';
import IconleftArow from '../../icon/IconleftArow';
import IconrightArow from '../../icon/IconrightArow';
import { ButtonStyle } from '../../../components/button/buttonStyle';
import Pagination from '../../../hooks/Pagination';
import Skeleton from '../../../components/Skeleton/Skeleton';
import {nominationsMovies} from '../../../services/nominationsService';

const Article = () => {

    const [data, setData] = useState([]); // phim chính
    const [dataNominations, setDataNomination] = useState([]);//phim đề cử
    const [currentIndex, setCurrenIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // page 1
    const [showContent, setShowContent] = useState(false);
    const itemWidth = 200;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await fetchPopularMovie();
                setData(movies);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(true);
                setShowContent(true);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesNominations = await nominationsMovies();
                setDataNomination(moviesNominations);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(true);
                setShowContent(true);
            }
        };
        fetchData();
    }, []);


    const handleLeftArrow = () => {
        setCurrenIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
    };

    const handleRightArrow = () => {
        setCurrenIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const [loading, setLoading] = useState(false);
    const handlePageChange = async (pageNumber) => {
        setLoading(false);
        setShowContent(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setLoading(true);
        }, 600)

    };

    const numberProduct = 4;
// 


    return (
        <>
            <div className='w-full pt-5'>
                <div className='p-10 w-full h-auto max-md:p-5'>
                    <h1 className='text-5xl max-md:text-4xl'>Phim đề cử</h1>
                </div>
                <div className='relative'>
                    <div
                        onClick={handleLeftArrow}
                        className='absolute z-10 left-5 top-1/2 bg-slate-500 hover:bg-slate-700 p-5 rounded-full opacity-70 '
                    >
                        <IconleftArow />
                    </div>
                    <div
                        onClick={handleRightArrow}
                        className='absolute z-10 right-5 top-1/2 bg-slate-500 hover:bg-slate-700 p-5 rounded-full opacity-70'
                    >
                        <IconrightArow />
                    </div>
                    <div className='flex items-center p-10 gap-8 w-full overflow-hidden'>
                        {
                            dataNominations.map((itemMovie) => (
                                <div
                                    key={itemMovie.id}
                                    className='w-full transition-transform ease-in-out duration-500'
                                    style={{ transform: `translateX(${-currentIndex * itemWidth}px)` }}
                                >
                                  <Link to={`/Reviewmovies/${itemMovie.id}`}>
                                  <div className='relative w-96 h-auto group transform hover:scale-110 transition-transform ease-in-out duration-500'>
                                        <img
                                            className='rounded-2xl object-cover w-full group-hover:brightness-110'
                                            src={`https://image.tmdb.org/t/p/w500${itemMovie.poster_path}`}
                                            alt=''
                                        />
                                        <div className='absolute bottom-0 bg-black w-full p-5 opacity-80 text-center'>
                                            <span className='w-max'>{itemMovie.original_title}</span>
                                        </div>
                                    </div>
                                  </Link>
                                </div>
                            ))}
                    </div>
                </div>

                <div className='w-full p-10 max-md:p-5'>
                    <h1 className='text-5xl max-md:text-3xl'>Phim chính</h1>
                    <div className='w-full h-auto grid grid-cols-4 pt-10 gap-5 max-xl:grid max-xl:grid-cols-2  max-md:grid max-md:grid-cols-1 '>
                        {showContent &&
                            chunkArray(data, numberProduct)[currentPage - 1].map((itemMovies) => (
                                <div key={itemMovies.id} className='w-full h-max border-2 border-gray-500 rounded-xl'>
                                    {!loading ? (
                                        <Skeleton />
                                    ) : (
                                        <>
                                            <img
                                                className=' object-cover rounded-t-lg'
                                                src={`https://image.tmdb.org/t/p/w500${itemMovies.poster_path}`}
                                                alt=''
                                                style={{
                                                    width: '100%',
                                                    height: '400px',
                                                }}
                                            />
                                            <div className='px-5 py-5'>
                                                <span className='inline-block w-full h-20'>{itemMovies.title}</span>
                                            </div>
                                            <div className='w-full flex justify-between items-center px-5'>
                                                <span>Vote: {itemMovies.vote_average}</span>
                                                <span>{itemMovies.release_date}</span>
                                            </div>
                                            <div className='w-full p-4 '>
                                                <ButtonStyle to={`/Reviewmovies/${itemMovies.id}`} buttonContent={'Xem Phim'} />
                                                <LikeMovies itemMovies={itemMovies}></LikeMovies>
                                      
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                    </div>

                    <div className='flex justify-center max-md:text-center'>
                        <Pagination
                            totalPages={Math.ceil(data.length / numberProduct)}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;

