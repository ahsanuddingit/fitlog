'use client';
import React, { useContext, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlanContext } from '@/context/PlanContext';
import { toast } from 'react-toastify';

type PlanItem = {
  id?: string | number;
  name?: string;
  duration?: number | string;
  caloriesBurned?: number | string;
  image?: string;
  equipment?: string;
  description?: string;
  rating?: number | string;
};

const MyPlan = () => {
  const planContext = useContext(PlanContext);

  
  const [activeTab, setActiveTab] = useState('today');
  
  const [sortBy, setSortBy] = useState('duration');

  
  const todaysPlanList: PlanItem[] = Array.isArray(planContext?.add) ? (planContext.add as PlanItem[]) : [];
  const savedList: PlanItem[] = Array.isArray(planContext?.plan) ? (planContext.plan as PlanItem[]) : [];

  const currentList: PlanItem[] = activeTab === 'today' ? todaysPlanList : savedList;

  const toNumber = (value: unknown) => Number(value) || 0;

  
  const totalExercises = todaysPlanList.length;
  const totalMinutes = todaysPlanList.reduce((acc, item) => acc + toNumber(item.duration), 0);
  const totalCalories = todaysPlanList.reduce((acc, item) => acc + toNumber(item.caloriesBurned), 0);

  
  const sortedList = useMemo<PlanItem[]>(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === 'duration') return toNumber(b.duration) - toNumber(a.duration);
      if (sortBy === 'calories') return toNumber(b.caloriesBurned) - toNumber(a.caloriesBurned);
      if (sortBy === 'name') return String(a.name ?? '').localeCompare(String(b.name ?? ''));
      return 0;
    });
  }, [currentList, sortBy]);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white py-10 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

  
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight uppercase">My Plan</h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

  
        <div className="grid grid-cols-3 gap-4 bg-[#141820] border border-gray-800/80 p-6 rounded-2xl shadow-lg">
          <div className="border-r border-gray-800 pr-4">
            <p className="text-gray-400 text-xs md:text-sm font-medium">Exercises</p>
            <h2 className="text-3xl md:text-5xl font-black text-lime-400 mt-1">{totalExercises}</h2>
          </div>
          <div className="border-r border-gray-800 px-2 md:px-4">
            <p className="text-gray-400 text-xs md:text-sm font-medium">Minutes</p>
            <h2 className="text-3xl md:text-5xl font-black mt-1">{totalMinutes}</h2>
          </div>
          <div className="pl-2 md:pl-4">
            <p className="text-gray-400 text-xs md:text-sm font-medium">Calories</p>
            <h2 className="text-3xl md:text-5xl font-black mt-1">{totalCalories}</h2>
          </div>
        </div>

  
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  
          <div className="flex bg-[#141820] p-1.5 rounded-xl border border-gray-800 w-fit">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'today'
                  ? 'bg-[#212631] text-white shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'saved'
                  ? 'bg-[#212631] text-white shadow'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Saved
            </button>
          </div>

  
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#141820] text-white border border-gray-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-600 cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

       
        {sortedList.length === 0 ? (
       
          <div className="border border-dashed border-gray-800 rounded-2xl p-16 text-center space-y-4 bg-[#11141a]/50">
            <h3 className="text-2xl font-bold uppercase tracking-wide">Nothing Here Yet</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/workouts"
                className="inline-block bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-lime-400/10"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
       
          <div className="space-y-4">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#141820] border border-gray-800/80 p-4 rounded-2xl gap-4 hover:border-gray-700 transition-all duration-200"
              >
       
                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-xl bg-gray-900">
                    <Image
                      src={item.image || 'https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740'}
                      alt={item.name || 'Workout item'}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold uppercase tracking-wide">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.equipment || item.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-300 pt-1">
                      <span className="flex items-center gap-1">
                        🕒 {item.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        🔥 {item.caloriesBurned} kcal
                      </span>
                      {item.rating && (
                        <span className="flex items-center gap-1 text-gray-400">
                          ⭐ {item.rating}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

       
                <div className="flex items-center justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-800">
                  <Link
                    href={`/${item.id}`}
                    className="px-4 py-2 bg-[#1c222e] hover:bg-[#252d3d] text-gray-200 text-xs font-semibold rounded-xl transition-all border border-gray-700/50"
                  >
                    View Details
                  </Link>

                  {activeTab === 'today' && (
                    <button
                      onClick={() => {
                        if (item.id !== undefined && item.id !== null) {
                          planContext?.removeFromPlan?.(item.id);
                        }

                      }}
                      className="flex items-center gap-1.5 px-4 py-2 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs rounded-xl transition-all shadow-md shadow-lime-400/10"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (item.id !== undefined && item.id !== null) {
                        planContext?.removeItem?.(item.id, activeTab);
                        toast.error(`${item.name || 'Workout'} removed from today's plan!`, {
                          position: 'top-right',
                          autoClose: 3000,
                        });
                      }
                    }}
                    className="p-2 text-gray-500 hover:text-gray-300 transition-colors rounded-lg"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;