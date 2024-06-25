"use client";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const email = form.get("email");

    const loginInfo = {
      Email: email,
      Password: password,
    };
    // console.log(loginInfo);
    // setLoading(true);
    e.target.reset();
  };

  return (
    <div className="container py-14 lg:py-20">
      <div className="grid grid-cols-12 items-center gap-y-5">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2">
            Login for entering the vast world of Tech products!
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          {/* Registration Form */}
          <div className="bg-white rounded-xl px-6 py-8 border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
                >
                  Password
                </label>
              </div>
              <button className="btn w-full">
                {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
                Login
              </button>
            </form>
            <span>
              Don&apos;t have an account?<Link href="/signup">Register here.</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
