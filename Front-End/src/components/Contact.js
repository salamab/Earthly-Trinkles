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
            <p>At Earthly Trinkets we make handcrafted jewelry one bead at a time. Each semi precious gem is chosen for its quality and beauty. we buy gemstones from all over the world to bring you jewelry that is unique and beautiful and of excellent quality.

To most of us jewelry has special meaning and is very sentimental. We buy jewelry for special occasions, when we want a special keepsake for ourselves or someone dear.

We create handmade jewelry in a variety of styles since we all have our own style. For a lot of us that style changes often, depending on the occasion and our mood. We also love combining and layering necklaces and bracelets. In addition to our more traditional pieces we have been making bohemian jewelry that is a bit more free and flowing and versatile.

It is important to us that the jewelry we create gives you meaning and makes you feel more like you. The you who is free, confident and happy.
            </p>
            <Footer />
          </div>
        );
    }
}

export default Contact;