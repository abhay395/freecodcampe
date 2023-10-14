import React from 'react'
import { useState } from 'react'

function Tour({id,name,info,image,price,removeTour}) {
    const [readmore,setreadmore] = useState(false)
    return (
        <main>
            <div className='single-tour' >
                <img src={image} alt="" />
                <h2>{name}</h2>
                <article className='tour-info' >
                <h4 className='tour-price' >{price}</h4>
                <p>{readmore?info:info.substring(0,200)} <button onClick={()=>setreadmore(!readmore)} >{readmore?'Showless':'readmore'}</button></p>
                </article>
                <button className='delete-btn' onClick={()=>removeTour(id)} >not intrested</button>
            </div>
        </main>
    )
}

export default Tour
