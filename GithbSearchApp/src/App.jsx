import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Githuinfo from "./Githuinfo";

function App() {
  const [UserName, setUserName] = useState("");
  const [loading, setloading] = useState(false);
  const [valuse, setvalue] = useState("");
  const [value, setvalues] = useState(0);
  const [data, setData] = useState('');
  let [page,setpage]  = useState(10)
  function showmore(){
    page = page+10 
    setpage(page)
    setloading(true);
    fetch(
      `https://api.github.com/search/users?q=${UserName}&type=Users&per_page=${page}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.items)
      .then((resp) => {
        setData(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error, "cl");
      });
  }
  const ButtonHandler = () => {
    setloading(true);
    fetch(
      `https://api.github.com/search/users?q=${UserName}&type=Users&per_page=${page}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.items)
      .then((resp) => {
        setData(resp);
        console.log(resp);
        setpage(10)
      })
      .catch((error) => {
        console.log(error, "cl");
      });
  };
  useEffect(() => {
    setTimeout(() => {
      // Assume data fetch is complete
      setloading(false);
      // console.log(resp)
    }, 2000);
  }, [data]);

 
  return (
    <div className="">
      <h1 className="text-center text-[40px] text-[rgb(72,149,239)]">
        Github Search App
      </h1>
      <div className="w-full text-center  mt-20 flex flex-row justify-center ">
        <input
          type="text"
          value={UserName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          className="  w-[300px] h-[40px] text-[28px] pb-2 pl-2 text-white outline-none rounded-md bg-transparent border border-white"
        />
        <button
          className="bg-[#22577a] h-[40px] ml-4 rounded-lg px-5"
          onClick={ButtonHandler}
        >
          SearchUser
        </button>
      </div>
      {loading ? (
        <h1 className="text-center text-[40px] text-white">Loading...</h1>
      ) : (
        data && <Githuinfo data={data} showmore={showmore} loading={loading} />
      )}
      
    </div>
  );
}

export default App;
