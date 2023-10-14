import React, { useState } from 'react';
import data from './Data';
function App() {
  const [count,setcount] = useState(0)
  const [text,setText] = useState([])
  const handleSubmite = (e)=>{
    e.preventDefault();
    if(count===0){
    setText(data.slice(0,1))
    return
    }
    if(count<=9 && count>0)
    {
    setText(data.slice(0,count))
    return
    }
    setText([])
  }
  return (
  <section className='section-center' >
    <h3>tired of boring lorem ipsum?</h3>
    <form action="" className='lorem-form' onSubmit={handleSubmite} >
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setcount(Number(e.currentTarget.value))} />
      <button type='submit' className='btn' >generate</button>
    </form>
    <article className='lorem-text' >
     {text.map((paragphs)=>{
      return <p>{paragphs}</p>
     })}
    </article>
  </section>
    )
}

export default App;