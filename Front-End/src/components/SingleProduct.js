import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Social from './Social';
import BuyingForm from './BuyingForm';
import Form from 'react-bootstrap/Form'
import ProductPictures from './ProductPictures'
//import { Carousel } from "react-responsive-carousel";
import { Grid, Row, Col } from 'react-bootstrap';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
//import { Carousel } from "react-responsive-carousel";

class SingleProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
    
            <Header />
               
			<section id="main">
				<div class="details-info form-buy" >

					<Form>
							<Form.Row>
								<Col>
										<div class="image">
											<ProductPictures />
										</div>
								</Col>
								
								<Col>
									<div class="entry">
										<MDBContainer>
												<MDBRow>
													<MDBCol md="3">Category</MDBCol>
													<MDBCol md="6">......</MDBCol>
												</MDBRow>
												<MDBRow>
													<MDBCol md="3">Name</MDBCol>
													<MDBCol md="6">.mmmmmm</MDBCol>
												</MDBRow>
												<MDBRow>
													<MDBCol md="3">Type</MDBCol>
													<MDBCol md="6">.fgfgf.</MDBCol>
												</MDBRow>
												<MDBRow>
													<MDBCol md="3">Price</MDBCol>
													<MDBCol md="6">12$</MDBCol>
												</MDBRow>
												<MDBRow>
													<MDBCol md="3">description</MDBCol>
													<MDBCol md="6">...dfdfdfdfdddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.</MDBCol>
												</MDBRow>
										</MDBContainer>
									</div>
								</Col>
							</Form.Row>
						<Form.Row>
							<Col>
									<BuyingForm />
							</Col>
						</Form.Row>

					</Form>

				</div>
			</section>

			
            <Footer />
            </div>
         );
    }
}
 
export default SingleProducts;