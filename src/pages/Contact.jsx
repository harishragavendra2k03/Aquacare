import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import { Award, HelpCircle } from 'lucide-react';

export default function Contact() {
  const faqs = [
    {
      q: 'How fast can a technician visit for domestic RO installation or repair?',
      a: 'We provide prompt same-day or next-day scheduled appointments across our service territory. Urgent breakdown calls under AMC are given priority.',
    },
    {
      q: 'Do you provide water quality testing before recommending an RO plant?',
      a: 'Yes, our certified water specialists measure your water TDS, pH, hardness, and turbidity to recommend the exact micron filtration stages needed.',
    },
    {
      q: 'What is covered under the Annual Maintenance Contract (AMC)?',
      a: 'Our AMC packages include scheduled preventive visits, periodic replacement of sediment/carbon filters, sanitization, TDS adjustment, and free emergency service visits.',
    },
    {
      q: 'Is Aqua Care Solutions an ISO certified company?',
      a: 'Yes, Aqua Care Solutions is an ISO 9001:2015 Certified Company following audited quality management standards for purification equipment sales, installation, and servicing.',
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
              <span>Direct Customer Assistance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Aqua Care Solutions
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl">
              Get in touch for purifier sales, water testing audits, emergency repair calls, or industrial RO plant quotations.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Location Map Section */}
        <MapSection />

        {/* Quick FAQ Section */}
        <section className="py-20 bg-lightBg/60 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-darkNavy">
                Quick Answers to Common Queries
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-darkNavy flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-primaryBlue flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-gray-600 pl-7 leading-relaxed">
                    {faq.a}
                  </p>
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
