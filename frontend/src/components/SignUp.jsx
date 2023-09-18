import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // function handleChange(e) {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:9000/register", form)
      .then((result) => {
        {
          console.log("data sended to DB ", { result });
        }
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <>
      <div className="d-flex vh-100 justify-content-center mt-5">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, namee: e.target.value }))
                }
                name="namee"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, image: e.target.files[0] }))
                }
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                name="email"
              />
              {error}
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
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
                name="password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <Link to={"/login"}>
              <button type="submit" className="ms-2 btn btn-primary">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
