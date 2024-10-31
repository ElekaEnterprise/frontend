'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import illustrator from "../../assets/illustrator.png";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields to sign in.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a correct email address.");
      return;
    }

    setError("");
    router.push("/career");
  };

  return (
    <div className="flex h-[100vh] bg-white">
      <div className="bg-primary_400 flex flex-col gap-7 p-20 w-[50%]">
        <h2 className="font-bold text-primary_200 text-3xl">Unite with Eleka and Shape Your Career Future!</h2>
        <p className="text-gray_100 text-[14px]">
          Join Eleka for personalized guidance and resources to shape your fulfilling career.
        </p>
        <Image className="w-[70%] mx-auto h-[70%]" src={illustrator} alt="sign-up illustrator" />
      </div>
      <Card color="transparent" shadow={false} className="p-20">
        <h3 className="text-primary_200 font-semibold text-3xl">
          Welcome Back!
        </h3>
        <Typography className="mt-2 text-[14px] font-normal text-gray_100">
          Sign in to continue
        </Typography>
        <form onSubmit={handleSignIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <h3 className="-mb-3 text-primary_200">Your Email</h3>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-primary_300"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="-mb-3 text-primary_200">Password</h3>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-primary_300"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <Button type="submit" className="mt-6 bg-primary_200" fullWidth>
            Sign in
          </Button>
          <p className="mt-4 text-center text-[14px] text-[#9CA3AF] font-normal">
            Don't have an account yet?{" "}
            <a href="/signup" className="font-medium text-primary_200">
              Sign Up
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}
