import React from 'react'
import "./Service.css"
import { AnimatePresence,motion } from 'framer-motion'
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react";


export const Service = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
    return (
        <>
        <motion.div   initial={{opacity  : 0}}
         animate={{opacity : 1}}
         exit={{opacity : 0}} >
<h1 className="text-center">OUR SERVICES</h1>

<div className="container" data-aos = "flip-up" >
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src="https://images.unsplash.com/photo-1594402919317-9e67dca0a305?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBidXNpbmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="small bussiness"/>
  <div class="card-body">
    <h5 class="card-title">"Bussiness Websites"</h5>
    <p class="card-text">Being one of the most popular and versatile types of websites out there, a business website can take many forms. These enable's you to sell a certain  product.</p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="https://image.shutterstock.com/image-photo/blog-blogging-homepage-social-media-260nw-381746308.jpg" class="card-img-top" alt="blogs"/>
  <div class="card-body">
    <h5 class="card-title">"Blogs"</h5>
    <p class="card-text">Blogs are a type of website that enable you to write long-form content about virtually anything. They consist mainly of articles and images, typical surrounding. </p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667__340.png" class="card-img-top" alt="eCommerce"/>
  <div class="card-body">
    <h5 class="card-title">"eCommerce Websites"</h5>
    <p class="card-text">Similar to the business websites mentioned above, eCommerce websites, or online stores, allow you to sell products online.Best for making money online.  </p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
  </div>
</div>
<div class="container" data-aos="flip-up">
  <div class="row">
    <div class="col">
    <div class="card"  >
  <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="event website"/>
  <div class="card-body">
    <h5 class="card-title">"Event Websites"</h5>
    <p class="card-text">These sites allow you to display detailed information about your event.Event's like marriages and function's are most appropriate in this column. </p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uYWwlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Educational website"/>
  <div class="card-body">
    <h5 class="card-title">"Educational Websites"</h5>
    <p class="card-text">Every individual wants to receive the best of education to achieve his or her dreams.These websites help's te institution's to connect with student's. </p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3Z8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="potfolio"/>
  <div class="card-body">
    <h5 class="card-title">"Portfolio Websites" </h5>
    <p class="card-text"> People make use of websites in order to display their own work or skills. Portfolios are the perfect type of website to create in order to do just that.</p>
    
  </div>
  <div className="back">
  <div className="card-body">
    uogu
  </div>

</div>
</div>
    </div>
  </div>
</div>

</motion.div>
      </>
    )
}
