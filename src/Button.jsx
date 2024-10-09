import { Link, useOutletContext } from "react-router-dom";




export default function Button({data , addToCard}){

    const {counter , setCounter} = useOutletContext();

    const add = () => {
        addToCard(data);
        setCounter(counter +1 );
        console.log(`added ${data.title}`)
    }   

   
    return(
        <div>

            <button onClick={add}>Add to card</button>
            <Link to={`/shop/${data.id}`}>

                <button > View Item</button>

            </Link>

        </div>
    );
}