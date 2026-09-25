import Image from "next/image";
import { notFound } from "next/navigation";
import { Plus, Bookmark } from "lucide-react";

interface WorkoutData {
  id: string;
  name: string;
  description: string;
  image: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: number;
  duration: number;
  caloriesBurned: number;
  rating: number;
  muscleGroups?: string[];
  instructions?: string[];
}

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data: WorkoutData = await res.json();

  const handleAddToPlan = () => {
    // Logic to add the workout to today's plan
    console.log(`Workout ${data.name} added to today's plan.`);
  }

  const details = [
    { label: "EQUIPMENT", value: data.equipment },
    { label: "DIFFICULTY", value: data.difficulty },
    { label: "SETS", value: data.sets },
    { label: "REPS", value: data.reps },
    { label: "DURATION", value: `${data.duration} min` },
    { label: "CALORIES", value: `${data.caloriesBurned} kcal` },
    { label: "RATING", value: data.rating },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090b0e] p-4 font-sans">
      <div className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-[#0e1117] p-6 text-gray-200 shadow-2xl md:flex-row">
        {/* Left Column: Image */}
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-2xl md:w-1/2">
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex w-full flex-col justify-between md:w-1/2">
          <div>
            {/* Title & Description */}
            <h1 className="text-2xl font-black tracking-wider text-white uppercase">
              {data.name}
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">
              {data.description}
            </p>

            {/* Muscle Groups / Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {data.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Details Table */}
            <div className="mt-4 flex flex-col gap-2 rounded-xl bg-[#161a23] p-4 text-xs text-gray-400">
              {details.map((detail, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
                    {detail.label}
                  </span>
                  <span className="font-medium text-gray-300">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            {data.instructions && data.instructions.length > 0 && (
              <div className="mt-5">
                <h2 className="text-xs font-bold tracking-wider text-white uppercase">
                  Instructions
                </h2>
                <ol className="mt-2 flex flex-col gap-1.5 text-xs text-gray-400">
                  {data.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-2 leading-tight">
                      <span className="select-none text-gray-500">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#b3e600] active:scale-95">
              <Plus size={16} strokeWidth={2.5} />
              <span>Add to today's plan</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#161a23] px-4 py-3 text-xs font-semibold text-gray-300 transition hover:bg-gray-800 active:scale-95">
              <Bookmark size={16} />
              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}