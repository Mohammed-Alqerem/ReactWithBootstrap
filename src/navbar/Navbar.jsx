import React from 'react'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <nav class={`${style.navBg} py-3  navbar navbar-expand-lg bg-body-tertiary`}>
  <div class="container">
    <a class="navbar-brand text-white fs-3 fw-medium text-uppercase" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto fw-medium text-uppercase gap-3 ">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
