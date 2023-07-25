'use client';

import {Box} from "@mui/material";
import {signIn} from "next-auth/react";
import ProTip from "@/app/components/ProTip";
import MentorIcon from "@/app/icons/icons-coach.svg";
import MenteeIcon from "@/app/icons/icons-player.svg";
import Image from "next/image";


export default function Choice() {
    return (
        <Box
            sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="grid grid-cols-2 gap-10">
                <div
                    className="max-w-sm m-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/*<a href="#">*/}
                    {/*    <img className="rounded-t-lg max-h-50" src="https://source.unsplash.com/random?wallpapers"*/}
                    {/*         alt=""/>*/}
                    {/*</a>*/}
                    <a href="#" className="rounded-t-lg max-h-50 justify-center">
                        <Image className="turo-logo mx-auto" src={MentorIcon} alt="Mentor Logo"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">I want
                                to be a Mentor</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Become a Mentor and share your
                            knowledge and expertise with aspiring individuals. Make a lasting impact by guiding and
                            inspiring others on their professional journey.</p>
                        <div className="max-w grid grid-cols-2 gap-5">
                            <button type="button"
                                    onClick={() => signIn('google')}
                                    className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                                Sign Up
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>

                            <a href="/learnmorementors"
                               className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-sm m-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/*<a href="#">*/}
                    {/*    <img className="rounded-t-lg max-h-50" src="https://source.unsplash.com/random?wallpapers"*/}
                    {/*         alt=""/>*/}
                    {/*</a>*/}
                    <a href="#" className="rounded-t-lg max-h-50 justify-center">
                        <Image className="turo-logo mx-auto" src={MenteeIcon} alt="Turo Logo"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">I want
                                to be a Mentee</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join as a Mentee to access valuable insights and guidance from experienced mentors. Accelerate your growth by learning from those who have been there before.</p>
                        <div className="max-w grid grid-cols-2 gap-5">
                            <button type="button"
                                    onClick={() => signIn('google')}
                                    className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                                Sign Up
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>


                            <a href="/learnmorementees"
                               className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <ProTip/>
            </div>
        </Box>
    )
}