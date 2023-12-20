import { Link } from 'react-router-dom';
import { ButtonStyle } from '../../../components/button/buttonStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../../services/reviewMovies';
import { fetchCast } from '../../../services/castsService';
import { fetchSimilarMovies } from '../../../services/similarService';
import Logo from '../../../assets/logo-reactJS.png';
const Article = () => {
    
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [relatedMovies, SetRelatedMovies] = useState([]);
    const [castsMovies, SetCastsMovies] = useState([]);//diễn viên
    const handleScroll = () => {
        const view = document.getElementById('content-top');
        view.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchMovieDetails(id);
                setMovieDetails(response);
                document.title = `Movie - ${response.title}`;
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const RelatedMovies = async () => {
            try {
                const response = await fetchSimilarMovies(id);
                SetRelatedMovies(response);
            } catch (error) {
                console.log(error);
            }
        }
        RelatedMovies();
    }, [id])

    useEffect(() => {
        const castsMovies = async () => {
            try {
                const response = await fetchCast(id);
                SetCastsMovies(response.cast);
               console.log(response);

            } catch (error) {
                console.log(error);
            }
        }
        castsMovies();
    }, [id])

    return (
        <>
            <div id='content-top' className='w-full h-auto mt-[100px]'>
                {movieDetails ? (
                    <>
                        {movieDetails && (
                            <div className='flex justify-between '>
                                <div className='flex gap-5'>
                                    {movieDetails.poster_path ? (
                                        <>
                                            <div className='p-2'>
                                                <img className='w-full h-[350px] rounded-xl' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="" />
                                            </div>
                                        </>
                                    ) : (
                                        <h1>Đang cập nhật ảnh phim</h1>
                                    )}
                                    <div>
                                        <div className='name'>
                                            <span className='block text-[30px]'>{movieDetails.title}</span>
                                            <p className='max-w-[350px] text-[16px] py-3'>{movieDetails.overview}</p>
                                            <span className='block'>Lượt bình chọn: {movieDetails.vote_average}</span>
                                            <span className='block'>Ngôn ngữ: {movieDetails.original_language}</span>
                                            <span className='block'>Ngày phát hành: {movieDetails.release_date}</span>
                                            <span className='block'>Lượt xem: {movieDetails.popularity}</span>
                                        </div>
                                        <div className='pt-2 w-full'>
                                            <ButtonStyle to={`https://www.youtube.com/embed/${movieDetails.trailerURL}`} buttonContent={'Xem Trailer'} />
                                        </div>
                                    </div>
                                </div>
                                {movieDetails.backdrop_path ? (
                                    <>
                                        <div className="relative">
                                            <img className='w-[700px]' src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="Backdrop" />
                                            <div className="absolute w-[50px] h-[400px] top-0 left-0 bg-filter"></div>
                                        </div>
                                    </>
                                ) : (
                                    <h1 className='p-32'>Sớm cập nhật ảnh</h1>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <h1>Sớm cập nhật</h1>
                )
                }
                <div className="w-full h-auto pl-5">
                    <div className='w-full h-auto'>
                        <h1 className='text-[30px]'>Dàn diễn viên</h1>
                    </div>
                    <div className='w-full h-auto flex justify-between gap-10 overflow-auto'>
                        {castsMovies.map((cast)=>(
                            <div key={cast.id}>
                                <div className='w-max h-full text-center'>
                                  {cast.profile_path ? (
                                    <>
                                    <img
                                        className='object-cover w-[150px] rounded-xl'
                                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                        alt={cast.name}
                                    />
                                  </>
                                  ):(
                                     <img className='object-cover w-[150px] h-[225px]' src={Logo} alt="" />
                                  )}
                                        <span className='text-center'>{cast.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>




                </div>
                <div className='w-full pl-5 mt-[50px]'>
                    <h1 className='text-5xl'>Phim tương tự</h1>
                    <div className='w-full h-auto grid grid-cols-4 pt-10 gap-5 '>
                        {relatedMovies.length > 0 ? (
                            <>
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
                            </>
                        ) : (
                            <h1 className='text-[2rem] w-max'>Không có phim tưng tự</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
