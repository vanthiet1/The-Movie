
// import { ButtonStyle } from '../../../components/button/buttonStyle';
import { AllMovies } from './data/allMovies';
import { TopRatedMovies } from './data/topRatedMovies';
import { TrendingMovie } from './data/trendingMovies';
import { UpComingMovies } from './data/comingMovies';
import { useState } from 'react';
const Article = () => {
  const buttonList = ["Tất cả", "Đánh giá cao", "Xu hướng", "Sắp tới"];
  const pages = [<AllMovies />, <TopRatedMovies />, <TrendingMovie />, <UpComingMovies />]

  const [listOptionPage, setListOptionPage] = useState(0);
  const handlePage = (index) => {
    setTimeout(() => {
      setListOptionPage(index)
    }, 300)
  }
  return (
    <>
      <div className="w-full h-auto mt-40 p-5">
        <div className='w-full h-auto flex gap-4 text-x p-14'>
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

        <div>

          {
            pages[listOptionPage]
          }
        </div>
      </div>
    </>
  );
};

export default Article;