import BreadCrumb from "../components/common/breadcrumb";
import BlogCard from "../components/blogCard";

const Blogs = () => {
  return (
    <>
      <header className="masthead masthead-small py-5">
        <div className="container d-flex h-80 align-items-center">
          <div className="mx-auto text-center">
            <div className="row">
              <div className="col-sm-12 pt-4">
                <h1 className="mx-auto my-0 text-uppercase">MediMapping</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BreadCrumb pages={["Blogs"]} />
      <div className="container">
        <div className="col-sm-12">
          <div className="row">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
