export interface Workout {
  id: string | number;
  _id?: string | number;
  name: string;
  description: string;
  image: string;
  equipment: string;
  difficulty?: string;
  sets?: number;
  reps?: string | number;
  duration: number | string;
  caloriesBurned: number | string;
  rating: number | string;
  muscleGroups?: string[];
  instructions?: string[];
}