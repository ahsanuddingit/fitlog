'use client';

import React, { useContext } from 'react';
import { Plus } from 'lucide-react';
import { PlanContext } from '@/context/PlanContext';
import { Workout } from '@/types/workout';
import { toast } from 'react-toastify';

const AddButton = ({ data }: { data: Workout }) => {
  const context = useContext(PlanContext);

  if (!context) return null;

  return (
    <button
      onClick={() => {context.addToToday(data);
       toast.success(`${data.name || 'Workout'} added to today's plan!`, {
      position: 'top-right',
      autoClose: 3000,
    }) 
      } 
    }
      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#b3e600] active:scale-95"
    > 
      <Plus size={16} strokeWidth={2.5} />
      <span>Add to today's plan</span>
    </button>
  );
};

export default AddButton;