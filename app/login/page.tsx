"use client";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { auth } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form: any = new FormData(e.currentTarget);
    const password: any = form.get("password");
    const email: any = form.get("email");

    const loginInfo = {
      Email: email,
      Password: password,
    };
    // console.log(loginInfo);
    // setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user:any = userCredential.user;
        const lastLoginTime:any = user.metadata.lastSignInTime;
        console.log(user)
        router.push('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    e.target.reset();
  };

  return (
    <div className="container py-14 lg:py-20">
      <div className="grid grid-cols-12 items-center gap-y-5">
        <div className="col-span-12 lg:col-span-6 relative">
        <div className="absolute w-72 h-72 animate-blob rounded-full blur-xl opacity-50 filter mix-blend-multiply  right-24 -z-50 bg-rose-600 animation-delay-2000"></div>
        <div className="absolute w-72 h-72 animate-blob rounded-full blur-xl opacity-50 filter mix-blend-multiply  right-72 -z-50 bg-purple-600 animation-delay-6000"></div>
        <div className="absolute w-72 h-72 animate-blob animation-delay-4000 rounded-full blur-xl opacity-50 filter mix-blend-multiply  right-48 bottom-24 -z-50 bg-blue-600"></div>
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-white/90">
            Welcome Back!
          </h1>
          <p className="lg:m-5 md:m-3 m-2 text-white/80">
            Log in to your TechDynasty account to continue shopping for the
            latest electronics and access your personalized dashboard.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          {/* Registration Form */}
          <div className="bg-[#D9D9D9] rounded-xl px-2 md:px-6 py-8 border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-3 bg-transparent border border-gray-500 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
                  placeholder="password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-[#D9D9D9] peer-focus:bg-[#D9D9D9]  peer-focus:-translate-y-0 transition-all duration-200"
                >
                  Password
                </label>
              </div>
              <Button className="w-full">
                {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
                Login
              </Button>
            </form>
            <div className="mt-9 flex flex-col items-center relative">
              <span className="w-full border border-gray-500"></span>
              <span className="bg-[#D9D9D9] absolute -translate-y-3 px-2">
                Don&apos;t have an account?
              </span>
              <Button className="mt-6">
                <Link href="/signup">Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
