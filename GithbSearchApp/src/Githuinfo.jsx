import React, { useState } from "react";

function Githuinfo({ data,showmore }) {
  const [loading, setoading] = useState(true);

  // if(message==='Not Found'){
  //   return <h1 className='text-4xl text-red-500 text-center' >Not Found</h1>
  // }
  return (
    <div className="flex justify-center items-center flex-col w-full" >
    <div className="flex ml-5 flex-wrap items-center justify-center" >
      {data &&
        data.map((person) => {
          const {
            login,
            avatar_url,
            html_url,
            name,
            bio,
            public_repos,
            followers,
            following,
            created_at,
            updated_at,
            message,
          } = person;
          return (
            <div className="flex items-center m-2" key={person.node_id}>
              <div
                id="PersonalInfo"
                className=" bg-[white]  text-black flex w-[300px] rounded-lg overflow-hidden mt-6"
              >
                <img src={avatar_url} className="w-[100px] h-full" alt={name} />
                <div className="ml-4 mt-3">
                  <p className="">UserId: {login}</p>
                  <a href={html_url}>
                    <button className="bg-black px-3 rounded-xl  text-white mt-4 " >FollowMe</button>
                  </a>
                </div>
              </div>
             
            </div>
          );
        })}
        
    </div>
    <button className="bg-white w-32 rounded-lg mb-7" onClick={showmore} >Show more</button>
    </div>
  );
}

export default Githuinfo;
