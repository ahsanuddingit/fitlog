import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Workout } from '@/types/workout';

const WorkoutCard = ({ data }: { data: Workout }) => {
  const { id, name, duration, image, equipment, rating, caloriesBurned, muscleGroups } = data;

  return (
    <Link href={`/${id}`} className="w-full ">
      <div className="card bg-base-100 shadow-sm container mx-auto my-4 hover:border-gray-700 transition">
        <figure className="relative h-54 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>

        <div className="card-body">
          <div className="flex flex-wrap gap-2 mb-2">
            {muscleGroups?.map((group, index) => (
              <span 
                key={index} 
                className="bg-[#ccff00] text-black font-extrabold uppercase text-xs px-3 py-1 rounded-full tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          <h2 className="card-title font-bold text-xl uppercase">{name}</h2>
          <p className="text-sm text-gray-400">{equipment}</p>

          <div className="divider my-2"></div>

          <div className="flex items-center justify-between text-sm text-gray-300 mt-2">
            <span>⏱ {duration} min</span>
            <span>🔥 {caloriesBurned} kcal</span>
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;