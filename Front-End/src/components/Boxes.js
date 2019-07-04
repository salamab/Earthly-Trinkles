import React, { Component } from 'react';
import LatestEvents from './LatestEventBoxes';
import LatestProducts from './LatestProductBoxes';

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="boxes">
                <LatestEvents />
                <LatestProducts />
            </div>
         );
    }
}
 
export default Boxes;