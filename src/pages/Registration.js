import React, { useState } from 'react'
import { darkLogo } from "../assets/index";
import { Link } from "react-router-dom";

function Registration() {
    const [clientName,setClientName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cPassword,setCPassword]=useState("");

    const [errClientName,setErrClientName]=useState("");
    const [errEmail,setErrEmail]=useState("");
    const [errPassword,setErrPassword]=useState("");
    const [errCPassword,setErrCPassword]=useState("");


    const handleRegistration=(e)=>{
        e.preventDefault();
        if(!clientName){
            setErrClientName("Enter your name");
            // return false;
        }
        if(!email){
            setErrEmail("Enter your email");
            // return false;
        }
        if(!password){
            setErrPassword("Enter yout password");
            // return false;
        }
        else{
            if(password.length<6){
                setErrPassword("Password must be atleast 6 characters");
                // return false;
            }
        }
        if(!cPassword){
            setErrCPassword("Confirm your password");
            // return false;
        }
        else{
            if(cPassword!== password){
                setErrCPassword("Password not matched");
                // return false;
            }
        }
    }
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img src={darkLogo} className="w-32 mt-5 mb-2" alt="darkLogo" />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  onChange={(e) => {
                    setClientName(e.target.value);
                    setErrClientName("");
                  }}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                ></input>
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex flex-center gap-2 -mt-1.5">
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrEmail("");
                  }}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                ></input>
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex flex-center gap-2 -mt-1.5">
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrPassword("");
                  }}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                ></input>
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex flex-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  onChange={(e) => {
                    setCPassword(e.target.value);
                    setErrCPassword("");
                  }}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                ></input>
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex flex-center gap-2 -mt-1.5">
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be atleast 6 characters
                </p>
              </div>
              <button onClick={handleRegistration} className="yellowButton">
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4 mb-4">
              By Continuing, you agree to Amazon clone's{" "}
              <span className="text-blue-600">Conditions of Use</span> and
              <span className="text-blue-600"> Privacy Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration