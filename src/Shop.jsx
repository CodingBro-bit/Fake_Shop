import {  useOutletContext } from "react-router-dom";
import { LoadShop } from "./fetchedProducts";
import selectDist from "./Selected_categories";
import Item from '../src/Item'
import { useEffect } from "react";
import Button from "./Button";

export default function Shop(){



    const {mydata , error , loading } = LoadShop();
    // const [selected , setSelected] = useState('');
    const {addToCard , loadItems  , selected , setSelected} = useOutletContext();

    const categories = selectDist(mydata);

    useEffect(
        () => {
            if(mydata.length > 0 ){
                    loadItems(mydata);
            }
        } , [mydata, loadItems]
    );
    
    const handleOnchange = (e) => {
        const value = e.target.value;
        setSelected(value); 
        console.log("Immediately selected value:", value); 
    }

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>

    return(
        <div>
            <h1>welcome to shop</h1>
            <select name="cars" id="cars" onChange={handleOnchange} value={selected} >
                <option value='' disabled selected>-------</option>
                {categories.map( (dt,index) => <option key={index} value={dt}>{dt}</option>)}
            </select>
           
            {selected?
                
                <ul>
                    {mydata.map(
                        dt => {
                                if(dt.category === selected){
                                    console.log('ok')
                                   
                                   return ( <div key={dt.id}>
                                                <Item key={dt.id} data={dt}/>
                                                <Button key={dt.id} data={dt} addToCard={addToCard}/>
                                                
                                            </div>);
                                }
                        }
                    )}
                </ul> 
                :
                <ul>
                {mydata.map(
                    dt => 
                        {
                            return(<div key={dt.id}>
                            
                                <Item key={dt.id} data={dt}/>
                                <Button key={dt.id} data={dt} addToCard={addToCard}/>
                                
                            </div>);
                        }
                )}
                </ul>
                }
            
        </div>
    );
}