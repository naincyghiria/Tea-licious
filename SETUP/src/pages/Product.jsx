import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Product() {
   const setting = {
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      loop: true,
      center: true,
      dots: false,
      nav: true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ],
      responsive: {
       0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  };
   return (
      <>
         {/* Page Header Start */}
         <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
               <h1 className="display-2 text-dark mb-4 animated slideInDown">Products</h1>
               <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb justify-content-center mb-0">
                     <li className="breadcrumb-item"><a href="#">Home</a></li>
                     <li className="breadcrumb-item"><a href="#">Pages</a></li>
                     <li className="breadcrumb-item text-dark" aria-current="page">Products</li>
                  </ol>
               </nav>
            </div>
         </div>
         {/* Page Header End */}
         {/* Products Start */}
         <div className="container-fluid product py-5">
            <div className="container py-5">
               <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
                  <h1 className="display-6">Tea has a complex positive effect on the body</h1>
               </div>
               <OwlCarousel className="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s" {...setting}>
                  <a href className="d-block product-item rounded">
                     <img src="/img/product-1.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Green Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="/img/product-2.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Black Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="/img/product-3.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Spiced Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="/img/product-4.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Organic Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
               </OwlCarousel>
            </div>
         </div>
         {/* Products End */}
      </>
   )
}

export default Product