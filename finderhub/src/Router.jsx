import {createBrowserRouter} from 'react-router-dom'
import Home from './componentes/Home/Home'
import SocialMedias from './componentes/SocialMedia/SocialMedias';
import About from './componentes/About/About';


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
    }
]


const router = createBrowserRouter(routes);

export default router
