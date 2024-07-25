import {createBrowserRouter} from 'react-router-dom'
import Home from './componentes/Home/Home'


const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <></>
    }
]


const router = createBrowserRouter(routes);

export default router
