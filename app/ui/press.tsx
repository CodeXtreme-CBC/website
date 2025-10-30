import { fetchOpenGraph } from "@/app/lib/og";
import PressCard from "@/app/ui/press-card";

const PRESS_ITEMS = [
  "https://www.newtimes.co.rw/article/24579/news/featured/featured-codextreme-hackathon-ends-with-tight-contest-winners-take-home-5000",
  "https://www.newtimes.co.rw/article/24413/news/featured/featured-codextreme-hackathon-kicks-off-250-young-tech-enthusiasts-tackle-community-challenges",
];

export default async function Press() {
  // Fetch all press metadata in parallel. Cache-revalidated by fetchOpenGraph.
  const data = await Promise.all(
    PRESS_ITEMS.map((url) => fetchOpenGraph(url, 60 * 60 * 24)) // revalidate daily
  );

  return (
    <section className="section-snap h-screen flex items-center justify-center bg-gray-100 text-black w-full py-30">
      <div className="px-[5%] w-full">
        <div
          className="grid w-full h-full gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "stretch",
          }}
        >
          {data.map((d) => (
            <PressCard key={d.url} data={d} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-16 px-[5%] z-20">
        <h1>Press</h1>
      </div>
    </section>
  );
}
