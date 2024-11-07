'use client';

import { useState } from "react";
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import illustrator from "../../assets/illustrator2.png";
import Image from "next/image";
import { MdHorizontalRule } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setError("Please enter an email address");
      return;
    }

    setError("");
    router.push("/career");
  };

  return (
    <div className="flex bg-white h-[100vh]">
      <div className="bg-primary_400 flex flex-col gap-10 p-20 w-[50%]">
        <h2 className="font-bold text-primary_200 text-3xl">Find Clarity in Your Career with Eleka</h2>
        <p className="text-gray_100 text-[14px]">
          Unclear about your career path? Eleka offers personalized, AI-driven guidance to help you set goals, plan, and build skills for success
        </p>
        <Image className="w-[100%] mx-auto h-[60%]" src={illustrator} alt="sign-up illustrator" />
      </div>
      <Card color="transparent" shadow={false} className="p-20">
        <h1 className="text-primary_200 font-semibold text-3xl">Sign In</h1>
        <p className="mt-3 text-[14px] font-normal text-gray_200">
          Welcome to Eleka! Enter your details to create an account
        </p>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-5">
            <div className="flex gap-3">
              <button className="bg-primary_400 rounded-lg flex gap-1 p-2 text-gray-500 items-center lowercase text-[14px] font-normal"><FcGoogle className="text-lg"/>Sign Up with Google</button>
              <button className="bg-primary_400 rounded-lg flex gap-1 p-2 text-gray-500 items-center lowercase text-[14px] font-normal"><FaLinkedin className="text-blue-700 text-lg"/>Sign Up with LinkedIn</button>
            </div>
            <div className="flex gap-2 justify-center items-center mt-2">
              <MdHorizontalRule className="text-gray-500 text-3xl" />
              <p className="text-gray-500">or</p>
              <MdHorizontalRule className="text-gray-500 text-3xl" />
            </div>

            <h3 className="text-primary_200 -mb-4 text-[15px]">Email</h3>
            <Input
              size="lg"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-primary_300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error && <p className="text-red-500 text-sm -mt-4">{error}</p>}
            
            <h3 className="text-primary_200 -mb-4 text-[15px]">Password</h3>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-primary_300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography variant="small" className="flex items-center font-normal text-[#9CA3AF]">
                I agree to the
                <a href="#" className="font-medium transition-colors text-primary_200 hover:text-gray_100">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-primary_200" fullWidth>
            Sign up
          </Button>
          <p className="mt-4 text-center text-[#9CA3AF] font-normal">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-primary_200">
              Sign In
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}
