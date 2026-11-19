import { useState } from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const allProductsList = [
  {
    id: 'domestic-ro',
    title: 'Domestic Multi-Stage RO Systems',
    description: 'Advanced multi-stage RO purifiers engineered for homes, delivering sweet, healthy, and mineral-balanced drinking water with certified food-grade contact.',
    features: ['Multi-Stage RO + UV + TDS Control', 'Smart LED Purity Indicators', 'Food-Grade Antibacterial Tank'],
    image: '/images/RO_1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80',
    tag: 'Domestic',
    badge: 'Best Seller',
  },
  {
    id: 'commercial-ro',
    title: 'Commercial High-Flow RO Systems',
    description: 'High-capacity purification units designed for offices, restaurants, schools, and hospitals with continuous clean water demand up to 500 LPH.',
    features: ['50 to 500 LPH Flow Output', 'Low Power & Membrane Life Booster', 'Robust Stainless Steel / FRP Body'],
    image: '/images/Commercial_High-Flow.avif',
    tag: 'Commercial',
    badge: 'Commercial Grade',
  },
  {
    id: 'industrial-ro',
    title: 'Industrial Heavy-Duty RO Plants',
    description: 'Custom engineered reverse osmosis plants built for manufacturing, food processing, pharmaceuticals, boiler feed, and textile units from 500 to 20,000+ LPH.',
    features: ['High-Pressure Multi-Vessel Array', 'PLC / Microprocessor Automation', 'Online TDS, Flow & Pressure Meters'],
    image: '/images/Industry.jpg',
    tag: 'Industrial',
    badge: 'ISO 9001:2015',
  },
  {
    id: 'water-softeners',
    title: 'Automatic Water Softeners',
    description: 'Ion-exchange water softeners that eliminate calcium and magnesium hardness, preventing scale buildup in pipes, boilers, geysers, and appliances.',
    features: ['High-Exchange Resin Media', 'Fully Automatic Multiport Valve', 'Anti-Scaling & Energy Saving'],
    image: '/images/Automatic_Water.avif',
    tag: 'Treatment',
    badge: 'Hardness Removal',
  },
  {
    id: 'alkaline-copper-ro',
    title: 'Alkaline & Copper Infused RO Systems',
    description: 'Premium domestic and commercial purifiers that add vital minerals, balance pH to healthy alkaline levels (7.5 - 8.5), and infuse natural copper immunity benefits.',
    features: ['pH Balanced Alkaline Water', 'Active Copper & Zinc Enrichment', 'ORP Antioxidant Reduction'],
    image: '/images/Alkaline_Copper.avif',
    tag: 'Domestic',
    badge: 'Health Plus',
  },
  {
    id: 'uv-uf-purifiers',
    title: 'UV & UF Micro-Filtration Purifiers',
    description: 'Chemical-free ultraviolet disinfection systems combined with ultra-filtration hollow-fiber membranes to eliminate pathogens while retaining essential natural minerals.',
    features: ['Germicidal High-Intensity UV Chamber', '0.01 Micron Ultrafiltration', 'Zero Water Wastage Operation'],
    image: '/images/UV.jpg',
    tag: 'Commercial',
    badge: 'Zero Wastage',
  },
  {
    id: 'dm-plants',
    title: 'Demineralization (DM) Water Plants',
    description: 'Dual-bed and mixed-bed demineralizers designed for laboratories, power plants, and battery manufacturers requiring ultra-low conductivity pure deionized water.',
    features: ['Cation & Anion Exchanger Column', 'Conductivity < 2 µS/cm', 'Corrosion-Proof Rubber-Lined Vessels'],
    image: '/images/Demineralization_Water_Plants.jpg',
    tag: 'Industrial',
    badge: 'DM Quality',
  },
  {
    id: 'iron-arsenic-filters',
    title: 'Iron & Arsenic Removal Filtration Plants',
    description: 'Specialized media filtration systems designed to eliminate dissolved iron, turbidity, foul odor, and arsenic from deep borewell water sources.',
    features: ['Birm / Manganese Dioxide Media', 'Automatic Backwash Valves', 'Clear Taste & Odor-Free Water'],
    image: '/images/Iron_&_Arsenic.jpg',
    tag: 'Treatment',
    badge: 'Borewell Solution',
  },
  {
    id: 'ro-spare-parts',
    title: 'OEM RO Spare Parts & Consumables',
    description: 'Original certified replacement components including Filmtec/Toray membranes, high-pressure booster pumps, carbon blocks, spun filters, and dosing systems.',
    features: ['100% Genuine Certified Spares', 'Ready Stock for Fast Dispatch', 'Complete Accessories & Fitting Kits'],
    image: '/images/OEM_RO_Spare.jpg',
    tag: 'Spares',
    badge: 'Genuine Parts',
  },
];

export default function ProductCategories({ limit = null, showFilter = true }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const filterTags = ['All', 'Domestic', 'Commercial', 'Industrial', 'Treatment', 'Spares'];

  const displayedProducts = allProductsList
    .filter((p) => selectedTag === 'All' || p.tag === selectedTag)
    .slice(0, limit || allProductsList.length);

  return (
    <section id="products" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aqua/10 text-primaryBlue text-xs font-bold tracking-wider uppercase border border-aqua/20 mb-3">
            <Award className="w-3.5 h-3.5 text-aqua" />
            <span>ISO 9001:2015 Certified Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Our Water Purification Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover reliable, high-efficiency water purification systems designed for homes, businesses, and industrial processes.
          </p>
        </div>

        {/* Filter Pills */}
        {showFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-primaryBlue text-white shadow-sm'
                    : 'bg-lightBg text-gray-700 hover:bg-gray-200/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-aqua/40 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    if (product.fallbackImage) {
                      e.currentTarget.src = product.fallbackImage;
                    }
                  }}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primaryBlue shadow-sm">
                    {product.tag}
                  </span>
                  {product.badge && (
                    <span className="bg-darkNavy/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-aqua shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-darkNavy group-hover:text-primaryBlue transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-600 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-aqua mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-primaryBlue bg-lightBg hover:bg-primaryBlue hover:text-white transition-colors duration-200"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        {limit && (
          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-md shadow-primaryBlue/20"
            >
              <span>Explore All Water Purification Systems ({allProductsList.length} Categories)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
