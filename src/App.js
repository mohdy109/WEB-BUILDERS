
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Home }  from './Home';
import { Navbar } from './Navbar';
import { About }  from './About';
import { Service }  from './Service';
import { Contact }  from './Contact';
import {  Redirect, Route,    Switch,useLocation } from 'react-router-dom';
import{AnimatePresence} from "framer-motion"



function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <Navbar/>
   <Switch location={location} key={location.pathname}>
   <Route exact path="/" component={Home}  />
 < Route exact path="/about" component={About}/>
 <Route exact path="/service" component={Service}  />
 <Route exact path="/contact" component={Contact}  />
 <Redirect to="/"/>
   
   </Switch>
   </AnimatePresence>
    </> 
  
    
  );
}

export default App;
