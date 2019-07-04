import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer id="footer">
<div className="footer-holder">
  <div className="footer-frame" >
    <div className="footer-content"  style={{width: '100%'}}>
      <div className="col-holder">
        <div className="col">
          <div className="heading">
            <h3>About us</h3>
          </div>
          <p>Vero eos et accusamus et iusto dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</p>
          <p>Quos dolores et quas molestias excepturi sint occaecati cupiditate.</p>
        </div>
        <div className="col">
          <div className="heading">
            <h3>Contact</h3>
          </div>
          <address>
            <p><strong>Elegantic Inc.</strong></p>
            <p>1041 Madison Ave,</p>
            <p>New York</p>
          </address>
          <address>
            <p>(45) 523 565 242</p>
            <p><a href="mailto:office@elegantic.com">office@elegantic.com</a></p>
          </address>
        </div>
        <div className="col col-contact">
          <div className="heading">
            <h3>Follow us</h3>
          </div>
          <ul className="social">
            <li className="facebook"><a href="#">Facebook</a></li>
            <li className="google"><a href="#">Google+</a></li>
            <li className="twitter"><a href="#">Twitter</a></li>
            <li className="pinterest"><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="holder">
        <p>Copyright 2014 Elegantic. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
</footer>	
         );
    }
}
 
export default Footer;

