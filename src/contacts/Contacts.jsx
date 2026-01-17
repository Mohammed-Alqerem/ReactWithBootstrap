import React from 'react'
import style from './contacts.module.css'

export default function Contacts() {
  return (
    <section className='d-flex flex-column gap-3 justify-content-center align-items-center py-5'>
          <h3 className={`${style.contactsColor} h1 fw-bolder`}>Contact Me</h3>
          <div className='d-flex justify-content-center gap-3  align-items-center'>
              <div className={`${style.whiteLine} flex-grow-1 `}>
              </div>
              <svg class={`${style.svgSize} svg-inline--fa fa-star `} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
              <div className={`${style.whiteLine} flex-grow-1`}>
              </div>
          </div>

        <div className="container">

              <form className=' d-flex flex-column gap-3 justify-content-center align-items-start'>
              <div className="form-floating w-75 m-auto  ">
                  <input type="text" className=" form-control border-0 border-bottom " id="floatingFullName" placeholder="" />
                  <label htmlFor="floatingFullName">Full Name</label>
              </div>
              <div className="form-floating w-75 m-auto ">
                  <input type="email" className="form-control border-0 border-bottom" id="floatingEmail" placeholder="" />
                  <label htmlFor="floatingEmail">Password</label>
              </div>
              <div className="form-floating w-75 m-auto ">
                  <input type="text" className="form-control border-0 border-bottom" id="floatingPhoneNumber" placeholder="" />
                  <label htmlFor="floatingEmail">Phone Number</label>
              </div>

              <div className="form-floating w-75 m-auto ">
                  <input type="text" className=" form-control border-0 border-bottom" id="floatingMessages" placeholder="" />
                  <label htmlFor="floatingMessages">Messages</label>
              </div>

               <div className='m-auto'>
                  <input type="submit" className=" py-3 px-5  form-control btn btn-outline-success " id="floatingMessages" placeholder="" />
              </div>
            </form>

   
            
            
        </div>
      
    </section>
  )
}
