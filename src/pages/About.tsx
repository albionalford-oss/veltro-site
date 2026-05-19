import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const leadership = [
  {
    name: 'Marcus Iñiguez',
    title: 'Chairman & Managing Director',
    bio: 'Over 30 years advising Fortune 100 CEOs on strategic transformation and global growth.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'MI',
  },
  {
    name: 'Sophie Hartmann',
    title: 'Chief Executive Officer',
    bio: 'Former partner at two of the world\'s top firms, with expertise in digital transformation at scale.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'SH',
  },
  {
    name: 'David Okafor',
    title: 'Global Head of Finance Practice',
    bio: 'Led $300B+ in M&A transactions across North America, Europe, and Sub-Saharan Africa.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'DO',
  },
  {
    name: 'Yuki Tanaka',
    title: 'Global Head of Technology',
    bio: 'Architect of large-scale AI and cloud transformations for global financial and industrial leaders.',
    image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'YT',
  },
];

const values = [
  { number: '01', title: 'Intellectual Rigor', desc: 'We challenge assumptions, question the obvious, and arrive at insights that transform how organizations think and act.' },
  { number: '02', title: 'Client Partnership', desc: 'We earn trust through results. Our relationships outlast engagements because we align our success entirely with yours.' },
  { number: '03', title: 'Diversity of Thought', desc: 'Our global team brings together 80+ nationalities, believing diverse perspectives produce superior outcomes.' },
  { number: '04', title: 'Lasting Impact', desc: 'We don\'t optimize for short-term metrics. We build capabilities that compound in value over years and decades.' },
];

const timeline = [
  { year: '1989', event: 'Founded in London with a team of 12 senior consultants.' },
  { year: '1997', event: 'Expanded to North America; opened New York and Chicago offices.' },
  { year: '2004', event: 'Launched the Technology practice amid the digital revolution.' },
  { year: '2011', event: 'Surpassed 10,000 consultants globally; established Asia-Pacific hub in Singapore.' },
  { year: '2018', event: 'Pioneered AI Strategy advisory — among the first global firms to do so.' },
  { year: '2024', event: 'Ranked #1 global management consulting firm for the fourth consecutive year.' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0a1628] pt-40 pb-28 overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0a1628] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">About Veltro International</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-3xl">
            Built on Conviction.<br />Driven by <span className="text-[#c8102e]">Purpose.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            For 35 years, Veltro International has helped the world's most consequential organizations navigate complexity and realize their full potential.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#c8102e]" />
                <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-[#0a1628] mb-8 leading-tight">
                We exist to unlock human and institutional potential
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Veltro International was founded on the belief that complex challenges are best met with clear thinking, bold strategy, and an unwavering commitment to implementation. We partner with organizations at the most critical inflection points in their histories.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                From sovereign wealth funds to Fortune 500 enterprises, family businesses to government institutions — we bring the same rigor, the same curiosity, and the same determination to make a lasting difference.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a50d25] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
              >
                Work With Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#c8102e] p-8 w-44">
                <div className="text-4xl font-bold text-white">35</div>
                <div className="text-red-100 text-xs tracking-wider mt-1 uppercase">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">What We Stand For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.number} className="group bg-white p-8 border-b-2 border-gray-100 hover:border-[#c8102e] transition-colors duration-300">
                <div className="text-5xl font-bold text-gray-100 group-hover:text-[#c8102e]/20 transition-colors duration-300 mb-6">{v.number}</div>
                <h3 className="text-[#0a1628] font-bold text-lg mb-4">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Our History</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-16">35 Years of Impact</h2>
          <div className="relative">
            <div className="absolute left-24 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-12 items-start group">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-[#c8102e] font-bold text-sm tracking-wider">{item.year}</span>
                  </div>
                  <div className="relative flex items-start gap-8">
                    <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-[#c8102e] shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed pl-4 group-hover:text-gray-200 transition-colors">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Leadership</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0a1628] mb-16">Our Senior Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="group">
                <div className="overflow-hidden mb-5 bg-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="border-l-2 border-[#c8102e] pl-4">
                  <h3 className="text-[#0a1628] font-bold text-base">{leader.name}</h3>
                  <p className="text-[#c8102e] text-xs font-semibold tracking-wide uppercase mt-1 mb-3">{leader.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-[#c8102e] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">A truly global presence</h2>
            <p className="text-red-100 text-sm">68 countries. 142 offices. One firm, unified in purpose.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 bg-white text-[#c8102e] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors flex items-center gap-3"
          >
            Find Your Office <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
