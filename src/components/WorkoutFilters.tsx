'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import WorkoutCard from '@/components/WorkoutCard';
import { Workout } from '@/types/workout';

interface WorkoutFiltersProps {
  workouts: Workout[];
  muscleGroups: string[];
}

export default function WorkoutFilters({ workouts, muscleGroups }: WorkoutFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState<string>('All');

  // Filter logic
  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesSearch =
        workout.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workout.equipment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workout.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMuscle =
        selectedMuscle === 'All' ||
        workout.muscleGroups?.includes(selectedMuscle);

      return matchesSearch && matchesMuscle;
    });
  }, [workouts, searchQuery, selectedMuscle]);

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-[#141820] p-4 rounded-2xl border border-gray-800">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search exercise, equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0d0f12] text-white text-sm pl-10 pr-10 py-2.5 rounded-xl border border-gray-800 outline-none focus:border-[#ccff00] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills / Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-gray-400 shrink-0 hidden sm:block ml-2" />
          <button
            onClick={() => setSelectedMuscle('All')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              selectedMuscle === 'All'
                ? 'bg-[#ccff00] text-black'
                : 'bg-[#1c222e] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            All Muscles
          </button>
          {muscleGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedMuscle(group)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedMuscle === group
                  ? 'bg-[#ccff00] text-black'
                  : 'bg-[#1c222e] text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Workout Cards */}
      {filteredWorkouts.length === 0 ? (
        <div className="border border-dashed border-gray-800 rounded-2xl p-12 text-center bg-[#141820]/40">
          <h3 className="text-xl font-bold uppercase text-gray-300">No workouts found</h3>
          <p className="text-gray-500 text-sm mt-1">
            Try adjusting your search terms or filter selection.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedMuscle('All');
            }}
            className="mt-4 px-4 py-2 bg-[#1c222e] text-xs text-gray-300 font-bold rounded-xl border border-gray-700 hover:bg-gray-800 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} data={workout} />
          ))}
        </div>
      )}
    </div>
  );
}