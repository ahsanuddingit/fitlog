import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

type WorkoutCardData = {
  id: string;
  name: string;
  description: string;
  image: string;
  equipment: string;
  duration: string;
  rating: number;
  caloriesBurned: number;
};

const WorkoutCard = ({ data }: { data: WorkoutCardData }) => {
  const { id, name, duration, image , equipment,rating,caloriesBurned} = data;

  return (
    <Link href={`/${id}`} className="w-full">
      <div className="card bg-base-100  shadow-sm container mx-auto my-4">
        <figure>
          <Image src={image} alt={name} width={384} height={216} className="h-54 w-full object-cover" unoptimized />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{equipment}</p>
          <div>
            <div className="badge badge-outline">{duration}</div>
            <div className="badge badge-outline">{rating}⭐</div>
            <div className="badge badge-outline">{caloriesBurned} kcal</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;