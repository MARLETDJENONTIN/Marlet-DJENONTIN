import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  onActionClick: (action: string) => void;
  onCopyEmail: (copied: boolean) => void;
}

const TYPEWRITER_TEXT =
  "Ravi de vous voir ici. Les beaux projets trouvent toujours leur chemin. Alors, qu'allons-nous bâtir ensemble ?";

export function Hero({ onActionClick, onCopyEmail }: HeroProps) {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Action pill buttons become visible 400ms after page load, independent of typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('djenmarlet@gmail.com');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = 'djenmarlet@gmail.com';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onCopyEmail(true);
      setTimeout(() => {
        setCopied(false);
        onCopyEmail(false);
      }, 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative z-[1] w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden pointer-events-none">
      <div className="max-w-xl relative z-10 pointer-events-auto">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6 text-white font-normal"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
          }}
        >
          Bonjour, faites connaissance avec Marlet Djenontin,
          <br />
          Développeur Full-Stack Web &amp; Mobile · Technicien Supérieur en Génie Civil
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-white mb-5 sm:mb-6 font-normal min-h-[54px] select-text"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className={`flex flex-wrap gap-y-1 ${
            pillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* 4 White pill buttons */}
          <button
            type="button"
            onClick={() => onActionClick('Proposer un projet')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Proposer un projet
          </button>

          <button
            type="button"
            onClick={() => onActionClick('Génie Civil & BTP')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Génie Civil &amp; BTP
          </button>

          <button
            type="button"
            onClick={() => onActionClick('Dire bonjour')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Dire bonjour
          </button>

          <button
            type="button"
            onClick={() => onActionClick('Notre méthode')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Notre méthode
          </button>

          {/* 1 Outline pill button */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group"
            title="Cliquer pour copier l'adresse email"
          >
            <span>
              Contact :{' '}
              <span className="underline underline-offset-1">djenmarlet@gmail.com</span>
            </span>

            {/* Small 12x12 copy icon (inline SVG of two overlapping rectangles) */}
            <span className="inline-flex items-center justify-center">
              {copied ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M2.5 6.5L4.8 8.8L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <rect
                    x="3.6"
                    y="1.2"
                    width="6.8"
                    height="6.8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <rect
                    x="1.4"
                    y="3.8"
                    width="6.8"
                    height="6.8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
