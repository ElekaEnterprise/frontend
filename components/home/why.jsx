import { FaRobot } from "react-icons/fa6";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdSelfImprovement } from "react-icons/md";
import { Avatar } from "@material-tailwind/react";

export default function Why() {
    return (
        <div className="relative my-20 ml-[-2rem]">

            <div className="flex flex-col lg:flex-row gap-4">

                <div className="bg-gradient02 p-6 rounded-xl relative z-20 w-[100%] lg:w-[48%] mt-4">
                    <FaRobot className="text-4xl text-[#3FB950] mb-2" />
                    <h1 className="text-[#fff] font-extrabold text-2xl mb-4">AI-Driven Insights</h1>
                    <p>Harness the power of AI to guide your career decisions.</p>
                </div>

                <div className="bg-gradient02 p-6 rounded-xl relative z-20 w-[100%] lg:w-[48%] mt-4">
                    <MdOutlineSettingsSuggest className="text-4xl text-[#3FB950] mb-2" />
                    <h1 className="text-[#fff] font-extrabold text-2xl mb-4">Tailored to You</h1>
                    <p>Everything we offer is personalized to your unique strengths and goals.</p>
                </div>

                <div className="bg-gradient02 p-6 rounded-xl relative z-20 w-[100%] lg:w-[48%] mt-4">
                    <MdSelfImprovement className="text-4xl text-[#3FB950] mb-2" />
                    <h1 className="text-[#fff] font-extrabold text-2xl mb-4">Proven Success</h1>
                    <p>Join a growing community of professionals who have achieved their career aspirations with Eleka.</p>
                </div>

            </div>

            <div className="my-12 flex-col md:flex-row lg:my-20 flex items-center gap-3 lg:gap-5">
                <div className="flex gap-2">
                <h1 className='text-[#fff] text-sm lg:text-xl rounded-lg bg-[#7C72FF] py-2 lg:py-1  px-[8px] lg:px-6'>
                    Start Your Journey Today
                </h1>
                <h1 className='text-[#1b1b1b] text-sm lg:text-xl rounded-lg bg-[#ececec] py-2 lg:py-1 px-[8px] lg:px-6'>
                    Learn More
                </h1>

                </div>
               
                <div className="flex items-center -space-x-3 ml-4 lg:ml-10">
                    <Avatar
                        variant="circular"
                        alt="user 1"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Avatar
                        variant="circular"
                        alt="user 2"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    />
                    <Avatar
                        variant="circular"
                        alt="user 3"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                    />
                    <Avatar
                        variant="circular"
                        alt="user 4"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    />
                    <Avatar
                        variant="circular"
                        alt="user 5"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                    />
                </div>
            </div>
        </div>
    );
}