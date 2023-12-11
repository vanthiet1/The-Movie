import React, { useEffect, useState } from 'react';
import { fetchPopularMovie } from '../../services/popularServices';
import IconleftArow from '../icon/IconleftArow';
import IconrightArow from '../icon/IconrightArow';
const Article = () => {
    const [data, setData] = useState([]);
    const [currentIndex,setCurrenIndex] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await fetchPopularMovie();
                setData(movies)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    const handleLeftArrow = ()=>{
        setCurrenIndex((prevIndex)=>(prevIndex > 0  ? prevIndex - 1 : data.length - 1))
    }
    const handleRightArrow = () => {
        setCurrenIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };
    return (
        <>
            <div className='w-full pt-5'>
                <div className='p-10 w-full'>
                    <h1 className='text-5xl'>Phim đề cử</h1>
                </div>
                <div className='flex items-center p-10 gap-8 w-auto overflow-auto relative'>
                    <div 
                    onClick={handleLeftArrow} 
                    className="absolute z-10 left-5 bg-slate-500 p-5 rounded-full opacity-70">
                    <IconleftArow />
                    </div>
                    <div 
                    onClick={handleRightArrow} 
                    className="absolute z-10 right-5 bg-slate-500 p-5 rounded-full opacity-70"
                    >
                    <IconrightArow />
                    </div>

                    {data.length > 0 && data.map((itemMovie,index) => (
                        <div key={itemMovie.id} className='relative'>
                            <div className='relative w-96 h-auto transform hover:scale-110 transition-transform ease-in duration-300'>
                                <img className='brightness-110 rounded-2xl object-cover w-full' src={`https://image.tmdb.org/t/p/w500${itemMovie.poster_path}`} alt="" />
                                <div className='absolute bottom-0 bg-black w-full p-5 opacity-80 text-center'>
                                    <span className='w-max'>{itemMovie.original_title}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Article;