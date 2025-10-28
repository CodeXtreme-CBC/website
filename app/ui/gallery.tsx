export default function Gallery() {
  return (
    <section className="section-snap relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900">
      <div className="text-center px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-15 px-[5%] z-20">
        <h1>Gallery</h1>
      </div>
    </section>
  );
}
