import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { MDBContainer } from 'mdbreact';
import AttendanceForm from './AttendanceForm';

class SingleEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
          };
    }
    render() { 
        return ( 
            <div className="container">
             <Header />
             
           

            <section class="text-center my-5">

                  <h2 class="h1-responsive text-center font-weight-bold my-5">EVENTS</h2>
                  <br />

                  <div class="row">
                   
                    <div class="col-lg-12 col-md-12 mb-lg-0 mb-12">
                   
                      <div class="view overlay rounded z-depth-2 mb-4">
                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="Sample image" />
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>
                      <h4 class="font-weight-bold mb-3"><strong>Title of the Events</strong></h4>

                      <p>by <a class="font-weight-bold">Earthly trinkles,</a><a class="eventdate"> 15/07/2018 </a></p>

                      <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptas Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptas.</p>
                       
                    </div>
                 </div>  
                 
          </section>
  
   
<br/>
<AttendanceForm />
<Footer />
</div> 

         );
    }
}
 
export default SingleEvents;