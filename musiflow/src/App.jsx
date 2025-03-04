import { useState } from 'react'
import './App.css'
import musiclogo from "./assets/musiclogo.png"
 
function App() {
  const [query, setQuery] = useState("")

  return (
    <>
    {/* made by Rohit */}
    <div className='animlogo w-full h-full absolute flex justify-center items-center'>
      <img src={musiclogo} className='log h-[200px]' alt="Logo"></img>
    </div>
      <div className='containerapp'>
        <nav className='flex justify-between items-center px-10 h-[100px]'>
          <h1 className='flex items-center text-[24px] md:text-[28px]'>MUSIFLOW<img src="src\assets\musiclogo.png" className='h-[40px]'></img></h1>
          <h2 className="md:text-[25px] text-[18px]">ABOUT</h2>
        </nav>

        <div className='flex justify-center items-center flex-col gap-[30px]' style={{ height: "calc(100vh - 100px)" }}>
            <label for="searchbar" className='md:text-[36px] text-[28px] font-bold flex gap-[10px]'>SEARCH FOR MUSIC <img src="play.gif" className='md:h-[54px] h-[42px]  rounded-full'></img></label>
            <input type="text" id="searchbar" placeholder="Type song/artist/album" className="border-2 w-[70%] md:w-[35%] h-[50px] rounded-xl p-6" value={query || ""}
            onChange={(e) => setQuery(e.target.value)}></input>
            <button className='text-[25px]'>SEARCH</button>
        </div>
      </div>
    </>
  )
}

export default App