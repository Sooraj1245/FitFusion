import React from "react";
import RegisterInputComponent from "../components/RegisterInputComponent";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-background h-screen w-full">
      <div className="flex flex-col items-center bg-card w-fit h-fit rounded-lg border-border shadow-md p-5 gap-4">
        <span className="text-[35px] font-Mont font-semibold ">
          Fit<span className="text-accent">Fusion</span>
        </span>
        <RegisterInputComponent name="Username" />
        <RegisterInputComponent name="Password" />
      </div>
    </div>
  );
};

export default Login;
