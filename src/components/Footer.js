import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX, BsFacebook, BsPinterest, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="py-sm-5 py-4">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4">
              <div className="footer-top-data d-flex gap-10 align-items-center justify-content-center justify-content-xl-start mb-3 mb-xl-0">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h4 className="mb-0 text-white">Sign Up For Newsletter</h4>
              </div>
            </div>
            <div className="col-xl-6 col-md-7 px-4 px-xl-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1 fs-smallest border-0"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-text p-0 border-0">
                  <button
                    className="fs-small text-uppercase ls-3 border-0"
                    id="basic-addon2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-sm-5 pt-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Contact Us</h5>
              <div>
                <address className="text-white fs-smaller ls-5 mb-2 mb-sm-3">
                  Oxford Street: 232 Near Hill <br />
                  Tantran Hill, Accra <br />
                  Ghana
                </address>
                <a href="tel:+233 2323422222" className="text-white fs-smaller ls-5 d-block mb-2 mb-sm-3">+233 2323422222</a>
                <a href="mailto:dummy@store.com" className="text-white fs-smaller ls-5 mb-3 mb-sm-4">dummy@store.com</a>
                <div className="social_icons d-flex align-items-center gap-1">
                  <a href="/">
                    <BsTwitterX />
                  </a>
                  <a href="/">
                    <BsFacebook />
                  </a>
                  <a href="/">
                    <BsPinterest />
                  </a>
                  <a href="/">
                    <BsInstagram />
                  </a>
                  <a href="/">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Privacy Policy</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Refund Policy</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Shipping Policy</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Terms Of Service</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Search</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">About US</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">FAQs</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Contact</Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Laptops</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Headphones</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Tablets</Link>
                <Link className="text-white py-1 py-sm-2 mb-1 fs-smaller ls-5">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-sm-4 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white fs-smaller ls-5">
                &copy; {new Date().getFullYear()}, Powered by KOD
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
