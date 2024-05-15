import React, { useEffect } from "react";
import { REGISTRATION_ROUTES, LOGIN_ROUTES } from "../utils/consts";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";
import "../style/main_styles.css";
import opacityAppear from "./anim";
import { GoogleLogin } from "@react-oauth/google";

import { GoogleOAuthProvider } from "@react-oauth/google";
const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      return errors;
    }
    console.log(data);
  };
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTES;
  useEffect(() => {
    const wrapper = document.querySelector(
      isLogin ? ".login-wrapper" : ".reg-wrapper"
    );
    opacityAppear(wrapper);
  }, []);

  return (
    <form
      className="form"
      id="form"
      method="post"
      name="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={isLogin ? "login-wrapper" : "reg-wrapper"}>
        {/* <div className={isLogin ? "login-wrapper" : "reg-wrapper"}> */}
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
              <GoogleOAuthProvider clientId="735439241424-tkum5tnp4rpoelbpjn43f4lcnhu7iqdt.apps.googleusercontent.com">
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
                {/*<NavLink to={LOGIN_ROUTES}>*/}
                <button className="button" type="submit">
                  Sign In
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
                {/*</NavLink>*/}
              </div>
            </div>
          </div>
        ) : (
          <div className="registration">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="+380..-...-...-..."
                name="telephone"
                title="Enter your phone number"
                size="13"
                inputMode="numeric"
                id="telephone"
                {...register("telephone", {
                  required: "Phone number is required",
                  pattern: {
                    value: "+380-[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{2}",
                    message:
                      "Phone number must be in the format +380-XX-XXX-XX-XX",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number must be exactly 13 characters long",
                  },
                  maxLength: {
                    value: 13,
                    message: "Phone number must be exactly 13 characters long",
                  },
                })}
              />
              <i className="fa-solid fa-phone"></i>
            </div>
            {errors.telephone && (
              <p className="error">{errors.telephone.message}</p>
            )}

            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="Name"
                name="name"
                id="name"
                {...register("name", {
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
                    message:
                      "Name must only contain letters, spaces, and hyphens",
                  },
                })}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            {errors.name && <p className="error">{errors.name.message}</p>}

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
              <p className="error">{errors.password.message} </p>
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
