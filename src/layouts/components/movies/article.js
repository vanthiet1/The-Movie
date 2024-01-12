
// import { ButtonStyle } from '../../../components/button/buttonStyle';
import { AllMovies } from './data/allMovies';
import { TopRatedMovies } from './data/topRatedMovies';
import { TrendingMovie } from './data/trendingMovies';
import { UpComingMovies } from './data/comingMovies';
import { useState } from 'react';
import Skeleton from '../../../components/Skeleton/Skeleton';

const Article = () => {
  const buttonList = ["Tất cả", "Đánh giá cao", "Xu hướng", "Sắp tới"];
  const pages = [<AllMovies />, <TopRatedMovies />, <TrendingMovie />, <UpComingMovies />]

  const [listOptionPage, setListOptionPage] = useState(0);
  const [loading,setLoading] = useState(false);
  const handlePage = (index) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setListOptionPage(index)
    }, 1000)
  }
  return (
    <>
      <div className="w-full h-auto mt-40 p-5 max-md:p-0">
        <div className='w-full h-auto flex gap-4 text-x p-8 max-md:grid max-md:grid-cols-2 max-md:p-5 '>
          {buttonList.map((item, index) => (
            <button
              className='p-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90'
              key={index}
              onClick={() => handlePage(index)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className='flex mt-10 max-md:grid max-md:grid-cols-1'>
  {loading ? (
    Array.from({ length: 4 }).map((_, index) => (
      <Skeleton key={index} />
    ))
  ) : (
    pages[listOptionPage]
  )}
</div>
      </div>
    </>
  );
};

export default Article;