"use client";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import { ROLES_DATA } from "@/utils/helper";

const SignUp = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role || !name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log({
      role,
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen px-5 flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-[650px] py-7 p-4 sm:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-solid border-gray-500 hover:border-transparent transition-all ease-linear duration-300 shadow-md text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-titillium flex flex-col gap-4">
          Create your <br />{" "}
          <span className="text-2xl md:text-3xl">VetEra Account</span>
        </h1>

        <div className="grid min-[576px]:grid-cols-2 gap-3 mb-6">
          {ROLES_DATA.map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`py-2 px-3 border cursor-pointer hover:bg-dark-blue hover:text-white transition-colors ease-linear duration-300 rounded-md text-lg font-titillium font-medium ${
                role === item
                  ? "bg-dark-blue text-white border-dark-blue"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CustomInput
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-dark-blue cursor-pointer text-white font-medium rounded-md hover:bg-dark-blue/90 font-titillium text-lg sm:text-xl md:text-2xl tracking-[1px] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
