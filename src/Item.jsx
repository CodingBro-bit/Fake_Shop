import PropTypes from 'prop-types';



function List({children}){

    return(
        <li>
            {children}
        </li>
    )

};

List.propTypes = {
    children : PropTypes.node.isRequired,
}

function Avatar({data}){

    return(
    <div>
     
        <img src={data.image} alt={`${data.category}`} width={120} height={120} />
        <p>Category: {data.category}</p>
        <p>Description: {data.description}</p>
        <h6>Price: {data.price}</h6>

    </div>);
}

Avatar.propTypes = {
    data : PropTypes.shape({
        image: PropTypes.string.isRequired,       
        category: PropTypes.string.isRequired,    
        description: PropTypes.string,            
        price: PropTypes.oneOfType([              
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
    }).isRequired
}

export default function Item({data}){


    return(
            <List>
                
                <Avatar data={data}/>
                
            </List>
    );
}
Item.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
    }).isRequired,
};