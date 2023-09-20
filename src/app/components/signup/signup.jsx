"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./signup.css";
import lineimg from "../../images/assets/Line.svg";
import NavbarOne from "@/app/components/navbars/navbar";
import Footer from "../Footer/footer";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userEmailMessage, setuserEmailMessage] = useState("Enter your email");
  const [showUserEmailError, setShowUserEmailError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [userPasswordMessage, setUserPasswordMessage] = useState(
    "Enter your password"
  );
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "") {
      setuserEmailMessage("Looks nice!");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    if (userPassword !== "") {
      setUserPasswordMessage("Looks nice!");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userEmail === "") {
      setShowUserEmailError(true);
    }
    if (userPassword === "") {
      setShowUserPasswordError(true);
    }
  };

  return (
    <div className="">
      <NavbarOne />

      <div className="container">
        <div className="row justify-content-center  width-setting my-4">
          <div className="col-md-6 shadow-lg  bg-body rounded ">
            <div className="form px-4  py-5 ">
              <form class="row my-2" onSubmit={formSubmitHandler}>
                <div class="col-12">
                  <h3 className="text-center p-3 fw-bold"> Sign In </h3>
                  <input
                    type="text"
                    className="form-control my-2 shadow-none p-3 mb-5 bg-light rounded"
                    value={userEmail}
                    onChange={userEmailHandler}
                    placeholder="Email"
                  />
                  {showUserEmailError && (
                    <p
                      className={`${
                        userEmailMessage === "Looks nice!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {userEmailMessage}
                    </p>
                  )}
                </div>
                <div className="col-12 ">
                  <input
                    type="text"
                    class="form-control shadow-none p-3 mb-5 bg-light rounded "
                    value={userPassword}
                    onChange={userPasswordHandler}
                    placeholder="Password"
                  />
                  {showUserPasswordError && (
                    <p
                      className={`${
                        userPasswordMessage === "Looks nice!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {userPasswordMessage}
                    </p>
                  )}
                </div>
                <div className="d-flex">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label px-2">Remember Me </label>
                  <span className="d-flex justify-content-end width-password fw-bold">
                    Forget password
                  </span>
                </div>

                <button
                  type="submit"
                  className="rounded btn btn-colorr text-white  my-5 py-2  submit align-items-center justify-content-center"
                >
                  Sign Up
                  <Image
                    className="px-2 "
                    src={lineimg}
                    width={35}
                    height={20}
                  />
                </button>

                <p className="text-center">
                  Don’t have account?{" "}
                  <span className="color-sign-up"> Sign Up </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
