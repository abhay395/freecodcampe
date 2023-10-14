import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// // ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [loading,setLoading] = useState(true)
  const [tours ,setTours] = useState([])
  const url = "https://course-api.com/react-tours-project";
  function removeTour (id){
  const removetours = tours.filter((tour)=>tour.id!==id)
  setTours(removetours)
  }
  function featchurl(){
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{setLoading(false)
    setTours(res)
    // console.log(res)
    }).catch((error)=>console.log(error))
  }
    useEffect(()=>{
      featchurl()
    },[])
 if (loading){
  return (
    <main>
      <Loading/>
    </main>
    
  )
 }
 if(tours.length===0){
  return (
  <><h1>No tours</h1>
  <button onClick={featchurl} >refesh</button>
  </>
  )
 }
 return (
  <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
)
}

export default App;
