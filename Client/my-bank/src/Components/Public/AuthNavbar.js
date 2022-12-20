import React from 'react'
import "./AuthNavbar.css"

function AuthNavbar() {
  return (
    <div className='logregnav'>
    <nav className="navbar navbar-expand-sm">
          <div className="container">
            <a className="navbar-brand" href="/">MyBank</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  
                   
                </ul>
            </div>
      </div>
    </nav>
    </div>
    
  )
}

export default AuthNavbar