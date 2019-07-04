import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { MDBInput } from "mdbreact";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import { Grid, Row, Col } from 'react-bootstrap';
import { MDBContainer} from "mdbreact";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
  
      <MDBRow class='header'>
           <MDBCol size='1'>
                  <div class="d-flex align-items-start">   
                      <img src={require('./images/logo.png')} style={{ width: '120px', height: '120px' }} />               
                  </div>
            </MDBCol>  
            <MDBCol size='6'>     
                  <div class="d-flex align-items-end">  
                   
                      <Nav.Link style={{border: '1px solid'}}><Link to='/'>Home</Link></Nav.Link>
                      <Nav.Link><Link to='/products'>
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                               aria-expanded="false">Products</a>
                            <div class="dropdown-menu">
                            <Link to='/products'>  <a class="dropdown-item" href="#">All products</a></Link>
                                <a class="dropdown-item" href="#">Earing</a>
                                <a class="dropdown-item" href="#">Neckless</a>
                                <a class="dropdown-item" href="#">S</a>
                            </div>
                          </Link>
                      </Nav.Link>

                      <Nav.Link><Link to='/events'>Events</Link></Nav.Link>
                      <Nav.Link><Link to='/jewelry-care'>Jewelry Care</Link></Nav.Link>
                      <Nav.Link><Link to='/contact'>Contact US</Link></Nav.Link>
                  </div>
           </MDBCol>
           <MDBCol size='5'>
              <MDBRow>
                  <div class="d-flex align-items-start">   
                      <a class="btn" href="#"> <i class="fab fa-facebook-f"></i> </a>
                      <a class="btn" href="#"> <i class="fab fa-twitter"></i> </a>
                      <a class="btn" href="#"> <i class="fab fa-instagram"></i> </a> 
                      <a class="btn" href="#"> <i class="fab fa-youtube"></i> </a>  
                  </div>
           
                  <div class="d-flex align-items-end">   
                        <nav class="navbar navbar-dark default-color justify-content-between">
                          <a class="navbar-brand" href="#">Navbar</a>
                          <form class="form-inline my-1">
                            <div class="md-form form-sm my-0">
                                  <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                                  aria-label="Search" />
                            </div>
                            <button class="btn btn-outline-white btn-sm my-0" type="submit">
                            <MDBIcon fab icon="sistrix" /></button>
                          </form>
                        </nav>
                   </div>   
            </MDBRow>
            </MDBCol> 
  </MDBRow>   

  


   


);
  }
}


export default Header;
