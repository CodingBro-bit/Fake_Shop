import {  useEffect, useState } from "react";

export const LoadShop = () => {
        
    const [mydata , setMydata] = useState([{}]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then( res => 
           {
            if(res.status >= 404){
                throw new Error('server not found')
            }
        
            return res.json();
           }
        )
        .then( data => {
            console.log(data)
            
            setMydata(data)
            
        })
        .catch(err => setError(err) )
        .finally( () => {setLoading(false)})
    } , [])


    return { mydata , error , loading};
}