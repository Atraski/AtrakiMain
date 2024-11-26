
import AOS from "aos";
import "aos/dist/aos.css";

// Import images directly from URLs
const models = [
  { src: "https://www.atraski.com/static/media/Arushi-Sharma-modified.f6ca2a9452297367058b.png", name: "Akanksha Wankhade" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Aman Ashok" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Anjali Bhandari" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Arushi Sharma" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Ashly Nelyndem" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Bhavya Sharma" },
  { src: "https://www.atraski.com/static/media/Anjali-Bhandari-modified.4887a2b1545d4d4e692c.png", name: "Arpitha Rajendra" },
];

AOS.init();

export default function Test() {
  return (
    <div id="our-models" className="container mx-auto my-12 py-12">
      <h1 className="text-center text-4xl font-bold text-white mb-12">Our Models</h1>

      <div className="flex items-center justify-center p-12 space-x-[-80px] overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300">
        {models.map((model, index) => (
          <div
            key={index}
            className="min-w-[250px] min-h-[250px] bg-rose-100 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:z-10 relative cursor-pointer"
          >
            <div className="text-center">
              <img
                className="w-3/4 h-3/4 mx-auto rounded-full mb-4"
                src={model.src}
                alt={`member${index + 1}`}
              />
              <div className="text-lg font-bold mb-2">{model.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
