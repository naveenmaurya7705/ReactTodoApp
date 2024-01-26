"use client"

import React, { useState } from 'react'

const page = () => {

  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");

const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
  setmainTask([...mainTask,{title, desc}]);
    console.log(mainTask);
    console.log("added successfully");
     settitle("")
     setdesc("")
  }

let renderTask = <h2> no task availble</h2>
if(mainTask.length>0){
renderTask = mainTask.map((t,i)=>{
  return (
  <li>
    <div className='flex justify-between'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-xl font-semibold'>{t.desc}</h6>
  </div>
  </li>
  );
});
}
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> Naveen's Todo List</h1>

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
        <button className='bg-black text-white text-2xl rounded m-5 px-4 py-2 font-bold' >Add Task</button>
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
