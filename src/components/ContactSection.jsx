import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Domestic RO System Installation',
    'Commercial RO Purifiers',
    'Industrial RO Plant Setup',
    'Water Softener Treatment',
    'Filter & Membrane Replacement',
    'RO Repair & Troubleshooting',
    'Annual Maintenance Contract (AMC)',
    'General Enquiry',
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the service required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Form resets
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceRequired: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-aqua bg-aqua/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-aqua/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkNavy tracking-tight">
            Need a Reliable Water Purification Solution?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Connect with our team for domestic and industrial RO system sales, installation and maintenance services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-lightBg/60 p-8 rounded-2xl border border-gray-200/80 space-y-6">
              <h3 className="text-xl font-bold text-darkNavy">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reach out directly via phone or email for fast site assessments, product queries, or urgent service calls.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primaryBlue/10 text-primaryBlue flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Contact Person & Phone</h4>
                    <p className="text-sm font-semibold text-darkNavy mt-0.5">Giri S</p>
                    <div className="flex flex-col sm:flex-row sm:gap-2 text-sm text-primaryBlue font-bold mt-0.5">
                      <a href="tel:+917200010271" className="hover:underline">+91 72000 10271</a>
                      <span className="hidden sm:inline text-gray-400">/</span>
                      <a href="tel:+919894240380" className="hover:underline">+91 98942 40380</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-aqua/10 text-aqua flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Email Address</h4>
                    <a
                      href="mailto:aquacaresolutions777@gmail.com"
                      className="text-sm font-semibold text-darkNavy hover:text-primaryBlue transition-colors mt-0.5 block break-all"
                    >
                      aquacaresolutions777@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primaryBlue/10 text-primaryBlue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Office & Workshop Address</h4>
                    <p className="text-sm font-semibold text-darkNavy mt-0.5 leading-relaxed">
                      No.15, 3rd Street, Gandhi Nagar, Nandivaram, Guduvancheri, Chengalpattu, Tamil Nadu - 603 202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-aqua/10 text-aqua flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Working Hours</h4>
                    <p className="text-sm font-semibold text-darkNavy mt-0.5">Monday – Saturday: 9:00 AM – 7:30 PM</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">24/7 Emergency AMC Breakdown Attendance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-md">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-darkNavy">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been successfully registered. An Aqua Care Solutions water specialist will review your requirements and contact you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-primaryBlue bg-lightBg hover:bg-primaryBlue hover:text-white transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-darkNavy uppercase mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                        errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-300 focus:ring-primaryBlue'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-darkNavy uppercase mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-300 focus:ring-primaryBlue'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-darkNavy uppercase mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                      errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-300 focus:ring-primaryBlue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-darkNavy uppercase mb-1.5">
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                      errors.serviceRequired ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-300 focus:ring-primaryBlue'
                    } focus:outline-none focus:ring-2 text-darkNavy`}
                  >
                    <option value="">Select a service category</option>
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.serviceRequired && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.serviceRequired}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-darkNavy uppercase mb-1.5">
                    Requirement Details / Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your water source (borewell/tap), required capacity (home/factory), or issue..."
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                      errors.message ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-300 focus:ring-primaryBlue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-primaryBlue hover:bg-aqua transition-colors duration-200 shadow-md shadow-primaryBlue/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
