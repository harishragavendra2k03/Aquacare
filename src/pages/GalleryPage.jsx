import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Gallery from '../components/Gallery';
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-darkNavy flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-darkNavy via-primaryBlue to-aqua text-white py-16 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-aqua text-xs font-bold tracking-wider uppercase border border-white/20 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Project Execution Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Completed Installations & Sites
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl">
              Inspect our high-standard craftsmanship across domestic homes, educational institutes, hotels, and heavy industrial facilities.
            </p>
          </div>
        </div>

        {/* Gallery Component */}
        <Gallery />

        {/* Schedule Visit CTA */}
        <section className="py-16 bg-lightBg border-t border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-darkNavy">Have a Project or Facility in Mind?</h3>
            <p className="mt-2 text-sm text-gray-600">
              We arrange on-site water quality audits and custom engineering layout proposals at zero obligation.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-primaryBlue hover:bg-aqua transition-colors shadow-md"
              >
                Schedule Site Audit
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
