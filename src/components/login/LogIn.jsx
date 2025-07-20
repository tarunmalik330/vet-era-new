"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomInput from "../common/CustomInput";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center px-5">
      <div className="py-7 p-4 sm:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-solid border-gray-500 shadow-2xl w-full max-w-[650px] hover:border-transparent transition-all ease-linear duration-300">
        <h1 className="font-titillium text-blue-950 text-5xl lg:text-6xl xl:text-8xl font-semibold tracking-[1px] text-center mb-5 md:mb-7">
          VetEra
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-blue-950 font-titillium font-semibold leading-[120%] text-center">
          Welcome Back <br /> to VetEra
        </p>
        <div className="space-y-4 mt-10">
          <CustomInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="mt-6 w-full py-3 bg-dark-blue cursor-pointer text-white font-medium rounded-md hover:bg-dark-blue/90 font-titillium text-lg sm:text-xl md:text-2xl tracking-[1px] transition">
          Login
        </button>

        <p className="mt-6 text-dark-blue font-normal text-center">
          New here?{" "}
          <Link
            href="/signup"
            className="text-dark-blue font-titillium font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
