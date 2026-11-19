import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AboutPreview from '../components/AboutPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import { Award, ShieldCheck, CheckCircle2, Droplets, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-darkNavy flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-darkNavy via-primaryBlue to-aqua text-white py-16 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-aqua text-xs font-bold tracking-wider uppercase border border-white/20 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About Aqua Care Solutions
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl">
              Dedicated to delivering pure, safe, and mineral-balanced drinking water systems for residential homes, corporate facilities, and heavy industrial plants.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lightBg p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primaryBlue text-white flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-darkNavy mb-3">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide accessible, high-purity water filtration technology with zero compromise on quality. We engineer solutions that treat borewell, municipal, and industrial wastewater, ensuring health and operational continuity.
                </p>
              </div>

              <div className="bg-lightBg p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-aqua text-white flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-darkNavy mb-3">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the region's most reputable water purification partner, recognized for adherence to ISO 9001:2015 standards, transparent customer relations, and comprehensive lifetime maintenance services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <AboutPreview />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-tr from-primaryBlue to-aqua text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold">Need Custom Water Analysis or Consultation?</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-xl mx-auto">
              Our certified water engineers will test your water TDS, hardness, and contaminants to recommend the optimal solution.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-darkNavy bg-white hover:bg-lightBg transition-colors shadow-lg"
              >
                Get In Touch With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
