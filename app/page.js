"use client"

import React, { useState } from 'react'

const page = () => {

  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");
const [mainTask, setmainTask] = useState([])

// ==>>   Submit handler
  const submitHandler = (e)=>{
    e.preventDefault()
  setmainTask([...mainTask,{title, desc}]);
    console.log(mainTask);

     settitle("")
     setdesc("")
  }

  //>> Delete handler
const deleteHandler = (i) =>{
let copytask = [...mainTask]
copytask.splice(i,1)
setmainTask(copytask)

}
 //==>> Render Task
let renderTask = <h2> no task availble</h2>
if(mainTask.length>0){
renderTask = mainTask.map((t,i)=>{
  return (
  <li key={i} className='flex items-center justify-between mb-8'>
    <div className='flex items-center justify-between ,mb-5 w-2/3'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-lg font-medium'>{t.desc}</h6>
  </div>
  <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 hover:bg-red-700 px-4 py-2 rounded font-bold text-white'>Delete</button>
  </li>
  );
});
}


  return (
    <>
    
      <h1 className='bg-red-400 text-white p-5 text-5xl font-bold text-center'> Naveen's Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type='text' className='border-zinc-800 border-2 m-9 px-4 py-2' placeholder='Enter your title here...!'  value={title} 
        onChange={(e)=>{
          settitle(e.target.value)
        }}></input>
        <input type='text' className='border-zinc-800 border-2 m-9 px-4 py-2' placeholder='Enter your Description here...!'
        value={desc} 
         onChange={(e)=>{
          setdesc(e.target.value)
        }}
        ></input>
        <button className='bg-black hover:bg-green-700 text-white text-2xl rounded m-5 px-4 py-2 font-bold' >Add Task</button>
      </form>
       <hr />
       <div className='p-8 bg-slate-200'>
       <ul>
        {renderTask}
       </ul>

       </div>
    </>
  )
}

export default page
