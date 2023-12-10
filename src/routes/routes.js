import paths from '../config/paths';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Movie from '../pages/Movie';

const publicRoutes = [
    {
        path: paths.home,
        component: Home,
        title: 'Home',
    },                                             
    {
        path: paths.favorite,
        component: Favorite,
        title: 'Favorite',
    },   
    {
        path: paths.movie,
        component: Movie,
        title: 'Movie',
    }
]
export default publicRoutes;