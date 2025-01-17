"use client";
import React, { useState } from "react";
import illustrator from "../../assets/career.png";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import Link from "next/link";

function Career() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = `/update-form?data=${encodeURIComponent(
          JSON.stringify(data)
        )}`;
      } else {
        const errorText = await response.text();
        setError(`Upload failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex h-[100vh]">
      <div className="bg-primary_400 w-[50%] p-20">
        <h2 className="text-primary_200 font-bold text-4xl">
          Share your resume, and Eleka will elevate your career!
        </h2>
        <p className="text-gray_100 mt-10">
          Share your resume with Eleka for personalized support to achieve your
          career goals!
        </p>
        <Image
          src={illustrator}
          alt="Career illustrator"
          className="w-[100%] h-[55%] mt-10 mx-auto"
        />
      </div>

      <div className="my-auto p-10 text-center">
        <h2 className="text-primary_200 text-xl font-medium">
          Ready to share your story with us? <br /> Tell us a bit about
          yourself
        </h2>
        <p className="text-sm text-gray_100 mt-5">
          Tell us about yourself and your journey so far. We're excited to
          learn more about what makes you unique!
        </p>

        <div className="flex flex-col">
          <div className="flex items-center p-2 justify-center border border-gray-200 w-[50%] rounded-lg cursor-pointer bg-gray-100 mt-8 mx-auto">
            <MdOutlineFileUpload className="text-primary_200 text-lg mr-1" />
            <label className="text-primary_200 text-sm cursor-pointer">
              {file ? file.name : "Upload your CV or resume"}
              <input
                accept=".pdf,.doc,.docx"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="w-[50%] mt-4 mx-auto">
            <Link href="/chat" className="bg-gray-300 text-primary_200  py-2 px-4">Upload CV</Link>
            {/* <button
              onClick={handleUpload}
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-100 text-primary_200"
              } p-2 text-sm rounded-lg border border-gray-200 w-[100%]`}
            >
              {loading ? "Uploading..." : "Upload CV"}
            </button> */}
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-3 mx-auto w-[50%]">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Career;
