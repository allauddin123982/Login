import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({});
  const [errorr, setErrorr] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:9000/login", form)
      .then((result) => {
        console.log("res from DB", { result });
        const { status, message, user } = result.data;
        const { namee } = user;
        if (status) {
          console.log("Name ", namee);
          navigate(`/home/${namee}`);
        } else {
          setErrorr(message);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="d-flex justify-content-center w-50 p-5 mt-5 ">
          <div className=" bg-white rounded p-3 w-50">
            <form onSubmit={handleSubmit} className="border p-3 ">
              <h2>Login</h2>

              <div className="mb-3 mt-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                  onChange={handleChange}
                  name="password"
                />
              </div>

              <p className="text-danger">{errorr}</p>
              <button type="submit" className="ms-2 btn btn-primary">
                Login
              </button>
              {errorr ? (
                <Link to={"/register"}>
                  <button type="submit" className="ms-2 btn btn-primary">
                    Sign up if new user
                  </button>
                </Link>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
