import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <footer className={`${style.footerBg} py-5`}>

        <div className="container text-white fw-medium text-center">
            <div className="row ">
                <div className="col-xxl-4 col-lg-6 col-12">
                    <h4 className='fw-bolder text-uppercase'>Location</h4>
                    <p>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
                <div className="col-xxl-4 col-lg-6 col-12">
                    <h4 className='fw-bolder text-uppercase'>Around the Web</h4>
                     
                        <ul className='list-unstyled d-flex gap-3 justify-content-center align-items-center'>
                            <li>
                                <a href="#" className=' fs-3 text-white'><i class=" fa-brands fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className='fs-3  text-white'><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className='fs-3  text-white'><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className='fs-3  text-white'><i class="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    
                </div>

                <div className="col-xxl-4 col-lg-6 col-12">
                    <h4 className='fw-bolder text-uppercase'>About Freelancer</h4>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className='text-success'>Start Bootstrap</a> .</p>
                </div>

               

                
            </div>
        </div>
       
    </footer>
  )
}
