
import './App.css'
import { useState, useRef } from 'react'

function App() {
      let dropRef= useRef(null)
      let handleDrop=()=>{
        if (dropRef.current.style.display=='block'){
          dropRef.current.style.display='none'
        }
        else {
          dropRef.current.style.display='block'
        }
      }

  return (
    <>
     <div onClick={handleDrop} className='bg-cyan-300 py-10 ml-10 px-48'>
      <button className='Click_btn px-10 py-7 bg-red-400 rounded-full'>Press</button>
      <div className='bg-indigo-500 hidden p-10 mt-8' ref={dropRef}>
       <ul>
        <li>Sahedi</li>
        <li>Rahman</li>
        <li>Sahed</li>
       </ul>
      </div>

     </div>
    </>
  )
}

export default App
