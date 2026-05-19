import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const offices = [
  { city: 'London', region: 'Europe HQ', address: '1 Canada Square, Canary Wharf', phone: '+44 20 7946 0800' },
  { city: 'New York', region: 'Americas HQ', address: '540 Madison Avenue, 25th Floor', phone: '+1 212 555 0140' },
  { city: 'Singapore', region: 'Asia-Pacific HQ', address: '1 Raffles Place, Tower 1', phone: '+65 6321 0900' },
  { city: 'Dubai', region: 'MENA Hub', address: 'DIFC, Gate Village Building 6', phone: '+971 4 330 1200' },
  { city: 'São Paulo', region: 'Latin America', address: 'Av. Faria Lima, 3400 — Itaim Bibi', phone: '+55 11 3055 0800' },
  { city: 'Nairobi', region: 'Africa Hub', address: 'Upperhill, United Nations Crescent', phone: '+254 20 2870 000' },
];

const inquiryTypes = [
  'New Client Engagement',
  'Career Opportunity',
  'Press & Media',
  'Research Collaboration',
  'Speaking Request',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0a1628] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Start a<br />Conversation
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Whether you're navigating a complex challenge or exploring a strategic opportunity, our team is ready to engage.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-2">Send Us a Message</h2>
              <p className="text-gray-400 text-sm mb-10">A senior member of our team will respond within one business day.</p>

              {submitted ? (
                <div className="flex flex-col items-start gap-4 p-10 bg-[#f7f7f5] border-l-4 border-[#c8102e]">
                  <CheckCircle size={40} className="text-[#c8102e]" />
                  <h3 className="text-xl font-bold text-[#0a1628]">Thank you for reaching out</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your message has been received. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#0a1628] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#0a1628] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#0a1628] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#0a1628] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Inquiry Type *</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] focus:outline-none focus:border-[#0a1628] transition-colors bg-white"
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your challenge or question..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#0a1628] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#c8102e] disabled:opacity-60 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-200"
                  >
                    {loading ? 'Sending...' : 'Submit Message'}
                    {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Direct Contacts</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'General Inquiries', value: 'info@veltro.com' },
                    { icon: Mail, label: 'Press & Media', value: 'press@veltro.com' },
                    { icon: Phone, label: 'Global Switchboard', value: '+44 20 7946 0800' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 p-4 bg-[#f7f7f5]">
                      <Icon size={18} className="text-[#c8102e] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 tracking-wide uppercase mb-1">{label}</div>
                        <div className="text-[#0a1628] text-sm font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-[#0a1628]">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-[#0a1628]">9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">All times in GMT. 24/7 support available for active engagements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Global Offices</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0a1628] mb-16">Find Us Worldwide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-8 border-b-2 border-gray-100 hover:border-[#c8102e] transition-colors group">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={18} className="text-[#c8102e] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[#0a1628] font-bold text-lg">{office.city}</h3>
                    <p className="text-xs text-gray-400 tracking-wide uppercase">{office.region}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-2 ml-7">{office.address}</p>
                <p className="text-gray-400 text-sm ml-7">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
