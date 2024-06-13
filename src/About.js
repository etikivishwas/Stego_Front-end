import React from 'react'
import Navbar from './Navbar'
import './about.css'
import img from './logo1.png'
import viswa from './icon.jpeg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import bennu from './bennu.jpg'
// import bennu from './bennu.jpeg'
const About = () => {
  const navi = useNavigate()

  useEffect(()=>{
    if(localStorage.length==0){
      navi('/')
      console.log(localStorage.length)
    }
  },[])
  return (
    <div>
      <Navbar></Navbar>    
    <div className='main'> 
    <div className='card'>
      <img src={viswa} alt='img' className='img1'>
      </img>
      <h3>
        Name: Ch Benerjee Reddy
      </h3>
      <h3>
        Roll No: 21241A6676
      </h3>
      <h3>
        E-mail: ch.benerjeereddy@gmail.com
      </h3>
      <h3>
        Contact: 8019775823
      </h3>
      
    </div>
    <div className='card'>
      <img src={viswa} alt='img' className='img1'>

      </img>
      <h3>
     Name: E Vishwas

      </h3>
      <h3>
     Roll No: 22245A6610
      </h3>
      <h3>
      E-mail: eitikivishwas47@gmail.com
      </h3>
      <h3>
      Contact: 9381423238
      </h3>
    </div>
    <div className='card'>
      <img src={viswa} alt='img' className='img1'>
      </img>
      <h3>
      Name: G Venkata Srihan
      </h3>
      <h3>
      Roll No: 21241A6689
      </h3>
      <h3>
      E-mail: srihan@gmail.com
      </h3>
      <h3>
      Contact: 9999999999
      </h3>
      
      </div>
    </div>




    </div>  
  )
}

export default About