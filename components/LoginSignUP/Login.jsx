import React from "react";

const Login = () => {
  return (
    // Outer Container
    <div className="flex flex-col mx-auto justify-center items-center w-[300px] md:w-[350px] py-5 ">
      <div className="bg-gradient-to-r from-[#67499D] to-[#3B378D] w-full flex justify-center ">
        <img className="bg-cover w-28 h-9 " src="/logo-test.png" alt="" />
      </div>
      {/* Inner Container */}
      <div className=" text-gray-400 w-full space-y-5 border">
        <p className=" py-5 text-[#3B378D] text-lg font-semibold text-center">
          Sign in to your account
        </p>

        <div className=" flex flex-col gap-6 mx-7">
          <div className=" text-xs space-y-2">
            <label className=" font-semibold" htmlFor="">
              PHONE NUMBER
            </label>
            <div className=" bg-white flex border-b-2">
              <p className=" text-[#3B378D] px-1 border-r-2 ">+971</p>
              <input className="" type="text" placeholder="Enter Your Number" />
            </div>
          </div>
          <div className=" text-xs space-y-2">
            <label className=" font-semibold" htmlFor="">
              PASSWORD
            </label>
            <div className=" bg-white border-b-2 flex justify-between">
              <input
                className=""
                type="text"
                placeholder="Enter Your Password"
              />
              <a className=" text-[#3B378D] hover:underline">
                Forget Password?
              </a>
            </div>
          </div>
          <div className=" text-sm">
            <button className=" bg-[#3B378D] py-2 w-full text-white text-sm font-semibold rounded-sm">
              LOGIN
            </button>
            <p className=" text-center text-sm py-4">OR</p>
            <p className=" text-center pb-2">
              Don’t have an account?{" "}
              <span className=" text-[#3B378D]">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
