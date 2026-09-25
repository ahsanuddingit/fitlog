'use client';

import React, { useContext } from 'react';
import { Bookmark } from 'lucide-react';
import { PlanContext } from '@/context/PlanContext';
import { Workout } from '@/types/workout';
import { toast } from 'react-toastify';

const SaveButton = ({ data }: { data: Workout }) => {
  const context = useContext(PlanContext);

  if (!context) return null;

  return (
    <button
      onClick={() => {context.saveForLater(data);
        toast.success(`${data.name || 'Workout'} added to today's plan!`, {
              position: 'top-right',
              autoClose: 3000,
            })
      }}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#161a23] px-4 py-3 text-xs font-semibold text-gray-300 transition hover:bg-gray-800 active:scale-95"
    >
      <Bookmark size={16} />
      <span>Save for later</span>
    </button>
  );
};

export default SaveButton;