import { useOutletContext, useParams } from "react-router-dom";


export default function Details(){
    
    const {id} = useParams();
    //
    const {allitems} = useOutletContext();
    console.log(allitems)
    const item = allitems.find( current => current.id === parseInt(id));

    if(!item)
        return <h1>Not found</h1>
    
    return(
        <div>
            <img src={item.image} alt={`${item.category}`} width={120} height={120} />
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>
            <h6>Price: {item.price}</h6>
        </div>
    );
}