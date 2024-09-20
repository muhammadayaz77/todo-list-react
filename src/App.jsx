import React, { useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoData from './TodoData'
function App() {
  let [data,setData] = useState([
  ]);
  return (
    <div className='bg-zinc-900 w-full h-screen'>
      <TodoAdd data={data} setData={setData} />
      {
        data.map((item) => 
          <TodoData item={item} data={data} setData={setData} />
        )
      }
    </div>
  )
}

export default App