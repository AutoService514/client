import React, { useEffect } from "react";
import { REGISTRATION_ROUTES, LOGIN_ROUTES } from "../utils/consts";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";
import "../style/main_styles.css";
import opacityAppear from "./anim";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      return errors;
    }

    try {
      console.log(data);
      const response = await axios.post(
        `${process.env.BACKEND_URL}/client`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTES;

  useEffect(() => {
    const wrapper = document.querySelector(
      isLogin ? ".login-wrapper" : ".reg-wrapper"
    );
    opacityAppear(wrapper);
  }, [isLogin]);

  return (
    <form
      className="form"
      id="form"
      method="post"
      name="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={isLogin ? "login-wrapper" : "reg-wrapper"}>
        <h1 className="title">{isLogin ? "Welcome Back" : "Registration"}</h1>
        <p className={isLogin ? "description" : "description register"}>
          Enter your credentials to continue.
        </p>
        {isLogin ? (
          <div className="login">
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                name="login_email"
                id="login_email"
                {...register("login_email", {
                  required: "Email is required",
                  minLength: {
                    value: 3,
                    message: "Email must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Email cannot exceed 30 characters",
                  },
                })}
              />
              <i className="fa-solid fa-envelope"></i>
            </div>
            {errors.login_email && (
              <p className="error">{errors.login_email.message}</p>
            )}

            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                name="login_password"
                id="login_password"
                {...register("login_password", {
                  required: "Password is required",
                  minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password cannot exceed 30 characters",
                  },
                })}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            {errors.login_password && (
              <p className="error">{errors.login_password.message}</p>
            )}
            <div className="login-wrapper-btn">
              <div className="input-wrapper">
                <span className="faq">Don`t have an account? </span>
                <NavLink className="reg" to={REGISTRATION_ROUTES}>
                  Registration
                </NavLink>
              </div>
              <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                <div className="input-wrapper">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </GoogleOAuthProvider>
              <div className="input-wrapper">
                <button className="button" type="submit">
                  Sign In
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="registration">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your phone number"
                name="contactNumber"
                title="Enter your phone number"
                size="13"
                inputMode="numeric"
                id="contactNumber"
                {...register("contactNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[0-9]{10,13}$/,
                    message: "Phone number must be a valid format",
                  },
                })}
              />
              <i className="fa-solid fa-phone"></i>
            </div>
            {errors.contactNumber && (
              <p className="error">{errors.contactNumber.message}</p>
            )}

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                name="fullName"
                id="fullName"
                {...register("fullName", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Name cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Zа-яА-Я]+$/,
                    message: "Name must only contain letters",
                  },
                })}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}

            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 3,
                    message: "Email must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Email cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Email must be a valid gmail address",
                  },
                })}
              />
              <i className="fa-solid fa-envelope"></i>
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                name="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password cannot exceed 30 characters",
                  },
                })}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <div className="input-wrapper">
              <span className="faq">Already have an account? </span>
              <NavLink className="reg" to={LOGIN_ROUTES}>
                Login
              </NavLink>
            </div>

            <div className="input-wrapper">
              <button className="button" type="submit" id="submit">
                Sign Up<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Auth;
