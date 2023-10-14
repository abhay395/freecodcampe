import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
    const [toggle,setToggle] = useState(false)
  return <article className='question' >
    <header>
        <h4>{title}</h4>
        <button onClick={()=>{setToggle((prev)=>!prev)}} className='btn' >
            {toggle?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
    </header>
        <p>{toggle?info:null}</p>
  </article>;
};

export default Question;