


function List({children}){

    return(
        <li>
            {children}
        </li>
    )

};

function Avatar({data}){

    return(
    <div>
     
        <img src={data.image} alt={`${data.category}`} width={120} height={120} />
        <p>Category: {data.category}</p>
        <p>Description: {data.description}</p>
        <h6>Price: {data.price}</h6>

    </div>);
}

export default function Item({data}){


    return(
            <List>
                
                <Avatar data={data}/>
                
            </List>
    );
}