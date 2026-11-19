import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, UserCheck } from 'lucide-react';

export default function MapSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Aqua%20Care%20Solutions%2C%20No%3A15%2C%203rd%20Cross%20St%2C%20Gandhi%20Nagar%2C%20Nandhivaram%2C%20Nandivaram-Guduvancheri%2C%20Tamil%20Nadu%20603202";

  return (
    <section id="location" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
            Our Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Visit Our Service & Experience Center
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Drop by our Guduvancheri office and workshop for live purifier demonstrations, water quality testing, and expert technical consultations.
          </p>
        </div>

        {/* Map Container & Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Display (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 relative min-h-[400px] lg:min-h-[480px] bg-gray-100">
            <iframe
              title="Aqua Care Solutions Nandivaram Guduvancheri Location Map"
              src="https://maps.google.com/maps?q=12.8465,80.0638+(Aqua%20Care%20Solutions%20Guduvancheri)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Location Info Card (4 Cols) */}
          <div className="lg:col-span-4 bg-lightBg/80 p-8 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-aqua uppercase tracking-wider">
                  Office & Service Center
                </span>
                <h3 className="text-xl font-bold text-darkNavy mt-1">
                  Aqua Care Solutions
                </h3>
                <p className="text-xs text-primaryBlue font-semibold mt-0.5">
                  ISO 9001:2015 Certified Water Purification Company
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white text-darkNavy text-xs font-bold border border-gray-200 shadow-2xs">
                  <UserCheck className="w-3.5 h-3.5 text-primaryBlue" />
                  <span>Contact: Giri S</span>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-gray-200/70">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primaryBlue/10 text-primaryBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Address</h4>
                    <p className="text-sm text-darkNavy font-medium mt-0.5 leading-relaxed">
                      No.15, 3rd Street, Gandhi Nagar, Nandivaram, Guduvancheri, Chengalpattu, Tamil Nadu - 603 202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-aqua/10 text-aqua flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Call / Support</h4>
                    <div className="text-sm font-bold text-primaryBlue mt-0.5 space-y-0.5">
                      <a href="tel:+917200010271" className="block hover:underline">+91 72000 10271</a>
                      <a href="tel:+919894240380" className="block hover:underline">+91 98942 40380</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primaryBlue/10 text-primaryBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Email Address</h4>
                    <a
                      href="mailto:aquacaresolutions777@gmail.com"
                      className="text-xs text-darkNavy font-medium hover:text-primaryBlue mt-0.5 block break-all"
                    >
                      aquacaresolutions777@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-aqua/10 text-aqua flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Business Hours</h4>
                    <p className="text-sm text-darkNavy font-medium mt-0.5">
                      Mon – Sat: 9:00 AM – 7:30 PM
                    </p>
                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                      Emergency AMC Service: 24/7 Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-md shadow-primaryBlue/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
