import React, { useState } from 'react'

function TodoAdd({data,setData}) {
  let [name,setName] = useState([]);
  let [date,setDate] = useState([]);
  let handleName = (e) => {
      setName(e.target.value);
  }
  let handleDate = (e) => {
      setDate(e.target.value);
    }
  let handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
      todoName : name,
      todoDate : date,
    }])
    setName('');
    setDate('');
  }
  return (
    <>
    <form
    onSubmit={handleSubmit}
    className='grid grid-cols-3 w-[50%] gap-5 items-center mx-auto pt-10'>
      <div>
        <input
        value={name}
        onChange={handleName}
        name='name'
        type="text" placeholder='Enter Something' className='w-full p-2 bg-gray-200 dark:bg-[#373D35] text-black dark:text-white ' />
      </div>
      <div>
        <input
        value={date}
        onChange={handleDate}
        name='date'
        type="date" className={`w-full p-2 bg-gray-200 dark:bg-[#373D35]  outline-2 dark:text-white text-black`} />
      </div>
      <div>
        <button className='bg-green-600 py-2 px-5 w-[50%] text-white font-bold rounded-md'>ADD</button>
      </div>
      
    </form>
    </>
  )
}

export default TodoAdd