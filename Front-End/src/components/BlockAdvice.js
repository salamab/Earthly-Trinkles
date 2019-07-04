import React, { Component } from 'react';


class BlockAdvice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <div className="block-advice">
            <div className="advice-holder">
              <h2>Newsletter</h2>
              <p>Join to receive promotions and other good news.</p>
            </div>
            <form action="#" className="form-newsletter">
              <fieldset>
                <input type="text" placeholder="Your email..." />
                <input className="btn black normal" type="submit" defaultValue="Subscribe" />
              </fieldset>
            </form>
          </div>
         );
    }
}

export default BlockAdvice;