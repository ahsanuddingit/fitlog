import React from 'react';

const Myplan = () => {
    

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
                    <div className="tab-content bg-base-100 border-base-300 p-6">Today’s Plan</div>
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">Saved</div>
                </div>
            </div>
        </div>
    );
};

export default Myplan;