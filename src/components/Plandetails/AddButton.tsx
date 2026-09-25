'use client';
import React, { useContext } from 'react';
import { Plus } from 'lucide-react';
import { PlanContext } from '@/context/PlanContext';

const AddButton = ({ data }: { data: any }) => {
    const context = useContext(PlanContext);

    if (!context) {
        return null;
    }

    const { add, setAdd } = context;

    const handleAddButton = () => {
        // Logic to add the workout to today's plan
        setAdd([...add, data]);
    };

    return (
        <button
            onClick={() => handleAddButton()}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#b3e600] active:scale-95"
        >
            <Plus size={16} strokeWidth={2.5} />
            <span>Add to today's plan</span>
        </button>
    );
};

export default AddButton;