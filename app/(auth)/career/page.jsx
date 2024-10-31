"use client"
import React, {useState } from 'react';
import illustrator from "../../assets/career.png";
import Image from 'next/image';
import { MdOutlineFileUpload } from "react-icons/md";

function Career() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  return (
    <div className='bg-white flex h-[100vh]'>
      <div className='bg-primary_400 w-[50%] p-20'>
        <h2 className='text-primary_200 font-bold text-4xl'>Share your resume, and Eleka will elevate your career!</h2>
        <p className='text-gray_100 mt-10'>Share your resume with Eleka for personalized support to achieve your career goals!</p>
        <Image src={illustrator} alt='Career illustrator' className='w-[100%] h-[55%] mt-10 mx-auto' />
      </div>
      <div className='my-auto p-10 text-center'>
        <h2 className='text-primary_200 text-xl font-medium'>Ready to share your story with us? <br /> Tell us a bit about youserlf </h2>
        <p className='text-sm text-gray_100 mt-5'>Tell us about yourself and your journey so far. We're excited to learn more about what makes you unique!</p>
        <div className="flex flex-col">
        <div className="flex items-center p-2 justify-center border border-gray-200 w-[50%] rounded-lg cursor-pointer bg-gray-100 mt-8 mx-auto">
      <MdOutlineFileUpload className="text-primary_200 text-lg mr-1" />
      <label className=" text-primary_200 text-sm cursor-pointer">
        {fileName || "Upload your CV or resume"}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      </div>
      <div className="w-[50%] mt-4 mx-auto">
        <button className="bg-gray-100 text-primary_200 p-2 text-sm rounded-lg border border-gray-200 w-[100%]">Fill out manually</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Career;