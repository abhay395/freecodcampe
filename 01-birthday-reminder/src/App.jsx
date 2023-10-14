import React, { useState } from 'react';
import Data from './Data';
import List from './List';
import data from './Data';
function App() {
  const [people ,sepeople]= useState(data)
  return (
    <main>
      <section className='container' >
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=>{sepeople([])}} >clear all</button>
      </section>
    </main>
  )
}

export default App;