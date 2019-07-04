import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Social from './Social'
import Bar from './Bar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <Header />
            <Bar />
            <h1>About Us</h1>
            <p>Lorem djfldsk jlj jf jdsi jif  jfiodj  ioiofj oidj iof jg gj j ijoj  joig
            hghukj isjifjdigjiodjgijgijgilfji j iogjidj jgij ijgjijgildjg ij  j gjjgi j 
            jgdjgih igj i j ijij gijigoj ij iji ik  j ijio jsgihfighuf i highifjgifjg   
            gkjdfhgkfjdgij io;j
            gifiogjiofgjifjgildfjgljfigjdfigjifdjggi hfigigji;sgihgs;ioghsuioghojg[oifg
            hgukdfhgoisjg[iosjdpigojdsf'pgjfdsioghoisrpuorogoidsfjgoijo jjf]gfs
            jogjoifjgiofsjg'fgjoi[fkgpoosfjgdfsg'jdsfihgofdjg[pjsdfgohdfoigjsdf'pgjjohgi
            </p>
            <Footer />
          </div>
        );
    }
}

export default Contact;