import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date fs-smallest mb-2">11 JUNE 2023</p>
          <h6 className="title">Lorem ipsum dolor sit amet dolor sit</h6>
          <p className="desc fs-smallest ls-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit,
          </p>
          <button className="text-uppercase">Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
