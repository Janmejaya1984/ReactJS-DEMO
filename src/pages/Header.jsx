import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import AddEmployee from '../components/RestApiCall/AddEmployee';
import Employees from '../components/RestApiCall/Employees';
function Header() {
    let styleLink = {
        color:"white",
        fontWeight:"bold",
        textDecoration:"none"
    }
  return (
    <div>
        <BrowserRouter>
        <Button variant="primary" size="lg"><Link style={styleLink} to="/home" className=''> Home </Link></Button>
        <Button variant="primary" size="lg"> <Link style={styleLink} to="/about"> About Us </Link> </Button>
        <Button variant="primary" size="lg"><Link style={styleLink} to="/contact"> Contact Us </Link> </Button>
        <Button variant="primary" size="lg"><Link style={styleLink} to="/services"> Services </Link> </Button>
       
        
        <Routes>

                <Route path = "/" element = {<Home/>} />
                <Route path = "/home/" element = {<Home/>}>
                    <Route index element = {<AddEmployee/>} />
                    <Route path = "view-emp" element = {<Employees/>} />
                </Route>
                <Route path = "/about" element = {<AboutUs/>} />
                <Route path = "/contact" element = {<ContactUs/>} />
                <Route path = "/services" element = {<Services/>} />
        </Routes>
</BrowserRouter>
    </div>
  )
}

export default Header