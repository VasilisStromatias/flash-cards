import React, { useState } from 'react'

function Card({items}) {

    const[selectedId,setSelectedId] = useState(null);

    const handleClick = (id) => {
        setSelectedId(selectedId === id ? null : id)
        
        //ALTERNATIVE WAYS
        //1.if(selectedId === id){setSelectedId(null)}
        //2. setSelectedId(selectedId !== id ? id : null)
    }

  return (
      <>
      {items.map((i)=> 
        <li 
        key={i.id} 
        className={i.id === selectedId ? 'item selected': 'item'} 
        onClick={() => handleClick(i.id)}>
            <span>{i.id===selectedId ? i.answer : i.question}</span>
        </li>
        )}
    </>
    
  )
}

export default Card
