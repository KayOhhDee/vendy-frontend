import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ProductCard = () => {
  return (
    <div className="col-2 product-container">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="" />
          </Link>
        </div>
        <Link className="product-image">
          <img src="/images/tab.jpg" className="img-fluid" alt="" />
          <img src="/images/tab1.jpg" className="img-fluid" alt="" />
        </Link>
        <div className="product-details">
          <h6 className="brand fs-smaller mb-2">Havels</h6>
          <Link className="ls-3 mb-md-1 mb-0">
            Kids headphones bulk 10 pack multi colored for students
          </Link>
          <div className="product-rating mb-md-2 mb-1">
            <Rating readonly size={15} initialValue={3.5} allowFraction />
          </div>
          <p className="price ls-3 mb-md-2 mb-1">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-1">
            <Link>
              <img src="/images/prodcompare.svg" alt="" />
            </Link>
            <Link className="d-none d-md-flex">
              <img src="/images/view.svg" alt="" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
