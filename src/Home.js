import React from 'react'
import Navbar from './Navbar'
import './home.css'
import img1 from './img1.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Home = () => {
  const navi = useNavigate()
  useEffect(()=>{
    if(localStorage.length==0){
      navi('/')
      console.log(localStorage.length)
    }
  },[])
  return (
    <div>
    <Navbar>

    </Navbar>
    <div className='home-content'>
      <img src={img1} className='img1'></img>
    </div>
    <div className='data'>
      <p className='p'>Image steganography is a technique used to hide secret information within digital images. By subtly altering the pixels of an image, data can be embedded without visibly affecting the image's appearance. This method leverages the human eye's inability to detect minor color variations, making it an effective tool for covert communication. The hidden data can be text, another image, or even a cryptographic key. One common approach is the Least Significant Bit (LSB) method, where the least significant bits of the image pixels are replaced with the secret data bits. This technique is favored for its simplicity and minimal impact on the image quality. Advanced methods include using algorithms like discrete cosine transform (DCT) and wavelet transform, which provide higher security but require more computational resources. Image steganography finds applications in digital watermarking, secure communication, and copyright protection. It is crucial for protecting sensitive information from unauthorized access. However, the technique is not foolproof, as detection tools like steganalysis can reveal the presence of hidden data. Thus, combining image steganography with cryptographic techniques enhances security. Ongoing research aims to develop more robust and undetectable steganographic methods. As digital communication evolves, the importance of secure data transmission continues to grow, making image steganography a vital field in information security.</p>
      
    </div>
    </div>
  )
}

export default Home