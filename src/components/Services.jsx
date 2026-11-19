import {
  Wrench,
  PenTool,
  Clock,
  Filter,
  Layers,
  FileCheck,
  Home as HomeIcon,
  Factory,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const serviceCards = [
  {
    icon: Wrench,
    title: 'RO Installation',
    desc: 'Expert wall-mounting and pipeline integration for residential purifiers and industrial skid-mounted RO plants.',
  },
  {
    icon: PenTool,
    title: 'RO Repair',
    desc: 'Rapid diagnostic troubleshooting and repair of motor pumps, leakage issues, electrical controls, and low flow rates.',
  },
  {
    icon: Clock,
    title: 'Regular Maintenance',
    desc: 'Scheduled check-ups, sanitized flushing, TDS calibration, and pressure testing to ensure continuous water safety.',
  },
  {
    icon: Filter,
    title: 'Filter Replacement',
    desc: 'Timely change of sediment cartridges, pre-carbon filters, and post-carbon mineralizers using authentic components.',
  },
  {
    icon: Layers,
    title: 'Membrane Replacement',
    desc: 'High-rejection semi-permeable reverse osmosis membrane replacement to restore optimal purity and water output.',
  },
  {
    icon: FileCheck,
    title: 'Annual Maintenance Contract',
    desc: 'Worry-free AMC packages covering periodic visits, free emergency calls, and filter updates for homes and factories.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
            Professional Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Complete RO Sales & Service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From initial product sales and setup to preventive maintenance and AMC coverage, we ensure uninterrupted clean water.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white border border-gray-200/90 hover:border-aqua/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-lightBg group-hover:bg-primaryBlue flex items-center justify-center text-primaryBlue group-hover:text-white transition-colors duration-200 mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-darkNavy group-hover:text-primaryBlue transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-primaryBlue hover:text-aqua transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Domestic & Industrial Solutions Showcase */}
        <div id="solutions" className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primaryBlue bg-primaryBlue/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Tailored Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-darkNavy">
              Domestic & Industrial Water Purification
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Domestic Card */}
            <div className="bg-gradient-to-br from-lightBg to-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primaryBlue/10 text-primaryBlue flex items-center justify-center mb-6">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-darkNavy">Domestic Solutions</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Tailored drinking water systems that ensure every drop consumed by your family is clean, sterile, and beneficial for health.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    'Home water purifiers with advanced RO + UV + UF technology',
                    'Domestic RO systems tailored to municipal and borewell water',
                    'Quick installation and doorstep servicing by trained technicians',
                    'Regular maintenance schedules and genuine filter change alerts',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-aqua mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-sm"
                >
                  <span>Enquire Domestic</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Industrial Card */}
            <div className="bg-gradient-to-br from-lightBg to-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-aqua/10 text-aqua flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-darkNavy">Industrial Solutions</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Engineered large-scale water treatment plants built to provide continuous output for heavy manufacturing, food processing, and institutions.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    'Industrial RO plants custom built from 250 LPH to 10,000+ LPH',
                    'Commercial water treatment for hotels, schools, and hospitals',
                    'Large-scale purification systems with automated backwash controls',
                    'Comprehensive industrial maintenance contracts and emergency support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primaryBlue mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-darkNavy hover:bg-primaryBlue transition-colors duration-200 shadow-sm"
                >
                  <span>Enquire Industrial</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
