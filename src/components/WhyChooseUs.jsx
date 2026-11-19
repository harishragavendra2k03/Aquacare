import {
  ShieldCheck,
  Award,
  Wrench,
  Clock,
  CheckCircle,
  Users,
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified Quality Management',
    desc: 'Our processes comply with internationally audited quality standards, ensuring genuine food-grade components, pressure safety, and consistent water purity.',
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: 'Complete Water Purification Solutions',
    desc: 'From initial water testing and equipment recommendation to installation, filtration upgrades and routine maintenance, we provide end-to-end water care.',
  },
  {
    icon: Award,
    title: 'Domestic and Industrial Expertise',
    desc: 'Years of dedicated experience handling kitchen RO purifiers as well as multi-thousand LPH industrial reverse osmosis setups.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation & Commissioning',
    desc: 'Every purifier and water plant is installed following strict piping, electrical, and pressure standards for long-lasting leak-free reliability.',
  },
  {
    icon: Clock,
    title: 'Reliable Preventive Maintenance & AMC',
    desc: 'Scheduled service reminders, prompt filter inspections, emergency breakdown assistance, and genuine spare parts availability.',
  },
  {
    icon: Users,
    title: 'Customer-Focused & Transparent Service',
    desc: 'Transparent pricing, no hidden costs, clear TDS measurements, and tailored solutions centered on your exact raw water test results.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-lightBg/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aqua/10 text-primaryBlue text-xs font-bold tracking-wider uppercase border border-aqua/20 mb-3">
            <Award className="w-3.5 h-3.5 text-aqua" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Why Choose Aqua Care Solutions?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Experience trustworthy water engineering built around ISO 9001:2015 certified quality, technical precision, and dedicated customer care.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-br from-white to-lightBg border-primaryBlue/40 shadow-md ring-1 ring-primaryBlue/20'
                    : 'bg-white border-gray-200/80 shadow-sm hover:shadow-md hover:border-primaryBlue/30'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${
                    item.highlight ? 'bg-primaryBlue text-white shadow-sm' : 'bg-primaryBlue/10 text-primaryBlue'
                  }`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-darkNavy mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-5 pt-3 border-t border-primaryBlue/20">
                    <span className="text-[11px] font-bold text-primaryBlue uppercase tracking-wider">
                      ★ Audited & Certified Process
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
