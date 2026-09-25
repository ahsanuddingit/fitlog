import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";

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

async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch workouts: ${res.status}`);
    }

    const json = await res.json();

    if (Array.isArray(json)) {
      return json;
    } else if (json && Array.isArray(json.data)) {
      return json.data;
    } else if (json && Array.isArray(json.fitlog)) {
      return json.fitlog;
    }

    return [];
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
}

export default async function Home() {
  const datas = await getWorkouts();

  return (
    <>
      <Hero />
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold">THE LIBRARY</h1>
        <p className="text-lg text-gray-600">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {datas.length > 0 ? (
          datas.map((data, index) => (
            <WorkoutCard
              key={data.id ?? data._id ?? index}
              data={data}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No workout data available.
          </p>
        )}
      </div>
    </>
  );
}