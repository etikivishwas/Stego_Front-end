import React from 'react'
import Navbar from './Navbar'
import './encode.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from './loading'

const Decode = () => {
  
  const navi = useNavigate()
  useEffect(()=>{
    if(localStorage.length==0){
      navi('/')
      console.log(localStorage.length)
    }
  },[])
  const [image,setimage]=useState(null)
  const [load,setload]=useState(false)
  const [file,setfile]=useState(null)
  const [pop,setpop]=useState(false)
  const [msg,setmsg]=useState("")
  const [count,setcount]=useState(2)
  
  if(count<0){
    localStorage.removeItem('name')
    navi('/')
  }
  const toggleModal = () => {
    setpop(!pop);
    
  };
  const handleimage=(e)=>{
    setimage(e.target.files[0])
  }
  const handlefile=(e)=>{
    setfile(e.target.files[0])
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    setload(true)
    formdata.append('image',image);
    formdata.append('file',file)
    try{
      
      const response = await axios.post('http://localhost:8000/api/decrypt/', formdata, {
        // responseType: 'blob', // Important for downloading files
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
    toggleModal()
    if(response['data']=='Sorry unable to reveal your message'){
      
      setcount(prev=>prev-1)
      window.alert("You are left with "+count+" attempts")
      setload(false)
    }
    else{
      setcount(2)
      setload(false)
    }
    setmsg(response["data"])
  }
    catch(error){
      setload(false)
      console.error('Error uploading data', error);

    }
  }
  return (
    <div>
       <div className='App'>

{load ? (

 <Loading />

) : (

 <div className='content'>
      <Navbar></Navbar>
      <h1 className='hello1'>Unveil The Secret</h1>
    <div className='form'>
      <form onSubmit={handleSubmit} >
        <div className='items'>
        <span>Fake Image:</span><input type='file' name='img' className='txt1' onChange={handleimage} required></input>
        <br></br>
        <span>Position File:</span><input type='file' name='img' className='img' onChange={handlefile} required></input>
        <br></br>
        <input type='submit' className='btn' value='Reveal'></input>
        </div>


      </form>

    </div>
    </div>
)}


    {pop && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{msg}</h2>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Decode