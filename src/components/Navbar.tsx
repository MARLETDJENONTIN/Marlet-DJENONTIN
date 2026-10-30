import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenSection: (section: string) => void;
}

export function Navbar({ onOpenSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo (left) */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[21px] sm:text-[26px] tracking-tight text-white select-none hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Marlet Djenontin®
          </a>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none inline-flex items-center"
            style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center, hidden below md) */}
        <nav className="hidden md:flex items-center text-[23px] text-white select-none">
          <a
            href="#projets"
            onClick={(e) => {
              e.preventDefault();
              onOpenSection('Projets');
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Projets
          </a>
          {', '}
          <a
            href="#genie-civil"
            onClick={(e) => {
              e.preventDefault();
              onOpenSection('Génie Civil');
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Génie Civil
          </a>
          {', '}
          <a
            href="#ehc"
            onClick={(e) => {
              e.preventDefault();
              onOpenSection('EHC');
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            EHC
          </a>
          {', '}
          <a
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              onOpenSection('Stack & IA');
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Stack &amp; IA
          </a>
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenSection('Contact');
            }}
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-20 cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile overlay (z-index: 9) */}
      <div
        className={`fixed inset-0 z-[9] bg-black/90 backdrop-blur-md flex flex-col justify-center px-8 gap-8 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="#projets"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onOpenSection('Projets');
          }}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Projets
        </a>
        <a
          href="#genie-civil"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onOpenSection('Génie Civil');
          }}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Génie Civil
        </a>
        <a
          href="#ehc"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onOpenSection('EHC');
          }}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          EHC
        </a>
        <a
          href="#stack"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onOpenSection('Stack & IA');
          }}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Stack &amp; IA
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onOpenSection('Contact');
          }}
          className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Me contacter
        </a>
      </div>
    </>
  );
}
