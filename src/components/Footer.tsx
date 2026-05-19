interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const columns = [
    {
      title: 'Capabilities',
      links: ['Finance Advisory', 'Technology Strategy', 'Human Resources', 'Management Consulting', 'Digital Transformation'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Leadership', 'Careers', 'Sustainability'],
    },
    {
      title: 'Insights',
      links: ['Research & Reports', 'Case Studies', 'Thought Leadership', 'Events & Webinars', 'Newsletters'],
    },
  ];

  const pageMap: Record<string, string> = {
    'Finance Advisory': 'capabilities',
    'Technology Strategy': 'capabilities',
    'Human Resources': 'capabilities',
    'Management Consulting': 'capabilities',
    'Digital Transformation': 'capabilities',
    'About Us': 'about',
    'Leadership': 'about',
    'Careers': 'contact',
    'Sustainability': 'about',
    'Research & Reports': 'capabilities',
    'Case Studies': 'capabilities',
    'Thought Leadership': 'capabilities',
    'Events & Webinars': 'contact',
    'Newsletters': 'contact',
  };

  return (
    <footer className="bg-[#060f1e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-0.5 h-9 bg-[#c8102e]" />
                <span className="text-[#c8102e] font-bold text-3xl leading-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '0.02em' }}>VI</span>
                <div className="w-0.5 h-9" style={{ backgroundColor: '#1a2d5a' }} />
              </div>
              <span className="font-bold text-lg tracking-widest uppercase">
                Veltro<span className="text-[#c8102e] ml-1">International</span>
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Navigating global complexity with clarity, precision, and a relentless commitment to enduring impact.
            </p>
            <div className="flex gap-4 mt-8">
              {['in', 'tw', 'fb'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:border-[#c8102e] hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate(pageMap[link] || 'home')}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-gray-600 tracking-wide">
            &copy; {new Date().getFullYear()} Veltro International. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
              <button key={item} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
