import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faThumbsUp,faUserFriends,faSmileBeam,faBuilding,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import photo4 from './component/video/photo4.jpg'
import photo5 from './component/video/photo5.jpg'
import photo1 from './component/video/photo1.png'


export const About = () => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    
    return (
        <>
        <motion.div  initial={{opacity  : 0}}
         animate={{opacity : 1}}
         exit={{opacity : 0}}>
        <h1 className="text-center head">
    ABOUT -  US      
        </h1>
        <div>
<h2 className="text-center " data-aos="fade-right">"We Love What We Do"</h2>
<h3 className="text-center-para" data-aos="fade-left">"our talented team crafts the best code and design amazing user experience for users.Web-Builder's are a professional web-development company in downtown Noida."</h3>
        </div>
        <div id="carouselExampleDark" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={photo5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
        
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={photo4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1></h1>
        <p></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={photo1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1></h1>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div>
        <div class="container" data-aos="fade-down-right">
  <div class="row">
    <div class="col">
    <FontAwesomeIcon size="2x" icon={faUserFriends} />
    <h3>SCALABLE WEBSITES</h3>
    <p3>A scalable web application is a website that is able to handle an increase in users and load.</p3>
    </div>
    <div class="col">
    <FontAwesomeIcon size="2x" icon={faCoffee} />
    <h3>STUNNING TEMPLATES</h3>
    <p3>We make high-quality home, landing page website for support, contact, services, and terms according to client.</p3>
    </div>
    <div class="col">
    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"></link>
    <FontAwesomeIcon size ="2x"icon={faThumbsUp} />
    <h3>SMOOTH  WEBSITES</h3>
    <p3>We specialise in websites that are as functional as they are beautiful, using best practice honed through years of experience.</p3>
    </div>
  </div>
</div>
<div class="container" data-aos="fade-up-left">
  <div class="row">
    <div class="col">
    <FontAwesomeIcon size="2x" icon={faSmileBeam} />
    <h3>MOBILE FRIENDLY</h3>
    <p3>We have entered a new age of internet usage specifically, mobile internet usage. Consumers turn to their mobile devices not just to text, social network, and get directions; they are using them to optimize their lives.</p3>
    </div>
    <div class="col">
    <FontAwesomeIcon size="2x" icon={faBuilding} />
    <h3>LOW PRICES</h3>
    <p3>We are providing you low cost, competitive prices while increasing the quality of website production thanks to highly skilled profiles from the field of programming and website design.</p3>
    </div>
    <div class="col">
    <FontAwesomeIcon size="2x" icon={faAddressCard} />
    <h3>SEO TOOLS</h3>
    <p3>There are literally hundreds of free SEO tools out there, so we want to focus on only the best and most useful to add to your toolbox. </p3>
    </div>
  </div>
</div>
            </div>
            </motion.div>
        </>
    )
}
