import React, { Component } from 'react';


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <section class="bar">
				<div class="bar-frame">
					<ul class="breadcrumbs">
						<li><a href="index.html">Home</a></li>
						<li>PRODUCTS</li>
					</ul>
				</div>
			</section>
          </div>
        );
    }
}

export default Bar;