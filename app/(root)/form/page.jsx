"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { extractTextFromPdf } from "../../../utils/pdfParser";
import { db, auth } from "../../../utils/firebaseConfig"; // Combined import
import { addDoc, collection, getDocs } from "firebase/firestore";

const SliderForm = () => {
  const [step, setStep] = useState(1);
  const [path, setPath] = useState('');
  const [bio, setBio] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [error, setError] = useState('');
  // const router = useRouter();

  // Handle file upload and extract text
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await extractTextFromPdf(file);
        setBio(text); // Assuming the text extracted is for the bio
      } catch (err) {
        setError("Failed to extract text from the PDF. Please try a different file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!path || !bio || !workExperience || !skills || !education) {
      setError("Please fill in all fields.");
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
      // After form submission, redirect to /chat
      // router.push('/chat');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Progress Indicator */}
        <div className="mb-4">
          <p>Step {step} of 4</p>
        </div>

        {/* Slider Step 1: File Upload */}
        <div className={`form-slide ${step === 1 ? 'active' : ''}`}>
          <h2 className="text-2xl font-semibold mb-4">Upload Resume PDF</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Slider Step 2: Choose Your Path */}
        <div className={`form-slide ${step === 2 ? 'active' : ''}`}>
          <h2 className="text-2xl font-semibold mb-4">Choose Your Path</h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="path"
                value="Career Guidance"
                checked={path === "Career Guidance"}
                onChange={() => setPath("Career Guidance")}
                className="form-radio"
              />
              <span>Career Guidance</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="path"
                value="Transition Planning"
                checked={path === "Transition Planning"}
                onChange={() => setPath("Transition Planning")}
                className="form-radio"
              />
              <span>Transition Planning</span>
            </label>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(1)}
            >
              Previous
            </button>
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Slider Step 3: Your Details */}
        <div className={`form-slide ${step === 3 ? 'active' : ''}`}>
          <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
          {error && <p className="text-red-500">{error}</p>}
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Work Experience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(2)}
            >
              Previous
            </button>
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(4)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Slider Step 4: Review and Submit */}
        <div className={`form-slide ${step === 4 ? 'active' : ''}`}>
          <h2 className="text-2xl font-semibold mb-4">Review and Submit</h2>
          <div>
            <p><strong>Path:</strong> {path}</p>
            <p><strong>Bio:</strong> {bio}</p>
            <p><strong>Work Experience:</strong> {workExperience}</p>
            <p><strong>Skills:</strong> {skills}</p>
            <p><strong>Education:</strong> {education}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="form-button text-blue-500"
              onClick={() => setStep(3)}
            >
              Previous
            </button>
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SliderForm;
