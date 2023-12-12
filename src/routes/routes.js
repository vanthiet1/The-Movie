import paths from '../config/paths';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Movies from '../pages/Movies';

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
        path: paths.movies,
        component: Movies,
        title: 'Movies',
    }
]
export default publicRoutes;