import React from 'react'
import Image from 'next/image'
import Banner from '../app/assets/banner.png'
import { Link } from 'lucide-react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={Banner}
                        alt="Banner"
                        width={500}
                        height={300}
                        className="max-w-sm rounded-lg"
                    />
                    <div>
                        <p className="text-[#C2F800] my-5 font-semibold">WORKOUT LIBRARY</p>
                        <h1 className="text-5xl font-bold ">TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h1>
                        <p className="py-6 text-gray-400">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                            into today's plan, and watch the week's work add up.
                        </p>
                        <button className="bg-[#C2F800] text-black hover:bg-[#a8d500] font-bold py-2 px-4 rounded">
                            BROWSE WORKOUTS
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;