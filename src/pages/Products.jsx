import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCategories from '../components/ProductCategories';
import { Award, ShieldCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-darkNavy flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-darkNavy via-primaryBlue to-aqua text-white py-16 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-aqua text-xs font-bold tracking-wider uppercase border border-white/20 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Products Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Water Purification Systems & Plants
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl">
              Browse our complete range of domestic RO purifiers, commercial plants, water softeners, UV units, and certified replacement consumables.
            </p>
          </div>
        </div>

        {/* Full Products Section */}
        <ProductCategories showFilter={true} />

        {/* Custom Sizing Banner */}
        <section className="py-16 bg-lightBg border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-aqua">Industrial Customization</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-darkNavy">
                  Need a Custom Capacity RO Plant or DM Setup?
                </h3>
                <p className="text-sm text-gray-600 max-w-2xl">
                  We build custom industrial plants from 250 LPH to 50,000+ LPH tailored to your raw water test report and chemical parameters.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-primaryBlue hover:bg-aqua transition-colors shadow-md shadow-primaryBlue/20"
                >
                  Request Technical Quotation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
