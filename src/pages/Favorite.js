import FavoriteMovie from '../layouts/components/Favorite/favoriteMovies';

import HeaderPage from '../layouts/components/header';
import FooterPage from '../layouts/components/footer';

const Favorite = () => {
    document.title = "Favorite";
   
    return (
        <div>
            <HeaderPage />
            <div className="mt-[100px] p-5 text-center h-auto">
            <h1 className='text-center pb-5'>Thông tin các bộ phim yêu thích</h1>
            <FavoriteMovie></FavoriteMovie>
          
            </div>
            <FooterPage />
        </div>
    );
};

export default Favorite;
