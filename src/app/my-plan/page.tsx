'use client'
import { PlanContext } from '@/context/PlanContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const Myplan = () => {
    const planContext = useContext(PlanContext);
    const planItems = Array.isArray(planContext?.add) ? planContext.add : [];
    const planItem = planItems[0];
    const imageSrc = typeof planItem?.image === 'string' ? planItem.image : '/placeholder.png';
    const planTitle = typeof planItem?.title === 'string' ? planItem.title : 'Workout Plan';

    return (
        <div className='container mx-auto '>
            <div className='my-10'>
                <h1 className='text-3xl font-bold  mt-10'>MY PLAN</h1>
                <p className=' text-gray-400 mt-2'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='grid grid-cols-1 text-center md:grid-cols-3 gap-4 bg-[#232732] p-4 rounded-xl py-5 px-10'>
                <div>
                    <p className='text-gray-400'>Exercise</p>
                    <h1 className='text-4xl font-bold '> 1</h1>
                </div>
                <div>
                    <p className='text-gray-400'>Minutes</p>
                    <h1 className='text-4xl font-bold'> 2</h1>
                </div>
                <div>
                    <p className='text-gray-400'>calories</p>
                    <h1 className='text-4xl font-bold'> 3</h1>
                </div>
            </div>
            <div className='mt-10'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift tabs-boxed">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Today’s Plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col-1 gap-4'>
                            <div className=' w-20 flex gap-2'>
                                <Image
                                    src={imageSrc}
                                    alt="Today's workout plan"
                                    width={800}
                                    height={500}
                                    className="rounded-xl w-full object-cover"
                                />
                                <div>
                                    <h1 className='font-bold text-2xl'>{planTitle}</h1>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        </div>
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">Saved</div>
                </div>
            </div>
        </div>
    );
};

export default Myplan;