import paths from '../config/paths';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Movies from '../pages/Movies';

const publicRoutes = [
    {
        path: paths.Home,
        component: Home,
        title: 'Home',
    },                                             
    {
        path: paths.Favorite,
        component: Favorite,
        title: 'Favorite',
    },   
    {
        path: paths.Movies,
        component: Movies,
        title: 'Movies',
    }
]
export default publicRoutes;