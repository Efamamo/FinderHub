import {createBrowserRouter} from 'react-router-dom'
import Home from './componentes/Home/Home'
import SocialMedias from './componentes/SocialMedia/SocialMedias';
import About from './componentes/About/About';
import SearchPage from './componentes/SearchPage/SearchPage';


const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/socials',
        element: <SocialMedias/>
    },
    {
        path: '/socials/search',
        element: <SearchPage/>
    }
]


const router = createBrowserRouter(routes);

export default router
