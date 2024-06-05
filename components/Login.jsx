import React, { useState } from "react";
import Google from "../assets/Google.png";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  handleFormValidation,
} from "./validations";

export default function Login() {
  let navigate = useNavigate();

  function afterSigninNavigate() {
    navigate("/home");
  }

  function SignupOnclick() {
    navigate("/signup");
  }
  const [formValidate, setFormValidate] = useState({
    emailValid: false,
    passwordValid: false,
  });

  const [loginCredentials, setLoginCredentials] = useState({
    email: { name: "", errorT: "" },
    password: { name: "", errorT: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let data = validateFn(e, name);
    data.then((res) => {
      if (name == "email" && res.errorText != "") {
        setFormValidate({ ...formValidate, emailValid: false });
        setLoginCredentials({
          ...loginCredentials,
          [name]: {
            ...loginCredentials[name],
            name: value,
            errorT: res.errorText,
          },
        });
      } else if (name == "email") {
        setFormValidate({ ...formValidate, emailValid: true });
        setLoginCredentials({
          ...loginCredentials,
          [name]: {
            ...loginCredentials[name],
            name: value,
            errorT: res.errorText,
          },
        });
      }

      if (name == "password" && res.errorText != "") {
        setFormValidate({ ...formValidate, passwordValid: false });
        setLoginCredentials({
          ...loginCredentials,
          [name]: {
            ...loginCredentials[name],
            name: value,
            errorT: res.errorText,
          },
        });
      } else if (name == "password") {
        setFormValidate({ ...formValidate, passwordValid: true });
        setLoginCredentials({
          ...loginCredentials,
          [name]: {
            ...loginCredentials[name],
            name: value,
            errorT: res.errorText,
          },
        });
      }
    });

    // console.log(validations.name,validations.errorText)

    setLoginCredentials({
      ...loginCredentials,
      [name]: { ...loginCredentials[name], name: value },
    });

    // if(name=='email')
    // {
    //   setEmailValid(validateEmail(value))
    // }
    // else
    // {
    //   setPasswordValid(validatePassword(value))
    // }
    console.log(formValidate);
  };

  const validateFn = async (e) => {
    let validations = await handleFormValidation(e);
    return validations;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/*-- left side --*/}
        <div className="flex flex-col justify-center p-6 md:p-14 mx">
          <span className="mb-3 text-4xl font-bold text-blue-950">
            IIT Bombay
          </span>
          <span className="mb-3 text-xl font-bold text-blue-950">
            Job Search
          </span>
          <span className="font-light text-gray-400 mb-3">
            Hi! Please enter your details
          </span>
          <div className="py-2 flex flex-col">
            <span
              className='mb-1'
            >
              Email
            </span>
            <input
              type="text"
              className={`w-full p-2 border ${
                loginCredentials.email.errorT === ""
                  ? "border-gray-300"
                  : "border-red-600"
              } rounded-md placeholder:font-light placeholder:text-gray-500`}
              name="email"
              id="email"
              value={loginCredentials.email.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span className="text-xs text-red-400">
              {loginCredentials.email.errorT}
            </span>
          </div>
          <div className="py-2 flex flex-col mb-2">
            <span
              className='mb-1'
            >
              Password
            </span>
            <input
              type="password"
              name="password"
              id="pass"
              className={`w-full p-2 border ${
                loginCredentials.password.errorT === ""
                  ? "border-gray-300"
                  : "border-red-600"
              } rounded-md placeholder:font-light placeholder:text-gray-500`}
              value={loginCredentials.password.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span className="text-xs text-red-400">
              {loginCredentials.password.errorT}
            </span>
          </div>
          <div className="flex justify-between w-full pb-4">
            {/* <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember</span>
            </div> */}
            <span className="text-sm cursor-pointer hover:shadow-sm">
              Forgot password
            </span>
          </div>
          <button
            disabled={!(formValidate.emailValid && formValidate.passwordValid)}
            className={
              !(formValidate.emailValid && formValidate.passwordValid) === false
                ? "w-full border bg-blue-600 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md"
                : "w-full border bg-blue-300 border-gray-300 text-white p-2 rounded-lg mb-6 hover:shadow-md"
            }
            onClick={() => {
              afterSigninNavigate();
            }}
          >
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:shadow-md">
            <img src={Google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span
              className="font-bold cursor-pointer text-blue-600"
              onClick={() => {
                SignupOnclick();
              }}
            >
              {" "}
              Sign up!{" "}
            </span>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <div
            className="w-[400px] h-full bg-no-repeat rounded-r-2xl md:block object-cover "
            style={{
              backgroundImage: "url('../assets/iitbombay.jpg')",
              backgroundSize: "cover",
            }}
          />

          {/* <img
            src={loginImage}
            alt="img"
            className="w-[400px] h-full  rounded-r-2xl md:block object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
}
