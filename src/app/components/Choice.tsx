'use client';

import {Box} from "@mui/material";
import {signIn} from "next-auth/react";
import ProTip from "@/app/components/ProTip";
import MentorIcon from "@/app/icons/icons-coach.svg";
import MenteeIcon from "@/app/icons/icons-player.svg";
import Image from "next/image";
import Link from "next/link";


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
            <section className="bg-white dark:bg-gray-200">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div
                        className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a href="#"
                           className="bg-blue-100 text-className800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            New
                        </a>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-thin mb-2">
                            Turo Mentorship Program
                        </h1>
                        <p className="text-lg font-thin text-gray-500 dark:text-white mb-6">Are you ready to take your career to new heights? Our internal mentorship program is designed to empower and elevate our employees' growth. Connect with seasoned professionals, gain personalized insights, and unleash your full potential as you embark on a transformative journey within our supportive community. Whether you are a Mentor sharing your wisdom or a Mentee seeking guidance, together, we will shape a brighter future for your career and our company. Join us now and pave the way to success through mentorship!</p>
                        <a href="/faqs"
                           className="inline-flex justiclassNamenter items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" className-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <div
                                className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                                        <Link href="/learnmorementors"
                                              className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <div
                                className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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


                                        <Link href="/learnmorementees"
                                              className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-20">
                <ProTip/>
            </div>
        </Box>
    )
}