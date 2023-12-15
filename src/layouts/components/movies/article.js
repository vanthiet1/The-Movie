
import { ButtonStyle } from '../../../components/button/buttonStyle';
import {AllMovies} from './data/allMovies';
const Article = () => {
    const buttonList = ["Tất cả", "Đánh giá cao", "Xu hướng", "Sắp tới"];
   
   
    return (
        <>
            <div className="w-full h-auto mt-40 p-5">
                <div className='w-full h-auto flex gap-4 text-x p-10'>
                    {buttonList.map((item, index) => (
                        <ButtonStyle
                            key={index}
                            buttonContent={item}
                        />
                    ))}
                </div>
                <AllMovies></AllMovies>
            </div>
        </>
    );
};

export default Article;