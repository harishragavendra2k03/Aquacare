import { Star, Quote, Info } from 'lucide-react';

const placeholderReviews = [
  {
    id: 1,
    name: 'Sample Residential Client',
    location: 'Domestic RO System',
    comment:
      'We had an under-sink RO system installed for our home. The water quality and taste improved significantly, and the installation was completed cleanly without any mess.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sample Manufacturing Unit',
    location: '1000 LPH Industrial RO Plant',
    comment:
      'Aqua Care Solutions delivered and commissioned our industrial plant on schedule. Regular AMC check-ups have kept our production line running with steady pure water output.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sample Educational Campus',
    location: 'Commercial RO & Water Softener',
    comment:
      'Prompt response for filter replacements and routine maintenance. The technical staff is knowledgeable and explains the maintenance steps clearly.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-lightBg/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Read what clients appreciate about our water purification systems, technical installation, and ongoing maintenance services.
          </p>

          {/* Explicit Placeholder Notice */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 bg-white px-3.5 py-1.5 rounded-full border border-gray-200">
            <Info className="w-3.5 h-3.5 text-aqua" />
            <span>Sample placeholder testimonials displayed for preview until verified customer reviews are published.</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-aqua/20" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <h4 className="text-sm font-bold text-darkNavy">{rev.name}</h4>
                <p className="text-xs text-aqua font-medium mt-0.5">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
