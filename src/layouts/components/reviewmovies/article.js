import { Link } from 'react-router-dom';
import { ButtonStyle } from '../../../components/button/buttonStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { fetchMovieDetails } from '../../../services/reviewMovies';
import { fetchCast } from '../../../services/castsService';
import { fetchSimilarMovies } from '../../../services/similarService';
import { fetchVideoTrailer } from '../../../services/trailervideoService';
import Footer from '../footer';
import Logo from '../../../assets/logo-reactJS.png';
const Article = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [relatedMovies, SetRelatedMovies] = useState([]);
    const [castsMovies, SetCastsMovies] = useState([]);//diễn viên
    const [trailerKey, setTrailerKey] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false)
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
            } catch (error) {
                console.log(error);
            }
        }
        castsMovies();
    }, [id])

    const handleShowTrailer = () => {
        setShowTrailer(true);
    }


    useEffect(() => {
        const getTrailerKey = async () => {
            try {
                const videoData = await fetchVideoTrailer(id);
                if (videoData && videoData.results.length > 0) {
                    setTrailerKey(videoData.results[0].key);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getTrailerKey();
    }, [id]);
    return (
        <>
            <div id='content-top' className='w-full h-auto mt-[100px]'>
                {movieDetails ? (
                    <>
                        {movieDetails && (
                            <div className='flex justify-between max-md:grid max-md:grid-cols-1 max-md:gap-[10px] relative'>
                                <div className="absolute top-[-3px] left-[0] z-[5] w-[100%] max-md:top-[-25px] ">
                                    {trailerKey ? (
                                        <>
                                            {showTrailer && (
                                                <ReactPlayer
                                                    url={`https://www.youtube.com/watch?v=${trailerKey}`}
                                                    width="100%"
                                                    height="400px"
                                                    controls
                                                    playing={true}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <h1 className='text-center'>Trailer sắp có trong tương lai</h1>
                                    )}
                                </div>
                                <div className='flex gap-5'>
                                    {movieDetails.poster_path ? (
                                        <>
                                            <div className='p-2 max-xl:w-[330px] max-md:w-[350px]'>
                                                <img className='w-full h-[350px] rounded-xl max-md:object-cover max-md:mt-1' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="" />
                                            </div>
                                        </>
                                    ) : (
                                        <h1>Đang cập nhật ảnh phim</h1>
                                    )}
                                    <div>
                                        <div className='name'>
                                            <span className='block text-[30px] max-md:text-[20px]'>{movieDetails.title}</span>
                                            <p className='max-w-[520px] h-[150px] overflow-auto text-[16px] py-3 max-md:text-[14px] max-md:h-[140px]'>{movieDetails.overview}</p>
                                            <span className='block max-md:text-[14px] '>Lượt bình chọn: {movieDetails.vote_average}</span>
                                            <span className='block max-md:text-[14px] '>Ngôn ngữ: {movieDetails.original_language}</span>
                                            <span className='block max-md:text-[14px] '>Ngày phát hành: {movieDetails.release_date}</span>
                                            <span className='block max-md:text-[14px] '>Lượt xem: {movieDetails.popularity}</span>
                                        </div>
                                        <div className='pt-2 w-full'>
                                            <button onClick={handleShowTrailer} className='p-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90'>Xem Trailer</button>
                                        </div>
                                    </div>
                                </div>
                                {movieDetails.backdrop_path ? (
                                    <>
                                        <div className="relative max-md:w-[100%]">
                                            <img className='w-2xl max-md:w-[100%]' src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="Backdrop" />
                                            <div className="absolute w-[50px] h-[290px] top-0 left-0 bg-filter max-xl:w-[45px] max-xl:h-[250px] max-md:hidden"></div>
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
                <div className="w-full h-auto pl-5 mt-[50px]">
                    <div className='w-full h-auto'>
                        <h1 className='text-[30px] max-md:text-3xl max-md:py-5'>Dàn diễn viên</h1>
                    </div>
                    <div className='w-full h-auto flex justify-between gap-10 overflow-auto cast'>
                        {castsMovies.map((cast) => (
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
                                    ) : (
                                        <img className='object-cover w-[150px] h-[225px]' src={Logo} alt="" />
                                    )}
                                    <span className='text-center'>{cast.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full pl-5 mt-[50px] max-md:p-5'>
                    <h1 className='text-5xl max-md:text-3xl'>Phim tương tự</h1>
                    <div className='w-full h-auto grid grid-cols-4 pt-10 gap-5 max-xl:grid max-xl:grid-cols-2 max-md:grid max-md:grid-cols-1'>
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
                <Footer></Footer>
            </div >
        </>
    );
};

export default Article;
