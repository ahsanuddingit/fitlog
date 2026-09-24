import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const datas = await res.json();
  

  return (
    <>
      <Hero />
        <div className="container mx-auto my-8">
          <h1 className="text-2xl font-bold">THE LIBRARY</h1>
          <p className="text-lg text-gray-600">Twelve lifts covering every major muscle group.</p>
        </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {
          datas.map((data) => (
            <WorkoutCard key={data.id} data={data} />
          ))
        }
      </div>
    </>
  );
}
