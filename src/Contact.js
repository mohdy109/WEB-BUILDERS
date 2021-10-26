import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'
import { useState } from 'react';
import axios from "axios";

import {FaWhatsapp,FaEnvelope,FaInstagram,FaFacebook,FaTelegram} from  "react-icons/fa";

import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"
import "./Home.css"





export const Contact = () => {


  const [submit,setSubmit] = useState({
name:"",
email:"",
contact:"",
message:"",


  });

  const handleChange = e =>{

const {name,value}= e.target;
setSubmit({
  ...submit,
  [name]:value
})


  }

const register = () =>{

  const { name,email,contact,message } = submit;
  axios.post("https://web-builder1.herokuapp.com/submit/add/",submit);



window.location = '/service'


}
  
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
          <p1  id="yo" data-aos="fade-right" >"Talk to us about  your requirment.Shedule a call"</p1> 

        </div>
        <section class="get_in_touch" data-aos="fade-left">
      <h class="title">get in touch</h>
      <div class="container">
    <div class="contact-form row">

     <div  class="form-field col-lg-10">
      <input id="name" class="input-text" type="text" name="name" value={submit.name} onChange={handleChange}/>
     <label for="name" class="label">
     name

     </label>
     </div>
<div class="form-field col-lg-10">
    <input id="email" class="input-text" type="email" value = {submit.email} onChange={handleChange} name="email"/>
    <label for="email" class="label" >  email</label>


</div>
<div class="form-field col-lg-10">
    <input id="phone" class="input-text" type="text" value={submit.contact} onChange={handleChange} name="contact"/>
    <label for="phone" class="label" >  contact number</label>


</div>
<div class="form-field col-lg-10">
    <input id="message" class="input-text" type="text" onChange={handleChange} name="message" value={submit.message}/>
    <label for="message" class="label" > message</label>


</div>
<div class="form-field col-lg-10">
    <input class="submit-btn"  type="submit" value="sumit" onClick={register} />
    


</div>
     </div>

        </div>



      


        </section>
        <h1 className="text-center" data-aos="fade-down-right">MORE WAYS TO CONNECT</h1>
        <div class="container">
  <div class="row" data-aos="fade-up-left">
    <div class="col">
     <h id="vio"> E - mail </h>
     <p > <a href="mailto:mohdy109@gmail.com"> <FaEnvelope color="#EA4335" id="bhadu"/></a></p>
      
    </div>
    
    <div class="col">
      <h id="vio">What's app</h>
      <p><a href="https://wa.me/+917840818699"><FaWhatsapp  id="bhadu" color="green"/></a></p>
    </div>
    <div class="col">
      <h id="vio">Social media</h>
      <p> <a><FaInstagram color="#833AB4" id="bhadu"/></a><a href=""><FaFacebook color =" blue" id= "bhadu"/></a>
     <a href="https://t.me/joinchat/e0Gi3FYGvHlmODll"><FaTelegram id="bhadu" color="#0088cc"/></a> </p>
    </div>
  </div>
</div>

</motion.div>

        </>
        
    )
}
