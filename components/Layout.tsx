import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo, Container } from './UI';

// --- Navbar Component ---
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-50 group relative">
                <div className="absolute inset-0 bg-black/50 blur-lg rounded-full md:hidden"></div>
                <Logo className="text-white w-6 h-6 relative z-10" />
                <span className="font-display font-bold tracking-tight text-white text-lg hidden md:block relative z-10">
                    Asymmetric.al
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center bg-black/80 backdrop-blur-md border border-white/10 px-1 py-1 rounded-full">
            {NAV_ITEMS.map((item) => (
                <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 text-[11px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                    location.pathname === item.path 
                    ? 'bg-white text-black font-bold' 
                    : 'text-muted hover:text-white'
                }`}
                >
                {item.label}
                </Link>
            ))}
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden text-white z-50 p-2 relative"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className="absolute inset-0 bg-black/50 blur-md rounded-full"></div>
                <span className="relative z-10">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </span>
            </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 animate-fade-in">
          <div className="flex flex-col gap-8 relative z-50">
            <Link to="/" className="text-5xl font-display font-bold text-white border-b border-white/10 pb-4">Home</Link>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-5xl font-display font-bold text-muted hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer Helper Components ---

const FooterHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-2 inline-block">
        {children}
    </h4>
);

const FooterLink: React.FC<{ to?: string; children: React.ReactNode }> = ({ to, children }) => {
    const content = (
        <>
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0 text-primary" />
            {children}
        </>
    );

    return (
        <li>
            {to ? (
                <Link to={to} className="hover:text-white transition-colors flex items-center gap-2 group">
                    {content}
                </Link>
            ) : (
                <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-2 group">
                    {content}
                </span>
            )}
        </li>
    );
};

// --- Footer Component ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black relative overflow-hidden pt-32 pb-12 border-t border-white/10 z-10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <Container className="relative z-10">
        {/* Massive Manifesto Section */}
        <div className="mb-16">
            <h2 className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
                The Manifesto
            </h2>
            
            <div className="border-t border-white/20 py-16">
                <div className="flex flex-col gap-4">
                    <span className="font-display font-bold text-4xl md:text-7xl text-white leading-none tracking-tight">
                        WE BUILD FOR THE <span className="text-muted">GLOBAL CHURCH.</span>
                    </span>
                    <span className="font-display font-bold text-4xl md:text-7xl text-white leading-none tracking-tight">
                        WE MEASURE SUCCESS IN
                    </span>
                    <span className="font-display font-bold text-[14vw] leading-[0.8] text-white tracking-tighter mt-4 md:mt-8 block">
                        IMPACT,
                    </span>
                    <span className="font-display font-bold text-4xl md:text-7xl text-muted leading-none tracking-tight md:text-right mt-4">
                        NOT PROFIT.
                    </span>
                </div>
            </div>
        </div>

        {/* Sitemap Grid - Brutalist Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-24">
            <div>
                <FooterHeader>01 // Platform</FooterHeader>
                <ul className="space-y-4 text-sm font-mono text-muted">
                    <FooterLink to="/product">Mission Control</FooterLink>
                    <FooterLink to="/specs">System Specs</FooterLink>
                    <FooterLink to="/manifesto">Philosophy</FooterLink>
                </ul>
            </div>

            <div>
                <FooterHeader>02 // Involvement</FooterHeader>
                <ul className="space-y-4 text-sm font-mono text-muted">
                    <FooterLink to="/missions">For Missions</FooterLink>
                    <FooterLink to="/give">Give to Build</FooterLink>
                    <FooterLink to="/contact">Contact Us</FooterLink>
                </ul>
            </div>

            <div>
                <FooterHeader>03 // Legal</FooterHeader>
                <ul className="space-y-4 text-sm font-mono text-muted">
                    <FooterLink to="/privacy">Privacy Policy</FooterLink>
                    <FooterLink to="/terms">Terms of Service</FooterLink>
                    <FooterLink>501(c)(3) Disclosure</FooterLink>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
                 <FooterHeader>04 // Covering</FooterHeader>
                 <p className="text-sm text-muted leading-relaxed font-mono">
                    Operating as a project under Global Fellowship Inc.<br/>
                    <span className="text-white/40 text-xs block mt-4">EIN: 68-0214543</span>
                 </p>
                 <div className="mt-8 pt-8 border-t border-white/10">
                    <Logo className="w-8 h-8 text-white opacity-40" />
                 </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/10 pt-8">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Asymmetric.al © {new Date().getFullYear()}
            </div>
            <div className="text-[10px] font-mono text-white uppercase tracking-widest">
                Soli Deo Gloria
            </div>
        </div>
      </Container>
    </footer>
  );
};