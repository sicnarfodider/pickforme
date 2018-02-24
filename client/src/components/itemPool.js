import React from 'react';


const ItemPool = props =>{

    const itemList  = props.items.map((item, index)=>{
        return <div key={index}>{item}</div>
    })
    return(
        <div>
            <h3>List of Options</h3>
            {itemList}
        </div>
    )
}

export default ItemPool;
