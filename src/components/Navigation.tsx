import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Capabilities', page: 'capabilities', dropdown: ['Finance', 'Technology', 'Human Resources', 'Management'] },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628] shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => { onNavigate('home'); setMenuOpen(false); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-0.5 h-9 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-serif font-bold text-3xl leading-none tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '0.02em' }}>VI</span>
              <div className="w-0.5 h-9 bg-[#0a1628] group-hover:bg-[#c8102e]/40 transition-colors duration-300" style={{ backgroundColor: '#1a2d5a' }} />
            </div>
            <span className="text-white font-bold text-lg tracking-widest uppercase">
              Veltro<span className="text-[#c8102e] ml-1">International</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.page} className="relative group">
                {link.dropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                      currentPage === link.page ? 'text-[#c8102e]' : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => onNavigate(link.page)}
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => setCapabilitiesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="opacity-60" />
                  </button>
                ) : (
                  <button
                    className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                      currentPage === link.page ? 'text-[#c8102e]' : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => onNavigate(link.page)}
                  >
                    {link.label}
                  </button>
                )}
                {link.dropdown && capabilitiesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 bg-[#0a1628] border border-white/10 shadow-2xl"
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => setCapabilitiesOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <button
                        key={item}
                        onClick={() => { onNavigate('capabilities'); setCapabilitiesOpen(false); }}
                        className="block w-full text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 tracking-wide border-b border-white/5 last:border-0"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="ml-2 px-6 py-2.5 bg-[#c8102e] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#a50d25] transition-colors duration-200"
            >
              Talk to Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => { onNavigate(link.page); setMenuOpen(false); }}
              className={`block w-full text-left px-6 py-4 text-sm font-medium tracking-widest uppercase border-b border-white/5 transition-colors ${
                currentPage === link.page ? 'text-[#c8102e]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => { onNavigate('contact'); setMenuOpen(false); }}
              className="w-full py-3 bg-[#c8102e] text-white text-sm font-semibold tracking-widest uppercase"
            >
              Talk to Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
