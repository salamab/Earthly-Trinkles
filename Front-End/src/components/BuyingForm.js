import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Carousel } from "react-responsive-carousel";

class BuyingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div class="bform">
				
    <MDBContainer>
      <MDBRow>
        <MDBCol md="7">
          <form>
            <p className="h4 text-center mb-4">Write to us</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <label htmlFor="defaultFormContactQuantityEx" className="grey-text">
              Quantity
            </label>
            <input
              type="number"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
          
            <div className="text-center mt-4 btn1">
              <MDBBtn color="success" outline type="submit" >
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn> 
            </div>
            <br/>

          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
</div>
        )
    }
}
    export default BuyingForm;