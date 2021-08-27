import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'  
 import "./Home.css"
 import { Link } from 'react-router-dom'
 import Video2 from './component/video/Video2.mp4'



export const Home = () => {
    return (
      <>
      
        <motion.div 
        initial={{opacity  : 0}}
         animate={{opacity : 1}}
         exit={{opacity : 0}}
         >
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button"  aria-current="true" aria-label="Slide 1"></button>
    
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <video id="bgvid" src={Video2} type="video/mp4" autoPlay  loop muted >
          
          </video>
      <div class="carousel-caption d-none d-md-block">
      <Link exact to ="/service">  <button type="button"  id = "yasir"class="btn btn-outline-light">GET STARTED </button></Link>
        
        <p>Copyright &copy; web yasir 2021.All Right Reserved.</p>
        
      </div>
    </div>
           </div>   
        </div>
        </motion.div>
        </>
    )
}
