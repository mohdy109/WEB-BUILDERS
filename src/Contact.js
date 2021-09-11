import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'

import {FaWhatsapp,FaEnvelope,FaInstagram,FaFacebook,FaTelegram} from  "react-icons/fa";

import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"
import "./Home.css"





export const Contact = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])
 
    return (
    
        <>
       
        <motion.div  initial={{opacity  : 0}}
        
         animate={{opacity : 1}}
         exit={{opacity : 0}}>
        <div>
          <h1 className="text-center toe"> Let's Connect !</h1>
          <p1  id="yo" data-aos="fade-right" >"Talk to us about about your requirment.Shedule a call"</p1> 

        </div>
        <section class="get_in_touch" data-aos="fade-left">
      <h class="title">get in touch</h>
      <div class="container">
    <div class="contact-form row">

     <div  class="form-field col-lg-10">
      <input id="name" class="input-text" type="text" name=""/>
     <label for="name" class="label">
     name

     </label>
     </div>
<div class="form-field col-lg-10">
    <input id="email" class="input-text" type="email" name=""/>
    <label for="email" class="label" >  email</label>


</div>
<div class="form-field col-lg-10">
    <input id="phone" class="input-text" type="text" name=""/>
    <label for="phone" class="label" >  contact number</label>


</div>
<div class="form-field col-lg-10">
    <input id="message" class="input-text" type="text" name=""/>
    <label for="message" class="label" > message</label>


</div>
<div class="form-field col-lg-10">
    <input class="submit-btn"  type="submit" value="sumit" name=""/>
    


</div>
     </div>

        </div>



      


        </section>
        <h1 className="text-center" data-aos="fade-down-right">MORE WAYS TO CONNECT</h1>
        <div class="container">
  <div class="row" data-aos="fade-up-left">
    <div class="col">
     <h id="vio"> E - mail </h>
     <p >  <FaEnvelope color="#EA4335" id="bhadu"/></p>
      
    </div>
    
    <div class="col">
      <h id="vio">What's app</h>
      <p><FaWhatsapp  id="bhadu" color="green"/></p>
    </div>
    <div class="col">
      <h id="vio">Social media</h>
      <p> <FaInstagram color="#833AB4" id="bhadu"/><FaFacebook color =" blue" id= "bhadu"/>
     <FaTelegram id="bhadu" color="#0088cc"/> </p>
    </div>
  </div>
</div>

</motion.div>

        </>
        
    )
}
