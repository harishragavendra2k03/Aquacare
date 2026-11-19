import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Droplets, ArrowRight, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lightBg via-white to-white py-16 lg:py-24 border-b border-gray-100">
      {/* Background Decorative Blur Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-aqua/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primaryBlue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* ISO 9001:2015 & Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primaryBlue text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <Award className="w-4 h-4 text-amber-300" />
                <span>ISO 9001:2015 Certified Company</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-aqua/10 text-primaryBlue text-xs font-semibold tracking-wider uppercase border border-aqua/20">
                <Droplets className="w-3.5 h-3.5 text-aqua" />
                <span>Pure Water Solutions</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-darkNavy tracking-tight leading-[1.15]">
              Pure Water. <br className="hidden sm:inline" />
              Healthy Life. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-aqua">
                Better Solutions.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover reliable domestic and industrial RO water purification systems, backed by certified manufacturing standards, professional installation, maintenance and lifelong support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-primaryBlue hover:bg-aqua transition-all duration-200 shadow-md shadow-primaryBlue/20 hover:shadow-lg hover:shadow-aqua/25"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-darkNavy bg-white border border-gray-200 hover:border-primaryBlue hover:text-primaryBlue transition-all duration-200 shadow-sm"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primaryBlue/10 flex items-center justify-center text-primaryBlue flex-shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkNavy">ISO Certified Quality</h4>
                  <p className="text-[11px] text-gray-500">ISO 9001:2015</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-aqua/10 flex items-center justify-center text-aqua flex-shrink-0">
                  <Wrench className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkNavy">Expert Setup</h4>
                  <p className="text-[11px] text-gray-500">Sales & Installation</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-full bg-primaryBlue/10 flex items-center justify-center text-primaryBlue flex-shrink-0">
                  <Droplets className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkNavy">24/7 AMC Support</h4>
                  <p className="text-[11px] text-gray-500">Prompt Maintenance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-white via-lightBg to-white p-3 shadow-xl border border-gray-100">
                <img
                  src="/images/RO_1.jpg"
                  alt="Aqua Care Solutions RO Water Purification System"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                  onError={(e) => {
                    // Fallback if local image needs fallback
                    e.currentTarget.src = "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                
                {/* Floating overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100/80 flex items-center justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-bold text-primaryBlue bg-primaryBlue/10 px-2 py-0.5 rounded uppercase">
                      ISO 9001:2015 Certified
                    </span>
                    <p className="text-sm font-bold text-darkNavy mt-1">Domestic & Industrial RO Systems</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-primaryBlue to-aqua text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    RO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
