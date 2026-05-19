import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Cpu, Users, BarChart3, Globe, Award, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function CounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const clients = useCountUp(11, 2000, visible);
  const countries = useCountUp(9, 1800, visible);
  const projects = useCountUp(6, 2200, visible);
  const years = useCountUp(35, 1500, visible);

  const stats = [
    { value: clients, suffix: '+', label: 'Global Clients' },
    { value: countries, suffix: '', label: 'Countries Served' },
    { value: projects, suffix: '+', label: 'Projects Delivered' },
    { value: years, suffix: ' yrs', label: 'Industry Experience' },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#0a1628] px-8 py-12 text-center">
          <div className="text-5xl lg:text-6xl font-bold text-white mb-3 tabular-nums">
            {stat.value.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-xs text-gray-400 tracking-widest uppercase">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

const sectors = [
  {
    icon: TrendingUp,
    title: 'Finance',
    description: 'Capital strategy, M&A advisory, risk management, and financial restructuring for global enterprises.',
    stat: '$4.2T',
    statLabel: 'Assets Advised',
    color: 'group-hover:text-[#c8102e]',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Digital transformation, AI integration, cloud architecture, and technology-driven growth strategies.',
    stat: '340+',
    statLabel: 'Tech Engagements',
    color: 'group-hover:text-[#c8102e]',
  },
  {
    icon: Users,
    title: 'Human Resources',
    description: 'Talent strategy, organizational design, leadership development, and workforce transformation.',
    stat: '1.2M+',
    statLabel: 'Professionals Impacted',
    color: 'group-hover:text-[#c8102e]',
  },
  {
    icon: BarChart3,
    title: 'Management',
    description: 'Corporate strategy, operational excellence, performance optimization, and enterprise transformation.',
    stat: '98%',
    statLabel: 'Client Retention',
    color: 'group-hover:text-[#c8102e]',
  },
];

const insights = [
  {
    tag: 'Finance',
    title: 'The New Capital Frontier: Navigating Emerging Market Volatility in 2026',
    date: 'May 2026',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Technology',
    title: 'AI-Driven Strategy: How Leaders Are Reimagining Competitive Advantage',
    date: 'April 2026',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Management',
    title: 'Organizational Resilience: Building Teams That Thrive Under Uncertainty',
    date: 'April 2026',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const [activeSector, setActiveSector] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0a1628] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]" />

        {/* Grid lines decoration */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 border-r border-white" style={{ left: `${(i + 1) * 12.5}%` }} />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-48">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-[#c8102e]" />
              <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Global Management Consulting</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] mb-8 tracking-tight">
              Navigating<br />
              <span className="text-[#c8102e]">Global</span><br />
              Complexity
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
              Veltro International partners with the world's most ambitious organizations to unlock transformative growth, build lasting capabilities, and shape industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('capabilities')}
                className="group inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a50d25] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-200"
              >
                Explore Capabilities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-200"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute right-10 bottom-24 flex flex-col items-center gap-2 opacity-40">
            <span className="text-white text-xs tracking-widest uppercase rotate-90 mb-6">Scroll</span>
            <div className="w-px h-16 bg-white animate-pulse" />
          </div>
        </div>
      </section>

      {/* Global Impact Counters */}
      <CounterSection />

      {/* Sectors Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#c8102e]" />
                <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
                Four Pillars of<br />Global Impact
              </h2>
            </div>
            <button
              onClick={() => onNavigate('capabilities')}
              className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#c8102e] hover:text-[#0a1628] transition-colors"
            >
              View All Capabilities
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="group relative bg-white p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:bg-[#0a1628]"
                  onMouseEnter={() => setActiveSector(i)}
                  onMouseLeave={() => setActiveSector(null)}
                >
                  <div className={`mb-6 transition-colors duration-300 ${activeSector === i ? 'text-[#c8102e]' : 'text-gray-300'}`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${activeSector === i ? 'text-white' : 'text-[#0a1628]'}`}>
                    {sector.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 transition-colors duration-300 ${activeSector === i ? 'text-gray-400' : 'text-gray-500'}`}>
                    {sector.description}
                  </p>
                  <div className={`pt-6 border-t transition-colors duration-300 ${activeSector === i ? 'border-white/10' : 'border-gray-100'}`}>
                    <div className={`text-2xl font-bold transition-colors duration-300 ${activeSector === i ? 'text-[#c8102e]' : 'text-[#0a1628]'}`}>
                      {sector.stat}
                    </div>
                    <div className={`text-xs tracking-wider uppercase mt-1 transition-colors duration-300 ${activeSector === i ? 'text-gray-500' : 'text-gray-400'}`}>
                      {sector.statLabel}
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c8102e] transition-all duration-300 ${activeSector === i ? 'w-full' : 'w-0'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured quote */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-0.5 bg-[#c8102e]" />
                <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Our Approach</span>
              </div>
              <blockquote className="text-3xl md:text-4xl font-light text-white leading-snug mb-10">
                "We don't just advise — we build the capabilities that allow organizations to thrive long after we've left."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c8102e] flex items-center justify-center text-white font-bold text-sm">MI</div>
                <div>
                  <div className="text-white font-semibold text-sm">Marcus Iñiguez</div>
                  <div className="text-gray-500 text-xs tracking-wide">Chairman & Managing Director</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Global Reach', desc: '68 countries, 142 offices' },
                { icon: Award, label: 'Top Ranked', desc: '#1 consulting firm globally, 2024' },
                { icon: Users, label: 'Our People', desc: '28,000+ expert consultants' },
                { icon: TrendingUp, label: 'Client Growth', desc: '3.4x average client growth' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="border border-white/10 p-6 hover:border-[#c8102e]/40 transition-colors">
                  <Icon size={24} className="text-[#c8102e] mb-4" strokeWidth={1.5} />
                  <div className="text-white font-semibold text-sm mb-1">{label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-28 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#c8102e]" />
                <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Latest Thinking</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
                Insights &<br />Perspectives
              </h2>
            </div>
            <button className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#c8102e]">
              All Insights
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <article key={insight.title} className="group cursor-pointer bg-white">
                <div className="overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#c8102e] tracking-widest uppercase">{insight.tag}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{insight.date}</span>
                  </div>
                  <h3 className="text-[#0a1628] font-bold leading-snug group-hover:text-[#c8102e] transition-colors">
                    {insight.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#c8102e]">
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#c8102e] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to shape what's next?</h2>
            <p className="text-red-100 text-sm">Connect with our team to begin a conversation about your challenges.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 bg-white text-[#c8102e] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors flex items-center gap-3"
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
