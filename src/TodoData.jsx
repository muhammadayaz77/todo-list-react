import React from 'react'

function TodoData({item,data,setData}) {
  let handleDelete = name => {
    let filterItem = data.filter((item) => item.todoName !== name);
    setData(filterItem)
  }
  return (
    <>
    <div className='grid grid-cols-3 w-[50%] gap-5 items-center mx-auto mt-5'>
      <div>
        <p className='text-white'>{item.todoName}</p>
      </div>
      <div>
        <p className='text-white'>{item.todoDate}</p>
      </div>
      <div>
        <button
        onClick={() => handleDelete(item.todoName)}
        className='bg-red-600 py-2 px-5 w-[50%] text-white font-bold rounded-md'>DELETE</button>
      </div>
      
    </div>
    </>
  )
}

export default TodoData