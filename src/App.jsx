import React, { useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoData from './TodoData'
function App() {
  let [data,setData] = useState([
  ]);
  let [toggle,setToggle] = useState(false)
  return (
    <div className={`${toggle && 'dark'}`}>
    <div className='dark:bg-zinc-900 bg-white w-full h-screen'>
      <TodoAdd data={data} setData={setData} toggle={toggle} />
      {
        data.map((item) => 
          <TodoData item={item} data={data} setData={setData} />
        )
      }
    <button 
    onClick={() => setToggle(!toggle)}
    className={`rounded-full absolute p-3 bottom-5 right-5 ${toggle ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {!toggle ? "DRK" : 'LGT'}
    </button>
    </div>
    </div>
  )
}

export default App