import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../Assets/assets";
import { useFirebaseContext } from "../Context/Firebase";

export default function Register_Page() {

  const firebase = useFirebaseContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // If User have already Account
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    await firebase
      .signUpWithEmailAndPassword(email, password)
      .then((res) => alert("Successful Signup"))
      .catch((error) => alert("Error, Try Again"));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="max-w-screen h-[calc(100vh-60px)] bg-gray-200 flex justify-center items-center">
        <form className="w-[80%] h-[85%] max-h-[600px] flex bg-white max-w-[900px] rounded-xl shadow-xl">
          <div className="w-[50%] flex-1 flex flex-col justify-center items-center gap-8">
            <h1 className="text-[2rem] font-semiBold text-blue-800">
              {" "}
              Sign Up{" "}
            </h1>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[20px] text-wrap" htmlFor="email">
                {" "}
                Email{" "}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="enter your email..."
                required
              />
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[20px] text-wrap" htmlFor="password">
                {" "}
                Password{" "}
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="enter your password..."
                required
              />
            </div>
            <div className="w-[80%]">
              <button
                onClick={handleSignUp}
                type="submit"
                className="w-[100%] bg-blue-800 text-white rounded-md py-3 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
              >
                {" "}
                Register{" "}
              </button>
            </div>
            <div className="w-[80%]">
              <button
                onClick={(e) => navigate("/login(logout)")}
                type="submit"
                className="w-[100%] bg-blue-800 text-white rounded-md py-3 text-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:bg-blue-700 shadow-lg hover:shadow-xl"
              >
                {" "}
                Login{" "}
              </button>
            </div>
          </div>
          <div className="md:flex-1 md:justify-center md:items-center md:flex hidden">
            <img
              src={assets.signup_img}
              alt="signup_img"
              className="w-[100%] max-w-[800px]"
            />
          </div>
        </form>
      </div>
    </>
  );
}