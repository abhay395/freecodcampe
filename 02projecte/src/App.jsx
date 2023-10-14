import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// // ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }
  const url = "https://course-api.com/react-tours-project";
  function featchTours(){
  //  try { 
  //   const response = await fetch(url)
  //   const tours =  await response.json();
  //    setLoading(false)
  //   setTours(tours)
  //   console.log(tours)
  // }catch(Error){
  //   setLoading(false)
  //   console.log(Error)
  // }
  fetch(url)
  .then((res)=>res.json())
  .then((res)=>{setLoading(false)
    
  setTours(res)
  }).catch((error)=>console.log(error))
  // console.log('ss')
}
 useEffect(()=>{
  featchTours()
 },[])
   
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length ===0){
    return <main>
      <div className="title" >
        <h2>no tours left</h2>
        <button onClick={()=>{featchTours(
          setLoading(true)
        )}} className="btn" >Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours= {tours} removeTour = {removeTour} />
    </main>
  )
}

export default App;
