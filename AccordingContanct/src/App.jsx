import React, { useState } from 'react';
import data from './Data';
import SingleQuestion from './Question';
function App() {
  const [qusestions,setQuestions] = useState(data)
  return <main>
    <div className='container' >
      <h3>question and answer about login</h3>
      {
        qusestions.map((question)=>{
          return <SingleQuestion key={question.id} {...question} />
        })
      }
    </div>
  </main>
}

export default App;