/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveModals } from './components/InteractiveModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleOpenSection = (section: string) => {
    setActiveModal(section);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleCopyEmail = (copied: boolean) => {
    setShowCopyToast(copied);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white select-none">
      {/* Mouse-scrub controlled background video */}
      <BackgroundVideo />

      {/* Fixed top navigation bar */}
      <Navbar onOpenSection={handleOpenSection} />

      {/* Main hero section with typewriter and action pills */}
      <main className="w-full h-full">
        <Hero
          onActionClick={handleOpenSection}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Floating subtle toast when email address is copied */}
      <aside
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-40 bg-white text-black px-4 py-2 rounded-full text-xs font-medium shadow-2xl transition-all duration-300 flex items-center gap-2 ${
          showCopyToast
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-black" aria-hidden="true" />
        <span>djenmarlet@gmail.com copié dans le presse-papier</span>
      </aside>

      {/* Direct WhatsApp floating pill indicator */}
      <aside className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <a
          href="https://wa.me/22945563069"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/80 bg-black/60 border border-white/20 backdrop-blur-md hover:text-white hover:border-white/50 hover:bg-black/80 transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>WhatsApp : +229 45 56 30 69</span>
        </a>
      </aside>

      {/* Interactive modal dialogs for nav items and portfolio sections */}
      <InteractiveModals
        activeModal={activeModal}
        onClose={handleCloseModal}
        onSelectAction={handleOpenSection}
      />
    </div>
  );
}
