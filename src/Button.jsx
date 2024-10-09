import { Link, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";



export default function Button({data , addToCard}){

    const {counter , setCounter} = useOutletContext();

    const add = () => {
        addToCard(data);
        setCounter(counter +1 );
        console.log(`added ${data.title}`)
    }   

Button.propTypes = {
    data: PropTypes.shape({
        id : PropTypes.number.isRequired,
        title : PropTypes.string.isRequired
    }).isRequired,
    addToCard : PropTypes.func.isRequired,
};

    return(
        <div>

            <button onClick={add}>Add to card</button>
            <Link to={`/shop/${data.id}`}>

                <button > View Item</button>

            </Link>

        </div>
    );
}