"use client";
import Link from "next/link";

function Career() {

  return (
    <div className="py-20">
      <div className="w-4/6 mx-auto">
        <div className="mb-10 bg-[#16213b] p-10 rounded-2xl shadow-xl">
          <h1 className="font-bold uppercase text-2xl mb-6">Personalized Career Guidance</h1>
          <p className="w-5/6 mb-6">Eleka's AI-driven personalized career guidance system is designed to help you define clear career goals, create actionable roadmaps, and develop strategies for success. By analyzing your strengths, skills, aspirations, and passions, our AI provides tailored guidance to ensure your personal and professional growth.</p>
          <Link href="/from" className="border border-[#7C72FF] py-2 px-12 text-xl rounded-full text-white">Start Now</Link>
        </div>

        <div className="mb-10 bg-[#16213b] p-10 rounded-2xl shadow-xl">
          <h1 className="font-bold uppercase text-2xl mb-6">Personalized Career transition</h1>
          <p className="w-5/6 mb-6">Eleka's AI-driven career transition system helps you pivot from one career path to another by analyzing your existing strengths, skills, and experiences. Whether you're shifting from education to tech or from accounting to design, etc., our AI will generate a customized roadmap to guide your journey.</p>
          <Link href="/form" className="border border-[#7C72FF] py-2 px-12 text-xl rounded-full text-white">Start Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Career;
