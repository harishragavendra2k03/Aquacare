import { useState } from 'react';
import { Eye, Layers } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Industrial RO Plant Installation',
    category: 'Industrial',
    image: '/images/Ro_install.jpg',
    desc: 'Turnkey 2000 LPH multi-skid RO assembly for manufacturing unit.',
  },
  {
    id: 2,
    title: 'Domestic Purifier Setup',
    category: 'Domestic',
    image: '/images/Domestic_Purifier_Setup.jpg',
    desc: 'Neat wall-mount under-sink residential RO purifier installation.',
  },
  {
    id: 3,
    title: 'Commercial Water Softener & RO',
    category: 'Commercial',
    image: '/images/Commercial_High-Flow.avif',
    desc: 'High-flow purification system installed for a corporate cafeteria.',
  },
  {
    id: 4,
    title: 'Preventive Servicing & Membrane Swap',
    category: 'Maintenance',
    image: '/images/Preventive_Servicing_Membrane_Swap.avif',
    desc: 'Scheduled diagnostic audit and membrane upgrade on commercial skid.',
  },
  {
    id: 5,
    title: 'Heavy Industry Water Treatment Plant',
    category: 'Industrial',
    image: '/images/Heavy_Industry.jpg',
    desc: 'Custom multi-media filtration and high-pressure reverse osmosis line.',
  },
  {
    id: 6,
    title: 'Pure Drinking Water Station',
    category: 'Commercial',
    image: '/images/Pure_Drinking_Water_Station.jpg',
    desc: 'Stainless steel centralized drinking water dispenser with dual chillers.',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Domestic', 'Commercial', 'Industrial', 'Maintenance'];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
            Work Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Our Recent Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Take a look at our completed water purification installations across residential apartments, institutions, and industrial sites.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primaryBlue text-white shadow-sm'
                  : 'bg-lightBg text-gray-700 hover:bg-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Info Overlay */}
              <div className="p-5 bg-white border-t border-gray-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-aqua">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-darkNavy group-hover:text-primaryBlue transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-sm"
          >
            <span>View Full Gallery / Request Project Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
