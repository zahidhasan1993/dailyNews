import React, { useContext } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";

const Login = () => {
  const {userLogin} = useContext(DataProvider);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email,password)
    .then(result => {
      console.log(result.user);
      form.reset();
    })
    .catch(err => {
      console.log(err.message);
    })

  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Login your Account!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>Don't have an account <Link to="/register" className="text-red-700">Register Here!!!</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
