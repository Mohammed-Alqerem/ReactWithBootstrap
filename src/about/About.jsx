import React from 'react'
import style from './about.module.css'
export default function About() {
  return (
    <section className={`${style.aboutBg} py-5 d-flex flex-column gap-3 justify-content-center align-items-center `}>
        <h3 className='h1 text-uppercase fw-bolder text-white '>About</h3>
        
            <div className='d-flex  justify-content-center gap-3  align-items-center'>
              <div className={`${style.whiteLine}  flex-grow-1`}>

              </div>
              <svg class={`${style.svgSize} svg-inline--fa fa-star  text-white `} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
              <div className={`${style.whiteLine}  flex-grow-1`}>
              </div>
          </div>

          <div className="container">
            <div className="row g-3">
              <div className="col-lg-6 col-12">
              <p className='fs-5 text-white w-75 m-auto'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
             <div className="col-lg-6 col-12">
              <p className='fs-5 text-white w-75 m-auto'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
            <div className="col-12 text-center">
              <button className=' btn btn-outline-light py-3 px-5 fw-medium fs-5'><i className="fa-solid fa-download"></i> Free Download</button>
            </div>
            </div>
          </div>

  
      
    </section>
  )
}
