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
	kksdjbgkjdfnhntjh
	dflgkndfklngjhgzsfhsdhgkhdrfg
	
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
    Featured
  </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Featured
  </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Featured
  </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
	<div class="card-header">
    Featured
  </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
      </div>
    </div>
  </div>
</div>
			</div>
			<div className="home4"></div>
			<div className="home5"></div>
        </>
		
	)
}

export default Home