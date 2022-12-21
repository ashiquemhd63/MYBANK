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
						
						{/* <li className="nav-item">
							<Link to={'/login'} className="nav-link">Login</Link>
						</li> */}
						<Link to={'/login'} className="nav-link"><button className='btn loginButton'>Login</button></Link>
						
					</ul>
				</div>
		  </div>
		</nav>
		<div className='homeData'><h1>We help achieve your <div className='text'> Financial dream </div> </h1></div>
		<button className='btn homeButton'>Apply loan</button>
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
        </>
		
	)
}

export default Home