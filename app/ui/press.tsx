import { fetchOpenGraph } from "@/app/lib/og";
import PressList from "@/app/ui/press-list";

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
    <section className="section-snap h-[100dvh] bg-gray-100 text-black w-full relative">
      <div className="w-full h-full">
        <PressList items={data} />
      </div>

      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-10 md:py-15 px-[5%] z-20">
        <div className="text-white bg-black/40 backdrop-blur-sm w-fit py-2 px-4 rounded-full">
          <h1>Press</h1>
        </div>
      </div>
    </section>
  );
}
