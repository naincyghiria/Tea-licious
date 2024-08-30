import React from 'react'
import Slider from 'react-slick'

function TestimonailSlider() {
   var settings = {
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      loop: true,
      dots: true,
      nav: false,
   };
   return (
      <Slider {...settings}>
         <div>
            <div className="testimonial-item p-4 p-lg-5">
               <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
               <div className="d-flex align-items-center justify-content-center">
                  <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" alt="" />
                  <div className="text-start ms-3">
                     <h5>Client Name</h5>
                     <span className="text-primary">Profession</span>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="testimonial-item p-4 p-lg-5">
               <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
               <div className="d-flex align-items-center justify-content-center">
                  <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" alt="" />
                  <div className="text-start ms-3">
                     <h5>Client Name</h5>
                     <span className="text-primary">Profession</span>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="testimonial-item p-4 p-lg-5">
               <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
               <div className="d-flex align-items-center justify-content-center">
                  <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" alt="" />
                  <div className="text-start ms-3">
                     <h5>Client Name</h5>
                     <span className="text-primary">Profession</span>
                  </div>
               </div>
            </div>
         </div>
      </Slider>
   );
}

export default TestimonailSlider