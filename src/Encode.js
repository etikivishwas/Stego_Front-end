import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import './encode.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from './loading'

const Encode = () => {
  const [image,setimage]=useState(null)
  const [text,settext]=useState("")
  const [pop,setpop]=useState(false)
  const [name,setname]=useState("")
  const [load,setload]=useState(false)
  const [msg,setmsg]=useState("Sorry unable to hide your message")
  const navi = useNavigate()

  useEffect(()=>{
    if(localStorage.length==0){
      navi('/')
      console.log(localStorage.length)
    }
  },[])

  const toggleModal = () => {
    setpop(!pop);
  };
  const handleimage=(e)=>{
    setimage(e.target.files[0])
  }

  const handletext=(e)=>{
    settext(e.target.value)
  }
  const handlename=(e)=>{
    setname(e.target.value)
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    setload(true)
    formdata.append('image',image);
    formdata.append('text',text);
    formdata.append('name',name)
    console.log(formdata)
    try{
      
      const response = await axios.post('http://localhost:8000/api/upload/', formdata, {
        // responseType: 'blob', // Important for downloading files
        headers: {
          'Content-Type': 'multipart/form-data',
        },

    })
    toggleModal()
    
    if(response.status===200){
      setload(false)
          setmsg("Encryption is successfull,please check your testing folder on the desktop")
    }

      // const blob = new Blob([response.data], { type: response.data.type });
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'stegano_output.zip'; // Name of the file to be downloaded
      // a.click();
      console.log(response)
      // window.URL.revokeObjectURL(url);
  }
    catch(error){
      setload(false)
      console.error('Error uploading data', error);

    }
  }
  if(pop) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div className='App'>

{load ? (

 <Loading />

) : (

 <div className='content'>
      <Navbar></Navbar>
    <h1 className='hello1'>Hide Your Data </h1>
    <div className='form'>
      <form onSubmit={handleSubmit} >
        <div className='items'>
        <span>Enter your name:</span>  <input type='text' value={name} onChange={handlename} className='txt1' required ></input>
        <br></br>
        <span>Secret Message:</span>  <input type='text' value={text} onChange={handletext} className='txt' required></input>
        <br></br>
        <span>Input Image:</span><input type='file' name='img' onChange={handleimage} className='img' required></input>
        <br></br>
        <input type='submit' className='btn' value='Hide' ></input>
        </div>


      </form>

    </div>
    </div>
)}
    {pop && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello {name}</h2>
            <p>
              {msg}
            </p>
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


export default Encode