import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-0 fs-smallest d-none d-md-block ls-3">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-md-end text-center text-white mb-0 fs-smallest ls-3">
                Hotline:{" "}
                <a className="text-white" href="tel:+233 244546456">
                  +233 244546456
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="d-flex gap-sm-5 align-items-center justify-content-between">
            <div className="d-flex gap-1 align-items-center">
              <Link
                className="hamburger d-md-none d-block"
                data-bs-toggle="offcanvas"
                data-bs-target="#nav-drawer"
                aria-controls="nav-drawer"
              >
                <img src="/images/hamburger-menu.svg" alt="" />
              </Link>
              <h2 className="mb-0">
                <Link className="text-white">Vendy</Link>
              </h2>
            </div>
            <div className="w-100 mx-4 d-none d-md-block">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-0 fs-smaller border-0"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here.."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text py-1 px-3 border-0"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="">
              <div className="header-upper-links d-flex gap-lg-4 gap-2 align-items-center justify-lg-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0 fs-smaller d-none d-lg-block ls-5">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0 fs-smaller d-none d-lg-block ls-5">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0 fs-smaller d-none d-lg-block ls-5">
                      Login <br />
                      Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-start gap-1 text-white position-relative">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-1 align-items-center">
                      <span className="badge bg-white text-dark p-1 fw-normal fs-smallest p-1">
                        0
                      </span>
                      <p className="mb-0 fs-small d-none d-md-block">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row d-none d-md-flex">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center py-1 ps-0 pe-2"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img height="25" src="/images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className="dropdown-item text-white fs-smaller"
                          to="/"
                        >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white fs-smaller"
                          to="/"
                        >
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white fs-smaller"
                          to="/"
                        >
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-md-none d-flex justify-content-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-0 fs-smaller border-0"
                placeholder="Search Product Here..."
                aria-label="Search Product Here.."
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text py-1 px-3 border-0"
                id="basic-addon2"
              >
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-start nav-drawer"
        tabIndex="-1"
        id="nav-drawer"
        aria-labelledby="offcanvasExampleLabel"
        data-bs-scroll="true" 
        data-bs-backdrop="false"
      >
        <button
          type="button"
          className="close-btn text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <img src="/images/close.svg" alt="" />
        </button>
        <div className="offcanvas-body p-0">
          <ul className="list-unstyled">
            <li>
              <Link className="text-white fs-smaller" to="/">
                Action
              </Link>
            </li>
            <li>
              <Link className="text-white fs-smaller" to="/">
                Another action
              </Link>
            </li>
            <li>
              <Link className="text-white fs-smaller" to="/">
                Something else here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
