import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductsList extends Component {
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
			<section id="main">
				<div class="top-bar">
					<ul class="paging">
						<li class="prev"><a href="#">prev</a></li>
						<li><a href="#">1</a></li>
						<li class="active"><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li class="next"><a href="#">next</a></li>
					</ul>
					<form class="form-sort" action="#">
						<fieldset>
							<div class="row">
								<label for="sort">Sort by :</label>
								<select id="sort">
									<option>price</option>
									<option>price</option>
								</select>
							</div>
							<div class="row">
								<label for="page">Products per page:</label>
								<select id="page">
									<option>8</option>
									<option>8</option>
								</select>
							</div>
						</fieldset>
					</form>
				</div>
			
				<ul class="item-list">
					<li>
						<div class="item" >
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover" >
									<div class="item-content" > 
										<a href="cart.html" class="btn white normal"><p  style={{justifyContent: 'center'}}>Add to cart</p></a>
										<Link to='/single-product'><a href="singleproduct.html" class="btn white normal">See details</a></Link>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">cum soluta nobis</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li>
					<li>
						<div class="item">
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover">
									<div class="item-content">
										<a href="cart.html" class="btn white normal">Add to cart</a>
										<a href="singleproduct.html" class="btn white normal">See details</a>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">deserunt mollitias</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li>
					<li>
						<div class="item">
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover">
									<div class="item-content">
										<a href="cart.html" class="btn white normal">Add to cart</a>
										<a href="singleproduct.html" class="btn white normal">See details</a>
									</div>
									<span><Link to= '/single-product'>Read more</Link></span>
								</div>
							</div>
							<span class="name">cumque nihil impedit</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li>
					<li>
						<div class="item">
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover">
									<div class="item-content">
										<a href="cart.html" class="btn white normal">Add to cart</a>
										<a href="singleproduct.html" class="btn white normal">See details</a>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">maxime placeat facere</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li>
					<li>
						<div class="item" >
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover" >
									<div class="item-content" > 
										<a href="cart.html" class="btn white normal"><p  style={{justifyContent: 'center'}}>Add to cart</p></a>
										<Link to='/single-product'><a href="singleproduct.html" class="btn white normal">See details</a></Link>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">cum soluta nobis</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li><li>
						<div class="item" >
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover" >
									<div class="item-content" > 
										<a href="cart.html" class="btn white normal"><p  style={{justifyContent: 'center'}}>Add to cart</p></a>
										<Link to='/single-product'><a href="singleproduct.html" class="btn white normal">See details</a></Link>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">cum soluta nobis</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li><li>
						<div class="item" >
							<div class="image">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"  alt="" />
								<div class="hover" >
									<div class="item-content" > 
										<a href="cart.html" class="btn white normal"><p  style={{justifyContent: 'center'}}>Add to cart</p></a>
										<Link to='/single-product'><a href="singleproduct.html" class="btn white normal">See details</a></Link>
									</div>
									<span class="bg"></span>
								</div>
							</div>
							<span class="name">cum soluta nobis</span>
							<span><Link to= '/single-product'>Read more</Link></span>
						</div>
					</li>
				</ul>
				
				<div class="top-bar top-bar-add">
					<ul class="paging">
						<li class="prev"><a href="#">prev</a></li>
						<li><a href="#">1</a></li>
						<li class="active"><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li class="next"><a href="#">next</a></li>
					</ul>
				</div>

				




			</section>
		</div>
            
         );
    }
}
 
export default ProductsList;