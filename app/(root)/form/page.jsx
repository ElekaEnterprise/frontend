"use client";

import React, { useState } from 'react';
import { extractTextFromPdf } from '../../../utils/pdfParser';
import { db, auth } from '../../../utils/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Stepper, Step, Button } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Radio } from "@material-tailwind/react";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];

  const [path, setPath] = useState('');
  const [bio, setBio] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [error, setError] = useState('');

  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      try {
        const text = await extractTextFromPdf(file);
        setBio(text);
      } catch {
        setError('Failed to extract text from the PDF. Please try a different file.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!path || !bio || !workExperience || !skills || !education) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        setError('User not authenticated.');
        return;
      }
      await addDoc(collection(db, 'user', userId, 'form'), {
        path,
        bio,
        workExperience,
        skills,
        education,
        createdAt: new Date(),
      });
      alert('Form submitted successfully!');
    } catch {
      setError('Failed to submit the form. Please try again.');
    }
  };

  const handleNext = () => setCurrentStep((cur) => Math.min(cur + 1, steps.length - 1));
  const handlePrev = () => setCurrentStep((cur) => Math.max(cur - 1, 0));

  return (
    <div className="w-4/6 mx-auto bg-[#16213b] h-[100vh] shadow-md rounded-lg">
      <div className='fixed left-0 top-0 w-[100%]'>
        <div className='bg-steps pb-16 pt-10 px-10 w-4/6 mx-auto'>
          <Stepper activeStep={currentStep} className="mb-8" lineClassName="bg-[#7C72FF]" activeLineClassName="bg-[#3FB950]">
            {steps.map((label, index) => (
              <Step key={index} color="gray" onClick={() => setCurrentStep(index)} className='bg-[#7C72FF]' activeClassName="ring-0 !bg-[#7C72FF] text-white"
                completedClassName="!bg-[#3FB950] text-white">
                <p className='text-white'>{label}</p>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <form onSubmit={handleSubmit} className=' flex items-center justify-center h-full'>
        {currentStep === 0 && (
          <div className="flex flex-col items-center justify-center w-4/6 mx-auto bg-[#7C72FF] rounded-2xl">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[#7C72FF] rounded-lg cursor-pointer bg-[#1c2a49] shadow-xl dark:bg-gray-700 hover:bg-[#16213b] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Uploaded file: <span className="font-semibold">{fileName}</span>
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-semibold">Choose Your Path</h2>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <Radio
                  type="radio"
                  name="path"
                  value="Career Guidance"
                  checked={path === 'Career Guidance'}
                  onChange={() => setPath('Career Guidance')}
                />
                <span className="ml-2">Career Guidance</span>
              </label>
              <label className="flex items-center">
                <Radio
                  type="radio"
                  name="path"
                  value="Transition Planning"
                  checked={path === 'Transition Planning'}
                  onChange={() => setPath('Transition Planning')}
                />
                <span className="ml-2">Transition Planning</span>
              </label>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-semibold">Tell Us About Your Work Experience</h2>
            <textarea
              placeholder="Work Experience"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="form-textarea"
            />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-semibold">List Your Skills</h2>
            <textarea
              placeholder="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="form-textarea"
            />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-semibold">Education Information</h2>
            <textarea
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="form-textarea"
            />
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h2 className="text-xl font-semibold">Preview</h2>
            <p><strong>Path:</strong> {path}</p>
            <p><strong>Bio:</strong> {bio}</p>
            <p><strong>Work Experience:</strong> {workExperience}</p>
            <p><strong>Skills:</strong> {skills}</p>
            <p><strong>Education:</strong> {education}</p>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        )}
        <div className="flex justify-between mt-4 fixed w-4/6 mx-auto px-20 bottom-0 bg-steps-bottom pb-10 pt-16">
          <Button onClick={handlePrev} disabled={currentStep === 0} className='bg-[#fff0] border flex items-center border-[#7C72FF] gap-4'>
            <FaArrowLeftLong /> <p>Previous</p>
          </Button>
          <Button onClick={handleNext} disabled={currentStep === steps.length - 1} className='flex items-center gap-4 bg-[#fff0] border-[#7C72FF] border'>
           <p>Next</p> <FaArrowRightLong />
          </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default StepForm;
