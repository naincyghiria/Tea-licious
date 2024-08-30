import React from 'react'
import TestimonailSlider from '../components/TestimonailSlider'
import OwlCarousel from 'react-owl-carousel'


function Home() {
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
         {/* Carousel Start */}
         <div className="container-fluid px-0 mb-5">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                     <div className="carousel-caption">
                        <div className="container">
                           <div className="row justify-content-center">
                              <div className="col-lg-7 text-center">
                                 <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                 <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic &amp; Quality Tea Production</h1>
                                 <a href className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                     <div className="carousel-caption">
                        <div className="container">
                           <div className="row justify-content-center">
                              <div className="col-lg-7 text-center">
                                 <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">TEA House</strong></p>
                                 <h1 className="display-1 text-dark mb-4 animated zoomIn">Organic &amp; Quality Tea Production</h1>
                                 <a href className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>
         {/* Carousel End */}
         {/* About Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="row g-5">
                  <div className="col-lg-6">
                     <div className="row g-3">
                        <div className="col-6 text-end">
                           <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="" />
                           <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src="img/about-3.jpg" alt="" />
                        </div>
                        <div className="col-6">
                           <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="img/about-4.jpg" alt="" />
                           <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="img/about-2.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                     <div className="section-title">
                        <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
                        <h1 className="display-6">The success history of TEA House in 25 years</h1>
                     </div>
                     <div className="row g-3 mb-4">
                        <div className="col-sm-4">
                           <img className="img-fluid bg-white w-100" src="img/about-5.jpg" alt="" />
                        </div>
                        <div className="col-sm-8">
                           <h5>Our tea is one of the most popular drinks in the world</h5>
                           <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                        </div>
                     </div>
                     <div className="border-top mb-4" />
                     <div className="row g-3">
                        <div className="col-sm-8">
                           <h5>Daily use of a cup of tea is good for your health</h5>
                           <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                        </div>
                        <div className="col-sm-4">
                           <img className="img-fluid bg-white w-100" src="img/about-6.jpg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* About End */}
         {/* Products Start */}
         <div className="container-fluid product py-5 my-5">
            <div className="container py-5">
               <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
                  <h1 className="display-6">Tea has a complex positive effect on the body</h1>
               </div>
               <OwlCarousel className="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s" {...setting}>                  <a href className="d-block product-item rounded">
                     <img src="img/product-1.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Green Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="img/product-2.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Black Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="img/product-3.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Spiced Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
                  <a href className="d-block product-item rounded">
                     <img src="img/product-4.jpg" alt="" />
                     <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 className="text-primary">Organic Tea</h4>
                        <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                     </div>
                  </a>
               </OwlCarousel>
            </div>
         </div>
         {/* Products End */}
         {/* Article Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="row g-5">
                  <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                     <img className="img-fluid" src="img/article.jpg" alt="" />
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                     <div className="section-title">
                        <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                        <h1 className="display-6">The history of tea leaf in the world</h1>
                     </div>
                     <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                     <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna. Tempor erat elitr rebum at clita.</p>
                     <a href className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                  </div>
               </div>
            </div>
         </div>
         {/* Article End */}
         {/* Video Start */}
         <div className="container-fluid video my-5">
            <div className="container">
               <div className="row g-0">
                  <div className="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
                     <div className="py-5">
                        <h1 className="display-6 mb-4">Tea is a drink of <span className="text-white">health</span> and <span className="text-white">beauty</span></h1>
                        <h5 className="fw-normal lh-base fst-italic text-white mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</h5>
                        <div className="row g-4 mb-5">
                           <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                 <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check" />
                                 </div>
                                 <span className="text-dark">Great tea assortment</span>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                 <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check" />
                                 </div>
                                 <span className="text-dark">Spices &amp; additives</span>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                 <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check" />
                                 </div>
                                 <span className="text-dark">Unique accessories</span>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                 <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check" />
                                 </div>
                                 <span className="text-dark">Good for health &amp; beauty</span>
                              </div>
                           </div>
                        </div>
                        <a className="btn btn-light rounded-pill py-3 px-5" href>Explore More</a>
                     </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                     <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                           <span />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Video End */}
         {/* Video Modal Start */}
         <div className="modal modal-video fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content rounded-0">
                  <div className="modal-header">
                     <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                     {/* 16:9 aspect ratio */}
                     <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Video Modal End */}
         {/* Store Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Online Store</p>
                  <h1 className="display-6">Want to stay healthy? Choose tea taste</h1>
               </div>
               <div className="row g-4">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                     <div className="store-item position-relative text-center">
                        <img className="img-fluid" src="img/store-product-1.jpg" alt="" />
                        <div className="p-4">
                           <div className="text-center mb-3">
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                           </div>
                           <h4 className="mb-3">Nature close tea</h4>
                           <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                           <h4 className="text-primary">$19.00</h4>
                        </div>
                        <div className="store-overlay">
                           <a href className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2" /></a>
                           <a href className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2" /></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                     <div className="store-item position-relative text-center">
                        <img className="img-fluid" src="img/store-product-2.jpg" alt="" />
                        <div className="p-4">
                           <div className="text-center mb-3">
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                           </div>
                           <h4 className="mb-3">Green tea tulsi</h4>
                           <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                           <h4 className="text-primary">$19.00</h4>
                        </div>
                        <div className="store-overlay">
                           <a href className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2" /></a>
                           <a href className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2" /></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                     <div className="store-item position-relative text-center">
                        <img className="img-fluid" src="img/store-product-3.jpg" alt="" />
                        <div className="p-4">
                           <div className="text-center mb-3">
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                              <small className="fa fa-star text-primary" />
                           </div>
                           <h4 className="mb-3">Instant tea premix</h4>
                           <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                           <h4 className="text-primary">$19.00</h4>
                        </div>
                        <div className="store-overlay">
                           <a href className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2" /></a>
                           <a href className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2" /></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                     <a href className="btn btn-primary rounded-pill py-3 px-5">View More Products</a>
                  </div>
               </div>
            </div>
         </div>
         {/* Store End */}
         {/* Testimonial Start */}
         <div className="container-fluid testimonial py-5 my-5">
            <div className="container py-5">
               <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
                  <h1 className="display-6">What our clients say about our tea</h1>
               </div>
               <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.5s">
                  <TestimonailSlider />
               </div>
            </div>
         </div>
         {/* Testimonial End */}
         {/* Contact Start */}
         <div className="container-xxl contact py-5">
            <div className="container">
               <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
                  <h1 className="display-6">Contact us right now</h1>
               </div>
               <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                  <div className="col-lg-8">
                     <p className="text-center mb-5">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                     <div className="row g-5">
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                           <div className="btn-square mx-auto mb-3">
                              <i className="fa fa-envelope fa-2x text-white" />
                           </div>
                           <p className="mb-2">info@example.com</p>
                           <p className="mb-0">support@example.com</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                           <div className="btn-square mx-auto mb-3">
                              <i className="fa fa-phone fa-2x text-white" />
                           </div>
                           <p className="mb-2">+012 345 67890</p>
                           <p className="mb-0">+012 345 67890</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                           <div className="btn-square mx-auto mb-3">
                              <i className="fa fa-map-marker-alt fa-2x text-white" />
                           </div>
                           <p className="mb-2">123 Street</p>
                           <p className="mb-0">New York, USA</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Contact Start */}
      </>
   )
}

export default Home