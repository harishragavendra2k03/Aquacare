import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-darkNavy flex flex-col font-sans selection:bg-aqua/20 selection:text-primaryBlue">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Product Categories (with extra products & filter) */}
        <ProductCategories limit={6} />

        {/* 4. About Us Preview (with ISO 9001:2015 highlights) */}
        <AboutPreview />

        {/* 5. Services & Solutions (Domestic & Industrial) */}
        <Services />

        {/* 6. Why Choose Us (ISO 9001:2015 advantage) */}
        <WhyChooseUs />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Contact / Enquiry Form */}
        <ContactSection />

        {/* 10. Interactive Location Map Section */}
        <MapSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
