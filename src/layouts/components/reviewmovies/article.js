import { ButtonStyle } from '../../../components/button/buttonStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../../services/reviewMovies'; 
const Article = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchMovieDetails(id); 
                setMovieDetails(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <div className='w-full h-auto mt-32'>
                {movieDetails && (
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <div>
                                <img className='w-full h-[350px] rounded-xl' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="" />
                            </div>
                            <div>
                                <div className='name'>
                                    <span className='block text-[30px]'>{movieDetails.title}</span>
                                    <p className='max-w-[350px] text-[16px] py-3'>{movieDetails.overview}</p>
                                    <span className='block'>Lượt bình chọn: {movieDetails.vote_average}</span>
                                    <span className='block'>Ngôn ngữ: {movieDetails.original_language}</span>
                                    <span className='block'>Ngày phát hành: {movieDetails.release_date}</span>
                                    <span className='block'>Lượt xem: {movieDetails.popularity}</span>
                                </div>
                                <div className='pt-2'>
                                    <ButtonStyle to={`https://www.youtube.com/embed/${movieDetails.trailerURL}`} buttonContent={'Xem Trailer'} />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className='w-[700px]' src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="Backdrop" />
                            <div className="absolute w-[50px] h-[400px] top-0 left-0 bg-filter"></div>
                        </div>
                    </div>
                )}
                <div className="w-full h-auto">
                    <div className='p-5'>
                        <h1>Phim liên quan</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
