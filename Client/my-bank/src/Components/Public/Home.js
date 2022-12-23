// // import {React, useState} from 'react';
// import {Link} from "react-router-dom";
// import './Home.css'

// function Home() {
// 	return (
// 		<>
//         <div className='home'>
			
// 		<nav className="navbar navbar-expand-sm">
// 			  <div className="container">
// 				<a className="navbar-brand" href="/">MyBank</a>
// 				<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
// 					aria-expanded="false" aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="collapsibleNavId">
// 					<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
						
// 						{/* <li className="nav-item">
// 							<Link to={'/login'} className="nav-link">Login</Link>
// 						</li> */}
// 						<Link to={'/login'} className="nav-link"><button className='btn loginButton'>Login</button></Link>
						
// 					</ul>
// 				</div>
// 		  </div>
// 		</nav>
// 		<div className='homeData'><h1>We help achieve your <div className='text'> Financial dream </div> </h1></div>
// 		<button className='btn homeButton'>Apply loan</button>
// 			</div>
// 			<div className='home2'>

// <div className="text">
// 	<div>
// 	<h1><b>Online banking</b></h1>
// 	</div>
// 	<div>
// 	kksdjbgkjdfnhntjh
// 	dflgkndfklngjhgzsfhsdhgkhdrfg
	
// 	</div>
// 	<div>
// 	<button className="btn">Learn more</button>
// 	</div>
// </div>
// 				<div className="image">
// 					<div className="layer"></div>
					
// 					</div>
// 			</div>
//         </>
		
// 	)
// }

// export default Home
// import {React, useState} from 'react';
import {Link} from "react-router-dom";
import './Home.css'

function Home() {
	return (
		<>
        <div className='home'>
			
		<nav className="navbar navbar-expand-sm">
			  <div className="container">
				<a className="navbar-brand" href="/">MyBank</a>
				<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
						
						<Link to={'/auth/login'} className="nav-link"><button className='btn loginButton'>Login</button></Link>
						
					</ul>
				</div>
		  </div>
		</nav>
		<div className='homeData'><h1>We help achieve your <div className='text'> Financial dream </div> </h1></div>
		<Link to={'/auth/register'} className="nav-link"><button className='btn homeButton'>Open account</button></Link>
			</div>
			<div className='home2'>

<div className="text">
	<div>
	<h1><b>Online banking</b></h1>
	</div>
	<div>
	Our online banking services is one of the best
	
	</div>
	<div>
	<button className="btn">Learn more</button>
	</div>
</div>
				<div className="image">
					<div className="layer"></div>
					
					</div>
			</div>
			<div className="home3">
				<row className='head'>
				<div class="col-sm-2">
					
					<div><h1><b>Services</b></h1></div>	
					</div>
				</row>
			<div class="row">
			
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Online banking
  </div>
      <div class="card-body">
        <h5 class="card-title">Online banking</h5>
        <p class="card-text">Our online banking services.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Branches
  </div>
      <div class="card-body">
        <h5 class="card-title">Branches</h5>
        <p class="card-text">Our various branches all over</p>
    
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Payment app
  </div>
      <div class="card-body">
        <h5 class="card-title">Payment app</h5>
        <p class="card-text">Our payment app for cashless payment</p>
    
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Loan
  </div>
      <div class="card-body">
        <h5 class="card-title">Loan</h5>
        <p class="card-text">We provide various types of loan</p>
    
      </div>
    </div>
  </div>
</div>
			</div>
		
			<div className="home5">
			<div className="child1">
				<h1>MyBank</h1>
				</div>
				<div className="child2">
				<div className="resources">
					<div className="resources1"><h1>Recources</h1></div>
					<div className="resources2">
					<h6>Application</h6>
					</div>
					<div className="resources3">
					<h6>Systems</h6>
					</div>
					<div className="resources4">
					<h6>FAQ</h6>
					</div>
				</div>
				<div className="company">
					<div className="company1"><h1>Company</h1></div>
					<div className="company2">
					<h6>About us</h6>
					</div>
					<div className="company3">
					<h6>Blog</h6>
					</div>
					<div className="company4">
					<h6>Career</h6>
					</div>
				</div>
				<div className="socials">
				<div className="socials1"><h1>Socials</h1></div>
					<div className="socials2">
						<h6>Facebook</h6>
					</div>
					<div className="socials3">
					<h6>Instagram</h6>
					</div>
					<div className="socials4">
					<h6>Twitter</h6>
					</div>
				</div>
			</div>
			</div>
			
        </>
		
	)
}

export default Home