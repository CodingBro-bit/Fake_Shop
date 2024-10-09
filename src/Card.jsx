
import { useOutletContext } from "react-router-dom";

import Item from "./Item";
import { useState } from "react";

export default function Shop(){


    const {cardItems , counter , setCounter} = useOutletContext();
    const [myitems , setMyitems] = useState(cardItems)
    
    cardItems.forEach(element => {
            console.log(element.id)
    });

    const handleClick = () => {
        const sum = myitems.reduce( (acc , num) => acc+num.price , 0);
        alert(`Your purchace is completed . Payment: ${sum} euros`)
    }
    function handleDelete(data){

        const updated = myitems.filter( item => item.id !== data.id);
        setMyitems(updated)
        setCounter(counter - 1)

    }
    return(
        <div>
            
            {(myitems.length===0) ? <h3>No items to buy yet</h3> :(
                
                
                <div>
                    <h3>Items to shop</h3>
                    <ul>
                    {myitems.map(
                            item => {return(
                            <div key={item.id}>
                                            <Item key={item.id} data={item} />
                                            <button key={item.id} onClick={() => handleDelete(item)}>Delete</button>
                            </div>)
                                    }
                    )}
                    </ul>

                   <button onClick={handleClick}>Purchase</button>
                </div>
                
            )}
        </div>
    );
}