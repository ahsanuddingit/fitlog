import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Workout } from '@/types/workout';

const WorkoutCard = ({ data }: { data: Workout }) => {
  const { id, name, duration, image, equipment, rating, caloriesBurned } = data;

  return (
    <Link href={`/${id}`} className="w-full">
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
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-400">{equipment}</p>
            <div className="divider"></div>

          <div className="flex gap-2 mt-2">
            <div className="badge badge-outline">{duration} min</div>
            <div className="badge badge-outline">{rating} ⭐</div>
            <div className="badge badge-outline">{caloriesBurned} kcal</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;