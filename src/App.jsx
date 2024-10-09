import { Link, Outlet } from "react-router-dom";

import { useState } from "react";



export default function App(){

  const [cardItems , setCarditems] = useState([]);
  const [allitems , setallItems] = useState([]);
  const [selected , setSelected]  = useState('');
  const [counter , setCounter] = useState(0);
 
  const addToCard = (data) => {
      setCarditems([...cardItems , data])
  }
  
  const loadItems = (shop) => {

    const load = [...shop]
    setallItems(load);

  }

  

  return(
    <>
    <div>
      
      <Link to="/">Home </Link>
      <Link to="shop">Shop </Link>
      <div>
          {counter}
      </div>
      <Link to="card">Card</Link>
      
    </div>
    <div>

      <Outlet context={{cardItems , addToCard , allitems , loadItems , selected , setSelected , counter ,setCounter}}/>
      
    </div>
    </>
  );
}