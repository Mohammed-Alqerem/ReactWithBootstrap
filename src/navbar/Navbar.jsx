import React from 'react'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={`${style.navBg} py-3  navbar navbar-expand-lg bg-body-tertiary`}>
  <div class="container">
    <a class="navbar-brand text-white fs-3 fw-medium text-uppercase" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fw-medium text-uppercase gap-3 ">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
