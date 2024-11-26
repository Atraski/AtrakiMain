


const EventsWork = () => {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-xl font-medium">Featured work</h2>

        <div className="mb-32 md:w-3/4 lg:w-2/3">
          <p className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Constructs of reality are about to fade. Being drawn into a vortex
            of infinite creativity. Disrupting the limits of your perception.
            Leaving you forever immersed in the moment. Liberated, excited and
            alive.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2,3,4].map((project) => (
            <div
              key={project}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <div className="absolute left-4 top-4 z-10 rounded-full bg-white px-4 py-1 text-sm text-black">
                Project
              </div>
              <img
                src={`https://a.storyblok.com/f/283181/1920x1279/7c260cbc15/leidensontzet_2024_twofiftyk_1002_bartheemskerk_02.jpg/m/608x608/filters:quality(80)`}
                alt={`Project ${project}`}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsWork;
