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