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
                      <h4 className="text-uppercase ls-2 mb-0">BEST SALE</h4>
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
                      <h4 className="text-uppercase ls-2 mb-0">NEW ARRIVAL</h4>
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
                      <h4 className="text-uppercase ls-2 mb-0">15% OFF</h4>
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

      <section className="home-wrapper-2 py-lg-5 py-4">
        <div
          className="container-xxl overflow-auto services-wrapper pb-xl-0 pb-2"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between gap-4">
                <div className="d-flex align-items-center gap-lg-4 gap-3">
                  <img src="/images/service.png" alt="" />
                  <div>
                    <h6 className="ls-3 mb-1">Free Shipping</h6>
                    <p className="mb-0 ls-3 fs-smallest">
                      From all orders over $100
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-lg-4 gap-3">
                  <img src="/images/service-02.png" alt="" />
                  <div>
                    <h6 className="ls-3 mb-1">Daily Surprise Offers</h6>
                    <p className="mb-0 ls-3 fs-smallest">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-lg-4 gap-3">
                  <img src="/images/service-03.png" alt="" />
                  <div>
                    <h6 className="ls-3 mb-1">Support 24/7</h6>
                    <p className="mb-0 ls-3 fs-smallest">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-lg-4 gap-3">
                  <img src="/images/service-04.png" alt="" />
                  <div>
                    <h6 className="ls-3 mb-1">Affordable Prices</h6>
                    <p className="mb-0 ls-3 fs-smallest">
                      Get Factory direct price
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-lg-4 gap-3">
                  <img src="/images/service-05.png" alt="" />
                  <div>
                    <h6 className="ls-3 mb-1">Secure Payments</h6>
                    <p className="mb-0 ls-3 fs-smallest">
                      100% Protected Payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-scroll-track d-lg-none d-block"></div>
      </section>

      <section className="home-wrapper-2 pb-lg-5 pb-4">
        <div className="container-xxl">
          <div className="categories row justify-content-between align-items-center mx-0">
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Music & Gaming</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/headphone.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Cameras</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Smart TV</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Appliances</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/homeapp.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Music & Gaming</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/headphone.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Cameras</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Smart TV</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
            </Link>
            <Link className="col-xl-3 col-sm-6 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Appliances</h6>
                  <p className="mb-0 fs-smallest">10 Items</p>
                </div>
                <img src="/images/homeapp.jpg" alt="camera" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
