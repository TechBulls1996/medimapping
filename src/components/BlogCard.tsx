import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import BlogImg from "../assets/images/product7.jpeg";
const BlogCard = () => {

  return (
    <div className="col-lg-4">
      <div className="card card-plain card-blog mt-4">
        <div className="card-image shadow-sm border-radius-sm position-relative">
          <NavLink to="https://demos.creative-tim.com/astro-ecommerce/landing/">
            <img className="img border-radius-sm" src={BlogImg} alt="" />
          </NavLink>
        </div>
        <div className="card-body px-0">
          <h5 className="mt-2">
            <a
              href="https://demos.creative-tim.com/astro-ecommerce/landing/"
              className="text-dark font-weight-bolder"
            >
              Comming Soon
            </a>
          </h5>
          <p>
            Blog will be comming Soon...
          </p>
          <NavLink
            to="#"
            className="text-primary text-sm font-weight-bold icon-move-right"
          >
            View Page <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
