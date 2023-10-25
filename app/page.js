"use client"
import React, { useState } from 'react'
import Input from './component/Input'
const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const [checkid, setCheckId] = useState(0)

  //===================================================== prevent to load 


  const submitHandler = (e) => {
    let id = checkid + 1
    e.preventDefault()
    if (title !== "" && desc !== "") {
      setCheckId(id)
      setMainTask([...mainTask, { title, desc, id }]);
    }
    setTitle("");
    setDesc("");
    // console.log(mainTask)

  }
  //================================================== Delete button

  const deleteHandler = (data) => {
    // console.log("checkk");
    let copyTask = JSON.parse(JSON.stringify(mainTask));
    copyTask = copyTask.filter((item) => {
      return item.id !== data.id;
    });
    setMainTask(copyTask);
  }




  //====================================================== adding tasks and desc in div

  let renderTask = <h2>No Task Availble</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((item, ind) => {

      return (
        <li key={ind} className='flex items-center justify-between'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{item.title}</h5>
            <h6 className='text-lg font-medium'>{item.desc}</h6>
          </div>
          <button
            onClick={() => { deleteHandler(item) }}
            className='bg-red-400  text-white p-8 py-2 rounded font-bold m-y my-1'>Delete</button>
        </li>
      )
    });
  }

  //============================================================  you can say html

  return (
    <>
      <h1
        className='bg-blue-300 text-white p-5 text-5xl font-bold text-center '
      >My TODO List</h1>
      <form onSubmit={submitHandler}>
        <Input placeholder='Enter Task' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <Input placeholder='Enter Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
        {/* <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Task Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Decription Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        /> */}

        <button className='bg-black text-white p-3 text-xl font-bold rounded-xl m-5' >Add Task</button>
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