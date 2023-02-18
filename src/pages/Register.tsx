import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="conatiner mb-7">
        <form id="login-form" method="post" className="p-5 col-lg mx-lg-auto">
          <div className="row">
            <div className="col-lg-8 mx-lg-auto bg-light shadow p-5 mt-7">
              <h3 className="text-center"> Register Yourself</h3>
              <p className="text-center">Please fill the form below</p>

              <div className="row">
                <div className="col-sm-12 mb-3">Personal Details</div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    placeholder="Date Of Birth"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                  <select className="form-control" name="gender" id="gender">
                    <option selected value="" disabled={true}>
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <select className="form-control" name="gender" id="gender">
                    <option selected value="" disabled={true}>
                      Select Blood Group
                    </option>
                    <option>O+</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                    <option>AB+</option>
                    <option>Don't Know</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck1"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        I Accept{" "}
                        <NavLink
                          to={"/terms_conditions"}
                          className="ml-2 font-bold text-primary"
                        >
                          Terms & Conditions
                        </NavLink>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group col-sm-12 pt-4">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary px-6"
                  >
                    Login{" "}
                  </button>
                </div>

                <div className="form-group col-sm-12 pt-3 text-center ">
                  Already have an account?{" "}
                  <NavLink
                    to={"/login"}
                    className="ml-2 font-bold text-primary"
                  >
                    Login Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
