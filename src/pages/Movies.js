import HeaderPage from '../layouts/components/header';
import Footer from "../layouts/components/footer";
import Article from '../layouts/components/movies/article';
const Movie = () => {
     document.title="Movies";

    return (
        <div>
            <HeaderPage />
            <Article />
            <Footer />
        </div>
    );
};

export default Movie;