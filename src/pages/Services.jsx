import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Services from '../components/Services';
import { Award, Clock, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const amcPlans = [
    {
      name: 'Essential Domestic AMC',
      target: 'Home Purifiers & RO Systems',
      price: 'Affordable Annual Coverage',
      features: [
        '3 Scheduled Preventive Maintenance Visits',
        'Pre-Filter & Carbon Filter Replacement Included',
        'Free Emergency Breakdown Attendance',
        'TDS, Hardness & Pressure Calibration',
      ],
      popular: false,
    },
    {
      name: 'Comprehensive Total AMC',
      target: 'Home & Small Office RO Units',
      price: 'All-Inclusive Protection',
      features: [
        '4 Scheduled Preventive Maintenance Visits',
        'Complete Filter & RO Membrane Swaps Included',
        'Booster Pump & Electrical Parts Covered',
        'Priority Same-Day Technical Visit',
      ],
      popular: true,
    },
    {
      name: 'Industrial & Commercial AMC',
      target: 'Commercial & High LPH Plants',
      price: 'Custom SLA & Continuous Uptime',
      features: [
        'Monthly On-Site Diagnostic Audits',
        'Chemical Cleaning (CIP) for RO Membranes',
        'Vessel Media & Antiscalant Top-up',
        '24/7 Dedicated Support Hotline',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-darkNavy flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-darkNavy via-primaryBlue to-aqua text-white py-16 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-aqua text-xs font-bold tracking-wider uppercase border border-white/20 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Installation & Maintenance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              RO Sales, Services & Annual AMC
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl">
              From initial installation and genuine spare swaps to 24/7 industrial maintenance contracts, we guarantee reliable pure water.
            </p>
          </div>
        </div>

        {/* Core Services Component */}
        <Services />

        {/* AMC Packages Section */}
        <section className="py-20 bg-lightBg/70 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
                Annual Care Plans
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
                Annual Maintenance Contracts (AMC)
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Protect your water purifier with our verified preventive maintenance packages. No surprise repair bills, only pure water.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amcPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-8 border flex flex-col justify-between shadow-sm hover:shadow-lg transition-all ${
                    plan.popular
                      ? 'border-primaryBlue ring-2 ring-primaryBlue/20 shadow-md'
                      : 'border-gray-200'
                  }`}
                >
                  <div>
                    {plan.popular && (
                      <span className="inline-block px-3 py-1 rounded-full bg-primaryBlue text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                        Most Popular Choice
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-darkNavy">{plan.name}</h3>
                    <p className="text-xs text-aqua font-semibold mt-1">{plan.target}</p>
                    <p className="text-sm font-bold text-primaryBlue mt-3">{plan.price}</p>

                    <ul className="mt-6 space-y-3 pt-4 border-t border-gray-100">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start text-xs text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-aqua mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-primaryBlue text-white hover:bg-aqua shadow-sm'
                          : 'bg-lightBg text-darkNavy hover:bg-primaryBlue hover:text-white'
                      }`}
                    >
                      Enquire For AMC
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
