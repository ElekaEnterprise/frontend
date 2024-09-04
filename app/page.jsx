'use client'

import React from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BiCertification } from "react-icons/bi";
import Steps from "@/components/home/steps";
import Why from "@/components/home/why"
import { GiAchievement } from "react-icons/gi";
import { FaLockOpen } from "react-icons/fa";


const Features = [
  {
    key: "Create Your Account",
    detail: "Join Eleka and set up your profile to unlock a world of personalized career insights."
  },
  {
    key: "Personalized Career Guidance",
    detail: "Our AI analyzes your skills, passions, and goals to create a roadmap tailored just for you."
  },
  {
    key: "Career Transition Support",
    detail: "Planning a change? We'll help you navigate the path with confidence, highlighting the skills and certifications you need."
  },
  {
    key: "Continuous Support",
    detail: "Receive ongoing support and updates as you progress in your career journey"
  },
  {
    key: "Progress Tracking",
    detail: "Monitor your growth and adjust your goals with real-time feedback from our system."
  },
]


export default function Home() {
  return (
    <main className="p-24  overflow-hidden">

      <div className='flex gap-12 w-5/6 mx-auto pt-20'>
        <div className='flex flex-col items-center'>
          <BiCertification className='text-3xl font-normal' />
          <div className='bg-gradient01 w-[3px]'></div>
        </div>
        <div className=''>
          <h1 className='text-5xl font-extrabold text-[#fff]'>Shape Your Future with Personalized Career Guidance</h1>
          <h2 className='text-2xl my-10'>Empower your career journey with AI-driven insights and tailored roadmaps.</h2>
          <h1 className='text-[#fff] inline-block text-xl rounded-sm bg-[#7C72FF] py-1 px-4'>
            Get Started
          </h1>
        </div>
      </div>



      <div className='my-28 bg-gradient02 border-[#5a5a5a9d] py-20 px-28 border-[1px] rounded-[2rem]'>
        <h1 className='text-xl'><span className='text-[#3FB950] font-extrabold text-4xl'>Why Eleka?</span> is your personal career coach, offering customized guidance whether you're aiming to grow in your current field or planning a complete career transition.</h1>
        <div className='flex gap-4 flex-wrap pt-20'>
          {Features.map((itm) => (
            <div className='border-[#5a5a5a9d] p-6 border-[1px] rounded-md w-[32%] h-[10rem]'>
              <h1 className='text-[#fff] text-xl font-bold mb-2'>{itm.key}</h1>
              <p className='text-sm'>{itm.detail}</p>
            </div>
          ))}

          <div className='border-[#5a5a5a9d] border-[1px] rounded-md w-[32%] mb-[-10rem] shadow-2xl'>
            <div className='bg-[#1d2b4a] p-6 rounded-s-sm h-full'>
              <h1 className='text-[#fff] text-xl font-bold mb-2'>Eleka</h1>
              <p className='text-sm flex items-center justify-between gap-2'>
                Empower your career journey with AI-driven insights and tailored roadmaps.
              </p>
              <p className='border-[#3FB950] border-[1px] text-xs my-4 inline-block p-1 rounded-md text-[#3FB950]'>Did you know?</p>
              <p className='text-sm text-[#fff]'>Everything we offer is personalized to your unique strengths and goals.</p>
              <h1 className='text-[#fff] inline-block text-md my-6 rounded-sm bg-[#7C72FF] py-1 px-4'>
                Get Started
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div className='flex gap-12 w-5/6 mx-auto mb-28 relative'>
        {/* <div className="border-[#5a5a5a9d] border-[1px] rounded-md w-[35rem] h-[35rem] absolute right-[-15rem] top-[20rem] rotate-45">
          <div className="border-[#5a5a5a9d] border-[1px] rounded-[50%] w-[35rem] h-[35rem]"></div>
        </div> */}
        <div className='flex flex-col items-center mt-[-5rem]'>
          <div className='bg-gradient03 w-[3px]'></div>
          <GiAchievement className='text-6xl font-normal' />
        </div>
        <div className='mt-20'>
          <h1 className='text-5xl font-extrabold text-[#3FB950]'>How It Works</h1>
          <h2 className='text-xl my-6'>Step-by-Step Process:</h2>
          <Steps />
        </div>
      </div>


      <div className='flex gap-12 w-5/6 mx-auto mb-28 relative'>
        <div className="border-[#5a5a5a9d] border-[1px] rounded-md w-[35rem] h-[35rem] absolute right-[-15rem] top-[10rem] rotate-45">
          <div className="border-[#5a5a5a9d] border-[1px] rounded-[50%] w-[35rem] h-[35rem]"></div>
        </div>
        {/* <div className='flex flex-col items-center mt-[-5rem]'>
          <div className='bg-gradient04 w-[3px]'></div>
          <FaLockOpen className='text-6xl p-2 font-normal' />
        </div> */}
        <div className=''>
          <h1 className='text-5xl font-extrabold text-[#33B3AE]'>Why Choose Eleka?</h1>
          <Why />
        </div>
      </div>



      <div className='w-4/6 mt-28 mx-auto'>
        <h1 className='text-center text-4xl font-extrabold mb-10'>Join the Community</h1>
        <p className='text-center mb-20 w-2/3 mx-auto'>roadmap.sh is the 7th most starred project on GitHub and is visited by hundreds of thousands of developers every month.</p>

        <div className='flex mx-auto w-4/5 justify-between'>
          <div className='text-center'>
            <p className='text-sm'><span className='bg-[#3B82F6] rounded-sm p-1 text-[#fff]'>Rank 7th</span> out of 28M!</p>
            <h1 className='text-5xl font-extrabold mt-4'>289K</h1>
            <p className='text-xs mb-4'>GitHub Stars</p>
            <div className='border-[#c084FC] p-2 border-[1px] rounded-md'>
              <p className='flex items-center gap-2'><FaStar /> Star us on Github</p>
              <p className='text-xs font-serif'>Help us to reach #1</p>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-sm'><span className='bg-[#3B82F6] rounded-sm p-1 text-[#fff]'>+90K</span> Every month</p>
            <h1 className='text-5xl font-extrabold mt-4'>+1M</h1>
            <p className='text-xs mb-4'>Registered Users</p>
            <div className='border-[#c084FC] p-2 border-[1px] rounded-md'>
              <p className='flex items-center gap-2'><FaStar />Register Yourself</p>
              <p className='text-xs font-serif'>Help us to reach #1</p>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-sm'><span className='bg-[#3B82F6] rounded-sm p-1 text-[#fff]'>+1.5k</span> Every month</p>
            <h1 className='text-5xl font-extrabold mt-4'>25K</h1>
            <p className='text-xs mb-4'>Discord Members</p>
            <div className='border-[#c084FC] p-2 border-[1px] rounded-md'>
              <p className='flex items-center gap-2'><FaStar />Join On Discord</p>
              <p className='text-xs font-serif'>Help us to reach #1</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
