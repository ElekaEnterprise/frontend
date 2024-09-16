
import { FaUserCheck } from "react-icons/fa6";
import { FaSitemap } from "react-icons/fa";
import { PiPathFill } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";

export default function Steps() {
    return (
        <div className="relative ml-0 lg:ml-28 mt-10 lg:mt-20">
            <div className="w-[2px] lg:hidden block h-[80vh] top-6 left-20 bg-[#233a68] absolute z-10"></div>

            <div className="flex flex-col md:flex-row relative items-center">
                <div className="bg-[#121c32] p-6 rounded-xl relative z-20 shadow-2xl w-[100%] lg:w-[48%]">
                    <FaUserCheck className="text-4xl mb-2" />
                    <h1 className="text-[#fff] font-bold mb-2">Sign Up & Create Your Profile:</h1>
                    <p>Start by sharing your current occupation, skills, and aspirations.</p>
                </div>
                <div className="bg-[#203e90] h-[6px] w-[4%]"></div>
                <div className="bg-[#121c32] p-6 rounded-xl relative z-20 shadow-2xl w-[100%] lg:w-[48%]">
                    <PiPathFill className="text-4xl mb-2" />
                    <h1 className="text-[#fff] font-bold mb-2">Choose Your Path:</h1>
                    <p>Select whether you need career guidance or are planning a transition.</p>
                </div>

                <div className="w-[10rem] h-[10rem] border-r-[#203e90] border-y-[#203e90] border-l-0 absolute right-[-5rem] bottom-[-5rem] border-[6px] rounded-[50%] "></div>

            </div>


            <div className="flex flex-col lg:flex-row mt-4 relative items-center">
                <div className="bg-[#121c32] p-6 rounded-xl relative z-20 shadow-2xl w-[100%] lg:w-[48%]">
                    <MdSupportAgent className="text-4xl mb-2" />
                    <h1 className="text-[#fff] font-bold mb-2">Continuous Guidance & Support:</h1>
                    <p>Stay on track with regular updates and feedback.</p>
                </div>
                <div className="bg-[#203e90] h-[6px] w-[4%]"></div>
                <div className="bg-[#121c32] p-6 rounded-xl relative z-20 shadow-2xl w-[100%] lg:w-[48%]">
                    <FaSitemap className="text-4xl mb-2" />
                    <h1 className="text-[#fff] font-bold mb-2">Get Your Personalized Roadmap:</h1>
                    <p>Receive a detailed plan aligned with your goals.</p>
                </div>

                <div className="w-[10rem] h-[10rem] border-l-[#203e90] border-y-[#203e90] border-r-0 absolute left-[-5rem] bottom-[-5rem] border-[6px] rounded-[50%] "></div>
            </div>

            <div className="bg-[#121c32] p-6 rounded-xl relative z-20 shadow-2xl w-[100%] lg:w-[48%] mt-4">
                <GrAchievement className="text-4xl text-[#3FB950] mb-2" />
                <h1 className="text-[#fff] font-bold mb-2">Achieve Your Goals:</h1>
                <p>Reach your career milestones or transition into your new role with confidence.</p>
            </div>
        </div>
    );
}