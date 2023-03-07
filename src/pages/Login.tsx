import { FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserLogin } from "../services/AuthServices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UserLogin({ email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };
  return (
    <>
      <div className="conatiner mb-7">
        <form
          id="login-form"
          method="post"
          className="p-5 col-lg mx-lg-auto"
          onSubmit={(e) => onLogin(e)}
        >
          <div className="row">
            <div className="col-lg-5 mx-lg-auto bg-light shadow p-5 mt-7">
              <h3 className="text-center"> Login Yourself</h3>
              <p className="text-center">Please fill the form below</p>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    autoFocus
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remeber Me
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
                  <NavLink
                    to={"/auth/register"}
                    className="ml-2 font-bold text-primary"
                  >
                    Register Now
                  </NavLink>
                  |
                  <NavLink to={"/auth/forgot"} className="ml-2 text-primary">
                    Forgot Password
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

export default Login;
