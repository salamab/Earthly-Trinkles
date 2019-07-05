import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Social from './Social';
import BuyingForm from './BuyingForm';
import Form from 'react-bootstrap/Form'
import ProductPictures from './ProductPictures'
//import { Carousel } from "react-responsive-carousel";
import { Grid, Row, Col } from 'react-bootstrap';
import {  Table, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

class SingleProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
      }  }
    render() { 
        return ( 
<div className="container">
    <Header />  

            <section class="text-center my-5">

                  <h2 class="h1-responsive text-center font-weight-bold my-5">PRODUCTS</h2>
                  <br />
            </section>      
    <MDBCard>
       <MDBRow>
          <MDBCol>           
                  
                      <div class="view overlay rounded z-depth-2 mb-4">
                          <div class="image">
                              <ProductPictures />
                          </div>   
                      </div>
           </MDBCol>  
           <MDBCol></MDBCol>
           <MDBCol size='4'>   
                


                          <Table >
                              <thead>
                               
                              </thead>
                              <tbody>
                              <tr>
                                  <th scope="row">Category</th>
                                  <td>Mark</td>
                                
                                </tr>
                               
                                <tr>
                                  <th scope="row"> Name</th>
                                  <td>Jacob</td>
                                  
                                </tr>
                                <tr>
                                  <th scope="row">Price</th>
                                  <td>Larry</td>
                                
                                </tr>
                                <tr>
                                  <th scope="row">Type</th>
                                  <td>Mark</td>
                                
                                </tr>
                              </tbody>
                            </Table> 
        </MDBCol>
      <MDBCol></MDBCol>
      </MDBRow> 
       <MDBRow>
         <MDBCol sm='12'>                  
                    <div>                     
                      <h4 class="font-weight-bold mb-3"><strong>Name of the Products</strong></h4>
                      <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptas Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus voluptas.</p>
                       
                    </div>
          </MDBCol>
        </MDBRow> 
        </MDBCard>
      <div class="buyform"> 
           <BuyingForm />
      </div>     
    

                    
  
   <Footer />

</div>
         );
    }
}
 
export default SingleProducts;