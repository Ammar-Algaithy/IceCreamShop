export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-cream to-yellow-100">
      <div className="relative container-px mx-auto max-w-7xl py-24 md:py-40 flex flex-col md:flex-row items-center gap-12">
        {/* Left side: text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-semibold max-w-2xl">
            Small-batch ice cream,{" "}
            <span className="text-brand-600">handmade</span> in NYC.
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mt-4 max-w-xl">
            Borough-inspired flavors with local ingredients. New seasonal drops
            every Friday.
          </p>
        </div>

        {/* Right side: tilted image to the left */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}hero-1.png`}
            onError={(e) =>
              ((e.currentTarget as HTMLImageElement).style.display = "none")
            }
            alt="NYC ice cream"
            className="w-full max-w-md rounded-2xl object-cover transform -rotate-12 hover:-rotate-3 transition duration-500"
          />

        </div>
      </div>
    </section>
  );
}
