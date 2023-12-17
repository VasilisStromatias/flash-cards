import React, { useState } from 'react'

function Card({items}) {

    const[obj,setObj] = useState(items);

    const seeTheAnswer = (e) => {
        const target = e.target;
        const allListItems = document.querySelectorAll(".list .item");

        allListItems.forEach(function(i){
            i.className = 'item';
        });
        target.classList.add('clicked');

        console.log(obj);
    }
    
  return (
      <>
      {obj.map((i)=> 
        <li key={i.id} id={i.id} className='item' onClick={seeTheAnswer}>
            <span id={i.id}>{i.question}</span>
        </li>
        )}
    </>
    
  )
}

export default Card
