import React, { useState } from 'react'
import {darkLogo} from "../assets/index"
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/amazonSlice';

function Signin() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const auth = getAuth();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");


    const handleSignin=(e)=>{
        e.preventDefault();
        if(!email){
            setErrEmail("Enter your email");
        }
        if(!password){
            setErrPassword("Enter yout password");
        }
        if(email && password){
          // console.log(email,password)
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // console.log(user.displayName);
              dispatch(setUserInfo({_id:user.uid,
              userName:user.displayName,
              email:user.email
            }))
              setEmail("");
              setPassword("");
              // setTimeout(()=>{
                navigate("/")
              // },2000);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode === "auth/wrong-password"){
                setErrPassword("Incorrect Password");
              }
              if (errorCode === "auth/user-not-found"){
                setErrEmail("Email does not exists");
              } 
              if (errorCode === "auth/invalid-email"){
                setErrEmail("Invalid Email");
              } console.log(errorCode);
            });
          
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
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrEmail("");
                  }}
                  value={email}
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
                  value={password
                  }
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                ></input>
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex flex-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>
              <button onClick={handleSignin} className="yellowButton">
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon clone's{" "}
              <span className="text-blue-600">Conditions of Use</span> and
              <span className="text-blue-600"> Privacy Notice.</span>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link className="w-full" to="/registration">
            <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin