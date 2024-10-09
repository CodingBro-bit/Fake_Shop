
import App from '../src/App'
import Card from './Card';
import Shop from './Shop';
import Details from './Details';

const router = [
    {
        path : '/' , 
        element :  <App /> , 
        children : [
            { index: true, element: <h1>Home</h1> },
            {
                path : '/shop' , 
                element : <Shop />,
                
            },
            {
                path : '/shop/:id' ,
                element : <Details />
            },
            {
                path : '/card' , 
                element : <Card />
            }
        ]
    },
    
] ; 


export default router;