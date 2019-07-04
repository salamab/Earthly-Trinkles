import React, { Component } from 'react';

class LatestEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className="box" style={{marginRight: '30px', marginLeft: '20px', height: '300px'}}>
                <a href="#">
                  <span className="bg" />
                  <img src={require('./images/img-01.jpg')} alt />
                  <div className="box-info">
                    <div className="box-info-holder">
                      <span className="title"><span>New stuff</span></span>
                      <h2>Suits for gentlemen</h2>
                      <span className="btn white normal">More new suits</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="box" style={{marginRight: '30px', height: '300px'}}>
                <a href="#">
                  <span className="bg" />
                  <img src={require('./images/img-02.jpg')} alt />
                  <div className="box-info">
                    <div className="box-info-holder">
                      <span className="title"><span>Sale</span></span>
                      <h2>all Jackets 50% off</h2>
                      <span className="btn white normal">See products</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="box" style={{marginBottom: '50px', height: '300px'}}>
                <a href="#">
                  <span className="bg" />
                  <img src={require('./images/img-03.jpg')} alt />
                  <div className="box-info">
                    <div className="box-info-holder">
                      <span className="title"><span>Hot</span></span>
                      <h2>Offer for real men</h2>
                      <span className="btn white normal">Be a real men</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
         );
    }
}
 
export default LatestEvents;