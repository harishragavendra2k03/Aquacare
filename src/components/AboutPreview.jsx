import { CheckCircle, Shield, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  const highlights = [
    {
      title: 'ISO 9001:2015 Certified Quality',
      desc: 'Standardized operational quality, strict component validation, and audited water purity protocols.',
    },
    {
      title: 'Domestic & Commercial Solutions',
      desc: 'Customized domestic RO and commercial purifiers designed to guarantee safe, healthy, and crystal-clear drinking water.',
    },
    {
      title: 'Industrial Heavy Plant Expertise',
      desc: 'Robust commercial plants and high-capacity industrial RO systems configured to meet strict industry water purity standards.',
    },
    {
      title: 'Preventive Maintenance & Lifetime AMC',
      desc: 'Scheduled preventive servicing, filter replacements, and rapid breakdown response to protect your investment.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-lightBg/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with ISO 9001:2015 Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
                alt="Aqua Care Solutions Team and Systems"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-aqua text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  ISO 9001:2015 Certified
                </span>
                <p className="text-lg font-bold">Standardized Engineering & Reliable Service Support</p>
              </div>
            </div>

            {/* Floating Quality Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white p-4.5 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primaryBlue to-aqua flex items-center justify-center text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-semibold uppercase">Certified Standard</p>
                <p className="text-sm font-bold text-darkNavy">ISO 9001:2015 Company</p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aqua/10 text-primaryBlue text-xs font-bold tracking-wider uppercase border border-aqua/20 mb-3">
                <Award className="w-3.5 h-3.5 text-aqua" />
                <span>About Aqua Care Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight leading-tight">
                Your Trusted Water Purification Partner
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Aqua Care Solutions is an <strong>ISO 9001:2015 Certified Company</strong> providing comprehensive water purification solutions for domestic, commercial and industrial requirements. We specialize in RO system sales, professional installation, repair and lifetime maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-xl border border-gray-100 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-primaryBlue">
                    <CheckCircle className="w-4 h-4 text-aqua flex-shrink-0" />
                    <h4 className="font-bold text-darkNavy text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-sm"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-darkNavy bg-white border border-gray-200 hover:border-primaryBlue hover:text-primaryBlue transition-colors duration-200"
              >
                <span>Consult Our Water Engineer</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
