'use client';
import { PlanContext } from '@/context/PlanContext';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';

const SaveButton = ({ data }: { data: any }) => {
    const context = useContext(PlanContext);

    if (!context) return null;

    const { plan, setPlan } = context;

    const handleSaveButton = () => {
        // Logic to save the workout for later
        setPlan([...plan, data]);
    };

    return  <button onClick={() => handleSaveButton()} className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#161a23] px-4 py-3 text-xs font-semibold text-gray-300 transition hover:bg-gray-800 active:scale-95"><Bookmark size={16} /><span>Save for later</span></button>
};

export default SaveButton;