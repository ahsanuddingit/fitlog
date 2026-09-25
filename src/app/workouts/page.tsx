import React from "react";
import WorkoutCard from "@/components/WorkoutCard";
import WorkoutFilters from "@/components/WorkoutFilters";
import { Workout } from "@/types/workout";

// Fetch all workouts on the server
async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store", // Keep data fresh
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
}

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();

  // Extract unique muscle groups for filtering
  const allMuscleGroups = Array.from(
    new Set(workouts.flatMap((w) => w.muscleGroups || []))
  );

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white py-10 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800/80 pb-6">
          <div>
            <p className="text-[#ccff00] text-xs font-bold uppercase tracking-widest mb-1">
              Workout Library
            </p>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              All Lifts & Exercises
            </h1>
            <p className="text-gray-400 mt-2 text-sm max-w-xl">
              Browse the complete collection. Filter by target muscle group or search for specific movements to build today’s session.
            </p>
          </div>

          <div className="text-sm text-gray-400 font-medium bg-[#141820] border border-gray-800 px-4 py-2 rounded-xl w-fit">
            Showing <span className="text-[#ccff00] font-bold">{workouts.length}</span> exercises
          </div>
        </div>

        {/* Client-side Search and Filter Controls */}
        <WorkoutFilters workouts={workouts} muscleGroups={allMuscleGroups} />

      </div>
    </div>
  );
}