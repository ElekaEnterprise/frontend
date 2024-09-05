'use client'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Signup() {
    return (
      <div className="flex justify-center items-center h-[100dvh]">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography className="mt-1 font-normal text-[#9CA3AF]">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-[#7C72FF]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-[#7C72FF]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-[#7C72FF]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                className="flex items-center font-normal text-[#9CA3AF]"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors text-[#7C72FF] hover:text-[#7C72FF]"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-[#3FB950]" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center text-[#9CA3AF] font-normal">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-[#7C72FF]">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }