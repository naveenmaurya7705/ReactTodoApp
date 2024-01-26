"use client"

import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title);
    console.log(desc);
    console.log("added successfully");
    // settitle=("")
    // setdesc=("")
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
    
    </>
  )
}

export default page
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/naveenmaurya7705/ReactTodoApp.git
// git push -u origin main