import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";
import { Result } from "postcss";

const Register = () => {
  const [accepted,setAccepted] = useState(false);

  const { googleLogin, setUser, emailLogin } = useContext(DataProvider);
  const signUpGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setUser(result);
        
      })
      .catch((error) => {
        console.log(error);
      });

      
  };

  const emailRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoUrl = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
  
      emailLogin(email,password)
      .then(result => {
        console.log(result);
        // setUser(result);
        form.reset();
      })
      .catch(error => {
        console.log(error.message);
      })

  }

  const handleAccept = (e) => {
    setAccepted(e.target.checked);
  }

  // console.log(googleLogin);
  return (
    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={emailRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control flex flex-row items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-xs" onClick={handleAccept} />
                <Link to="/terms" className="text-blue-600">Accept all terms and conditions</Link>
              </div>
              <div className="form-control flex flex-row items-center justify-center mt-6">
                <button className="btn btn-primary" disabled={!accepted}>Register</button>
                <button onClick={signUpGoogle}>
                  <img
                    className="w-24"
                    src={
                      "https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
                    }
                    alt=""
                  />
                </button>
              </div>
              <p>
                All ready have an account{" "}
                <Link to="/login" className="text-red-700">
                  Login Here!!!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
