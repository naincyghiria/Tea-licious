import React from 'react'

const Causes = () => {
    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Causes</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    Pages
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                Causes
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Causes Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                            Feature Causes
                        </div>
                        <h1 className="display-6 mb-5">
                            Every Child Deserves The Opportunity To Learn
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Education</small>
                                    </div>
                                    <h5 className="mb-3">Education For African Children</h5>
                                    <p>
                                        Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                                        diam et eos
                                    </p>
                                    <div className="causes-progress bg-white p-3 pt-2">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-dark">
                                                $10,000 <small className="text-body">Goal</small>
                                            </p>
                                            <p className="text-dark">
                                                $9,542 <small className="text-body">Raised</small>
                                            </p>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/img/courses-1.jpg" alt="" />
                                    <div className="causes-overlay">
                                        <a className="btn btn-outline-primary" href="">
                                            Read More
                                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                <i className="fa fa-arrow-right" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Pure Water</small>
                                    </div>
                                    <h5 className="mb-3">Ensure Pure Drinking Water</h5>
                                    <p>
                                        Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                                        diam et eos
                                    </p>
                                    <div className="causes-progress bg-white p-3 pt-2">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-dark">
                                                $10,000 <small className="text-body">Goal</small>
                                            </p>
                                            <p className="text-dark">
                                                $9,542 <small className="text-body">Raised</small>
                                            </p>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/img/courses-2.jpg" alt="" />
                                    <div className="causes-overlay">
                                        <a className="btn btn-outline-primary" href="">
                                            Read More
                                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                <i className="fa fa-arrow-right" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Healthy Life</small>
                                    </div>
                                    <h5 className="mb-3">Ensure Medical Treatment</h5>
                                    <p>
                                        Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                                        diam et eos
                                    </p>
                                    <div className="causes-progress bg-white p-3 pt-2">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-dark">
                                                $10,000 <small className="text-body">Goal</small>
                                            </p>
                                            <p className="text-dark">
                                                $9,542 <small className="text-body">Raised</small>
                                            </p>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/img/courses-3.jpg" alt="" />
                                    <div className="causes-overlay">
                                        <a className="btn btn-outline-primary" href="">
                                            Read More
                                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                <i className="fa fa-arrow-right" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Causes End */}
        </>

    )
}

export default Causes