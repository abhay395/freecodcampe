import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setloading] = useState(true)
  const [jobs,setJobs]  = useState([])
  const [value,setvalue] = useState(0)
  const fetchJobs = async()=>{
    const response = await fetch(url)
    const newjobs = await response.json()
    setJobs(newjobs)
    setloading(false)
    
  };
  console.log(jobs)
  useEffect(()=>{
    fetchJobs();
    
  },[])
  if(loading){
    return <section>
      <h1>loading...</h1>
    </section> 
  }
  const {company ,dates,duties,title} = jobs[value]
  return <section className='section' >
    <div className="title">
      <h2>expierence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
    {/* btnContainer */}
    <div className="btn-container">
      {
        jobs.map((item,index)=>{
          return <button key={item.id} className={`job-btn ${index===value && 'active-btn'} `} onClick={()=>{
            setvalue(index)
            
          }} >
            {item.company}
          </button>
        })
      }
    </div>
    {/* job info */}
    <article className='job-info' >
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date' >{dates}</p>
      {duties.map((duty,index)=>{
        return <div key={index} className='job-desc' >
          <FaAngleDoubleRight className='job-icon'>
          </FaAngleDoubleRight>
          <p>{duty}</p>
        </div>
      })}
    </article>
    </div>
  </section>
}

export default App