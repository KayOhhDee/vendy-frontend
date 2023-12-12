import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="home-wrapper-1 py-lg-5 py-2">
        <div className="container-lg-xxl container-md">
          <div className="row g-lg-3 g-2">
            <div className="col-lg-6">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators d-none d-md-flex">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="20000"
                  >
                    <div className="main-banner position-relative">
                      <img
                        src="/images/main-banner.jpg"
                        className="img-fluid rounded-base"
                        alt="main banner"
                      />
                      <div className="main-banner-content position-absolute">
                        <h4 className="text-uppercase ls-3">
                          SUPERCHARGED FOR PROS.
                        </h4>
                        <h5>Special Sale</h5>
                        <p className="ls-4">
                          From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                        </p>
                        <Link className="button">BUY NOW</Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="20000">
                    <div className="main-banner position-relative">
                      <img
                        src="/images/main-banner-1.jpg"
                        className="img-fluid rounded-base"
                        alt="main banner"
                      />
                      <div className="main-banner-content position-absolute">
                        <h4 className="text-uppercase ls-3">
                          SUPERCHARGED FOR PROS.
                        </h4>
                        <h5>iPad S13+ Pro.</h5>
                        <p className="ls-4">
                          From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                        </p>
                        <Link className="button">BUY NOW</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row smaller-banner-wrapper g-lg-3 g-2">
                <Link className="col-6 col-md-3 col-lg-6">               
                  <div className="small-banner position-relative rounded-base overflow-hidden">
                    <img
                      src="/images/catbanner-01.jpg"
                      className="img-fluid rounded-base"
                      alt="small banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4 className="text-uppercase ls-2 mb-0">
                        BEST SALE
                      </h4>
                      <h5>Laptops Max</h5>
                      <p className="ls-2 d-none d-sm-block">
                        From $999.00 or $41.62/mo.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link className="col-6 col-md-3 col-lg-6">
                  <div className="small-banner position-relative rounded-base overflow-hidden">
                    <img
                      src="/images/catbanner-03.jpg"
                      className="img-fluid rounded-base"
                      alt="small banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4 className="text-uppercase ls-2 mb-0">
                        NEW ARRIVAL
                      </h4>
                      <h5>Buy IPad Air</h5>
                      <p className="ls-2 d-none d-sm-block">
                        From $999.00 or $41.62/mo. for 24 mo.*
                      </p>
                    </div>
                  </div>
                </Link>
                <Link className="col-6 col-md-3 col-lg-6">
                  <div className="small-banner position-relative rounded-base overflow-hidden">
                    <img
                      src="/images/catbanner-02.jpg"
                      className="img-fluid rounded-base"
                      alt="small banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4 className="text-uppercase ls-2 mb-0">
                        15% OFF
                      </h4>
                      <h5>Smartwatch 7</h5>
                      <p className="ls-2 d-none d-sm-block">
                        Shop the lastest band styles and colors.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link className="col-6 col-md-3 col-lg-6">
                  <div className="small-banner position-relative rounded-base overflow-hidden">
                    <img
                      src="/images/catbanner-04.jpg"
                      className="img-fluid rounded-base"
                      alt="small banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4 className="text-uppercase ls-2 mb-0">
                        FREE ENGRAVING
                      </h4>
                      <h5>AirPods Max</h5>
                      <p className="ls-2 d-none d-sm-block">
                        High-fidelity playback & ultra-low distortion
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
