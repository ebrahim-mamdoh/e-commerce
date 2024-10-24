import React from 'react'
import { Link } from 'react-router-dom'








function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        <Link className="nav-link" to={'product'}>Products</Link>
        <Link className="nav-link" to={'brands'}>Brands</Link>
        <Link className="nav-link" to={'categories'}>Categories</Link>
        <Link className="nav-link" to={'cart'}>Cart</Link>
        <Link className="nav-link" to={'profile'}>Profile</Link>
      </div>
    </div>
  </div>
</nav>  )
}




export default Navbar