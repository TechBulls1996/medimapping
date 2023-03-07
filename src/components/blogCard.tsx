import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const BlogCard = () => {
  const BlogImg =
    "https://www.creative-tim.com/astro/assets/img/landing-page.jpg";
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
              Landing Page
            </a>
          </h5>
          <p>
            Designed to introduce the website's purpose and encourage the user
            to take an action.
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
