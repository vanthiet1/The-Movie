import { ButtonStyle } from '../../../components/button/buttonStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../../services/reviewMovies';
import { fetchAllmovies } from '../../../services/allService';
import { Link } from 'react-router-dom';
const Article = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [relatedMovies, SetRelatedMovies] = useState([]);
    const handleScroll = ()=>{
        console.log("scroll");
        const view = document.getElementById('content-top');
        view.scrollIntoView({behavior:"smooth",block:"start"})
    }
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

    useEffect(() => {
        const RelatedMovies = async () => {
            try {
                const response = await fetchAllmovies();
                SetRelatedMovies(response);
            } catch (error) {
                console.log(error);
            }
        }
        RelatedMovies();
    }, [])
    return (
        <>
            <div id='content-top' className='w-full h-auto mt-[100px]'>
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

                <div className="w-full h-auto pl-5">
                    <div className='w-full h-auto'>
                        <h1 className='text-[30px]'>Dàn diễn viên</h1>
                    </div>
                    <div className='w-full h-auto flex justify-between gap-10 overflow-auto'>
                        {Array(50).fill(0).map((_, index) => (
                            
                            <div className='w-[100%] h-full' key={index}>
                                <img className='object-cover p-2 w-[100%] rounded-[50%]' src="https://image.tmdb.org/t/p/w1280/5Brc5dLifH3UInk3wUaCuGXpCqy.jpg" alt="" />
                                <span className='text-center'>Leonardo DiCaprio</span>
                            </div>
                          

                        ))}
                    </div>
                </div>
                <div className='w-full pl-5 mt-[50px]'>
                    <h1 className='text-5xl'>Phim còn lại</h1>
                    <div className='w-full h-auto grid grid-cols-4 pt-10 gap-5 '>
                        {relatedMovies.map((itemAllMovies) => (
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
                                <Link
                                onClick={handleScroll}
                                >
                                    <ButtonStyle
                                     to={`/Reviewmovies/${itemAllMovies.id}`}
                                      buttonContent={'Xem Phim'}
                                       />
                              </Link>

                                </div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </>
    );
};

export default Article;
