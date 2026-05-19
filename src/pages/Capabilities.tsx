import { useState } from 'react';
import { TrendingUp, Cpu, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

interface CapabilitiesProps {
  onNavigate: (page: string) => void;
}

const capabilities = [
  {
    id: 'finance',
    icon: TrendingUp,
    title: 'Finance',
    tagline: 'Engineering capital advantage in a complex world',
    description:
      'Our Finance practice advises the world\'s most sophisticated institutions on capital allocation, M&A strategy, financial restructuring, and risk optimization. We bring rigorous analytical frameworks and deep sector expertise to every engagement.',
    services: [
      'Capital Structure Optimization',
      'Mergers & Acquisitions Advisory',
      'Debt & Equity Restructuring',
      'Risk Management Frameworks',
      'ESG Financial Strategy',
      'Regulatory Compliance',
    ],
    stats: [{ value: '$4.2T', label: 'Assets Under Advisory' }, { value: '820+', label: 'Finance Engagements' }, { value: '42', label: 'Countries' }],
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology',
    tagline: 'Turning digital potential into competitive reality',
    description:
      'From AI strategy to cloud architecture and data transformation, our Technology practice helps organizations harness the full power of digital innovation. We engineer future-ready systems that drive measurable business outcomes.',
    services: [
      'AI & Machine Learning Strategy',
      'Cloud Transformation',
      'Cybersecurity Architecture',
      'Data & Analytics Platforms',
      'Product & Platform Engineering',
      'Digital Operating Model',
    ],
    stats: [{ value: '340+', label: 'Tech Transformations' }, { value: '94%', label: 'On-Time Delivery' }, { value: '2.8x', label: 'Avg. ROI' }],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'hr',
    icon: Users,
    title: 'Human Resources',
    tagline: 'Unlocking the full potential of your greatest asset',
    description:
      'People are the ultimate source of competitive advantage. Our Human Resources practice designs organizations that attract, retain, and activate top talent — building the culture and capabilities that sustain long-term performance.',
    services: [
      'Talent Strategy & Planning',
      'Organizational Design',
      'Leadership Development',
      'Culture Transformation',
      'Compensation Architecture',
      'Workforce of the Future',
    ],
    stats: [{ value: '1.2M+', label: 'Professionals Impacted' }, { value: '580+', label: 'HR Engagements' }, { value: '4.1x', label: 'Engagement Lift' }],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'management',
    icon: BarChart3,
    title: 'Management',
    tagline: 'Strategy that creates enduring competitive advantage',
    description:
      'Our Management Consulting practice works at the highest levels of corporate strategy, operational excellence, and enterprise transformation. We help CEOs and executive teams make critical decisions with precision and confidence.',
    services: [
      'Corporate & Business Unit Strategy',
      'Operational Excellence',
      'Post-Merger Integration',
      'Growth & Market Entry',
      'Performance Transformation',
      'Enterprise Change Management',
    ],
    stats: [{ value: '98%', label: 'Client Retention' }, { value: '1,200+', label: 'Strategy Projects' }, { value: '3.4x', label: 'Growth Multiple' }],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function Capabilities({ onNavigate }: CapabilitiesProps) {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];
  const Icon = cap.icon;

  return (
    <div className="bg-white">
      {/* Page hero */}
      <section className="bg-[#0a1628] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Our Practice Areas</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Capabilities
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Deep expertise across four interconnected domains — each designed to unlock a distinct dimension of organizational value.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex overflow-x-auto">
            {capabilities.map((c, i) => {
              const TabIcon = c.icon;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-6 py-5 text-sm font-semibold tracking-wider uppercase whitespace-nowrap border-b-2 transition-all duration-200 ${
                    active === i
                      ? 'border-[#c8102e] text-[#0a1628]'
                      : 'border-transparent text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <TabIcon size={16} strokeWidth={1.5} />
                  {c.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Capability Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Icon size={40} strokeWidth={1} className="text-[#c8102e] mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
                {cap.title}
              </h2>
              <p className="text-[#c8102e] font-semibold text-lg mb-8 italic">{cap.tagline}</p>
              <p className="text-gray-600 leading-relaxed text-base mb-12">{cap.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {cap.stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-[#c8102e] pl-4">
                    <div className="text-2xl font-bold text-[#0a1628]">{s.value}</div>
                    <div className="text-xs text-gray-400 tracking-wide mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#c8102e] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-200"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div>
              <div className="overflow-hidden mb-8">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              <div className="bg-[#f7f7f5] p-8">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Service Areas</h3>
                <ul className="space-y-3">
                  {cap.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#c8102e] mt-0.5 shrink-0" />
                      <span className="text-[#0a1628] text-sm font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-capability section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#c8102e]" />
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase">Integrated Expertise</span>
            <div className="w-8 h-0.5 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Where Capabilities Converge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The most impactful solutions emerge at the intersection of disciplines. Our cross-functional teams bring together Finance, Technology, HR, and Management expertise — delivering results no single practice could achieve alone.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 border border-white/30 hover:border-[#c8102e] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Discuss Your Challenge <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
