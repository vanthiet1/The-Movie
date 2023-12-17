import React, { useEffect, useState } from 'react';
import { ButtonStyle } from '../../../../components/button/buttonStyle';
import {ComingMovies} from '../../../../services/comingService';
const UpComingMovies = () => {
 const [allDataComing, setAllDataComing] = useState([]);
 useEffect(() => {
    const fetchAllData = async () => {
        try {
            const dataComing= await ComingMovies()
            setAllDataComing(dataComing);
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllData()
}, [])
    return (
        <>
         <div className="w-full h-auto p-5">
                <div className='w-full p-10'>
                            <h1 className='text-5xl'>Sắp tới</h1>
                            <div className='w-full h-auto grid grid-cols-4 pt-10 gap-5 '>
                                {allDataComing.map((itemAllMovies) => (
                                    <div key={itemAllMovies.id} className='w-full h-max border-2 border-gray-500 rounded-xl'>
                                        <img
                                            className=' object-cover rounded-t-lg'
                                            src={`https://image.tmdb.org/t/p/w500${itemAllMovies.poster_path}`}
                                            alt=''
                                            style={{
                                                width: '100%',
                                                height: '400px',
                                            }}
                                        />
                                        <div className='px-5'>
                                            <span className='inline-block w-full h-20'>{itemAllMovies.title}</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center px-5'>
                                            <span>Vote: {itemAllMovies.vote_average}</span>
                                            <span>{itemAllMovies.release_date}</span>
                                        </div>
                                        <div className='w-full p-4'>
                                            <ButtonStyle to={`/Reviewmovies/${itemAllMovies.id}`} buttonContent={'Xem Phim'} />

                                        </div>
                                    </div>
                                ))}
                            </div>
                        
                
            
                </div>
            </div>
        </>
    );
};

export {UpComingMovies};