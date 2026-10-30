import { useState, useEffect } from 'react';

interface InteractiveModalsProps {
  activeModal: string | null;
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

export function InteractiveModals({
  activeModal,
  onClose,
  onSelectAction,
}: InteractiveModalsProps) {
  const [pitchForm, setPitchForm] = useState({
    name: '',
    email: '',
    type: 'Application Web & MoMo',
    budget: 'Standard',
    details: '',
  });
  const [pitchSubmitted, setPitchSubmitted] = useState(false);

  const [helloForm, setHelloForm] = useState({
    name: '',
    email: '',
    note: '',
  });
  const [helloSubmitted, setHelloSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const handleOpenWhatsApp = (text: string) => {
    const url = `https://wa.me/22945563069?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span
              className="text-xl sm:text-2xl text-white select-none inline-flex items-center"
              style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              ✳︎
            </span>
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight">
              {(activeModal === 'Proposer un projet' || activeModal === 'Pitch us an idea') &&
                'Proposer un projet à Marlet'}
              {activeModal === 'Projets' && 'Projets & Réalisations'}
              {(activeModal === 'Génie Civil & BTP' || activeModal === 'Génie Civil') &&
                'Génie Civil, BTP & Terrain'}
              {activeModal === 'EHC' && 'Élite Hospitality Consulting (EHC)'}
              {activeModal === 'Stack & IA' && 'Stack Technique & Environnement'}
              {(activeModal === 'Notre méthode' || activeModal === 'See how we operate') &&
                'Méthodologie & Standards de Travail'}
              {(activeModal === 'Dire bonjour' || activeModal === 'Send a brief hello') &&
                'Envoyer un message direct'}
              {(activeModal === 'Contact' || activeModal === 'Me contacter') &&
                'Coordonnées & Prise de Contact'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Modal content body based on active modal */}

        {/* 1. Proposer un projet */}
        {(activeModal === 'Proposer un projet' || activeModal === 'Pitch us an idea') && (
          <div>
            {pitchSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-medium">Brief Reçu</h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Merci pour votre message. Je vous répondrai personnellement sous 24h.
                  Vous pouvez également me contacter directement sur WhatsApp pour une réponse instantanée.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleOpenWhatsApp(
                        `Bonjour Marlet, je viens de vous soumettre un brief (${pitchForm.type}) : ${pitchForm.details}`
                      )
                    }
                    className="px-6 py-2 bg-emerald-500 text-black text-xs font-semibold rounded-full hover:bg-emerald-400 transition-colors"
                  >
                    Confirmer sur WhatsApp (+229 45 56 30 69)
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 border border-white/20 text-white text-xs rounded-full hover:bg-white/10"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPitchSubmitted(true);
                }}
                className="space-y-4"
              >
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Développeur full-stack et technicien génie civil basé à Cotonou/Abomey-Calavi,
                  je concrétise vos applications web, mobiles et intégrations de paiement avec la rigueur d&apos;un bâtisseur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={pitchForm.name}
                      onChange={(e) => setPitchForm({ ...pitchForm, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      value={pitchForm.email}
                      onChange={(e) => setPitchForm({ ...pitchForm, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                      Type de projet
                    </label>
                    <select
                      value={pitchForm.type}
                      onChange={(e) => setPitchForm({ ...pitchForm, type: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Application Web & MoMo">Application Web &amp; Paiement MTN MoMo</option>
                      <option value="Application Mobile (React Native / Flutter)">Application Mobile (React Native / Flutter)</option>
                      <option value="E-commerce Haute Vélocité">Site E-commerce Haute Vélocité</option>
                      <option value="Cartographie QGIS & SIG">Cartographie SIG &amp; Relevés QGIS</option>
                      <option value="Agent IA ou Intégration LLM">Agent IA &amp; Intégration LLM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                      Échéance estimée
                    </label>
                    <select
                      value={pitchForm.budget}
                      onChange={(e) => setPitchForm({ ...pitchForm, budget: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Urgent (1 à 2 semaines)">Urgent (1 à 2 semaines)</option>
                      <option value="1 mois">1 mois</option>
                      <option value="2 à 3 mois">2 à 3 mois</option>
                      <option value="Consulting Continu">Mission de Consulting Continu</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5">
                    Description des besoins
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Fonctionnalités clés, public cible, contraintes techniques..."
                    value={pitchForm.details}
                    onChange={(e) => setPitchForm({ ...pitchForm, details: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleOpenWhatsApp(
                        `Bonjour Marlet, je souhaite échanger sur un projet : ${pitchForm.type}`
                      )
                    }
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Ou échanger directement sur WhatsApp →
                  </button>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-white/20 text-neutral-300 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Transmettre le brief
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* 2. Projets & Réalisations */}
        {activeModal === 'Projets' && (
          <div className="space-y-4">
            <p className="text-neutral-400 text-sm">
              Sélection de travaux développés en freelance et en mission, combinant fintech africaine, front-end rapide et cartographie.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Vote MVP Football Féminin CAF',
                  category: 'Web & Fintech MoMo',
                  desc: 'Plateforme de vote en temps réel avec passerelle directe de paiement MTN Mobile Money (Bénin & Afrique). Gestion des webhooks, décompte certifié et anti-triche.',
                  stack: ['React', 'Vite', 'Node.js', 'Express', 'MTN MoMo API', 'Supabase'],
                  badge: 'En production',
                },
                {
                  title: 'Agent IA d’Analyse de Figures Chartistes',
                  category: 'IA & Trading',
                  desc: 'Reconnaissance géométrique automatisée de patterns chartistes (épaules-tête, triangles, drapeaux) et analyse probabiliste par LLM.',
                  stack: ['Node.js', 'LM Studio', 'Claude Code', 'OpenRouter', 'Canvas API'],
                  badge: 'En cours de conception',
                },
                {
                  title: 'Sites E-commerce Nouvel An — AJagency',
                  category: 'Front-End E-commerce',
                  desc: 'Mission Calibration Q4 pour AJagency : développement de vitrines de vente éphémères ultra-véloces sous React/Vite, temps de chargement < 1.2s et score Lighthouse 98+.',
                  stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
                  badge: 'Q4 Calibration',
                },
                {
                  title: 'Cartographie SIG — Points d’Eau de GBÉTAGBO (Cotonou)',
                  category: 'SIG & Génie Civil',
                  desc: 'Recensement spatial de l’accès à l’eau potable via KoBoToolbox sur mobile, traitement géomatique sous QGIS, production de plans architecturaux PDF et exports vectoriels DXF.',
                  stack: ['QGIS', 'KoBoToolbox', 'AutoCAD', 'Format DXF', 'GeoJSON'],
                  badge: 'SIG de Terrain',
                },
              ].map((proj) => (
                <div
                  key={proj.title}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                        {proj.category}
                      </span>
                      <h4 className="text-base font-medium text-white">{proj.title}</h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-mono shrink-0">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1 mb-2">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => onSelectAction('Proposer un projet')}
                className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-neutral-200 transition-colors"
              >
                Lancer un projet avec Marlet →
              </button>
            </div>
          </div>
        )}

        {/* 3. Génie Civil, BTP & Terrain */}
        {(activeModal === 'Génie Civil' || activeModal === 'Génie Civil & BTP') && (
          <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Formation d&apos;excellence
                </span>
                <span className="text-xs text-neutral-400">HND / BTS</span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Technicien Supérieur en Génie Civil · Polytech Ada
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Formation approfondie en topographie, résistance des matériaux, béton armé, métrés et gestion technique de chantier à Cotonou, Bénin.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  OBJECTIF CONSTRUCTION Bénin
                </h4>
                <span className="text-xs font-mono text-neutral-400">
                  24/11/2023 – 23/05/2024
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Poste de conduite et suivi de chantier :
              </p>
              <ul className="text-xs text-neutral-400 space-y-1.5 list-disc pl-4">
                <li>Implantation rigoureuse des bâtiments et des semelles de fondations</li>
                <li>Suivi quotidien des équipes de chantier et respect des plans d&apos;exécution</li>
                <li>Coordination et contrôle qualité des coulages de béton armé</li>
                <li>Établissement des attachements et suivi des décomptes des sous-traitants</li>
                <li>Montage des dossiers techniques, devis quantitatifs estimatifs (DQE) et appels d&apos;offres</li>
                <li>Suivi-contrôle des travaux sur infrastructures éducatives</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
              <h4 className="text-sm font-semibold text-white">
                Chef d&apos;équipe en cartographie censitaire
              </h4>
              <p className="text-xs text-neutral-400">
                Encadrement d&apos;enquêteurs cartographes sur le terrain, découpage spatial, collecte numérique KoBoToolbox et apurement des données géographiques.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900 text-xs text-neutral-400 italic">
              « Le génie civil m&apos;a appris que la rigueur commence dès les fondations. En programmation, c&apos;est la garantie d&apos;architectures sans faille. »
            </div>
          </div>
        )}

        {/* 4. EHC (Élite Hospitality Consulting) */}
        {activeModal === 'EHC' && (
          <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Direction Opérationnelle
              </span>
              <h4 className="text-base font-semibold text-white">
                Responsable Adjoint d&apos;Élite Hospitality Consulting (EHC)
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Agence de conseil en hôtellerie et événementiel de premier plan au Bénin.
                Supervision des opérations, coordination des équipes d&apos;accueil pour grands événements et direction artistique.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h4 className="text-sm font-semibold text-white">
                  Identité Visuelle de Prestige : Vert &amp; Or
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Conception complète de l&apos;image de marque EHC :
              </p>
              <ul className="text-xs text-neutral-400 space-y-1 list-disc pl-4">
                <li>Cartes de visite connectées avec QR codes interactifs</li>
                <li>Flyers de recrutement des brigades hôtelières et personnel VIP</li>
                <li>Rédaction des discours officiels d&apos;accueil et chartes qualité en format PDF</li>
              </ul>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-white/10 text-xs text-neutral-400">
              <span>Hôtellerie · Événementiel · Conseil</span>
              <button
                type="button"
                onClick={() => onSelectAction('Proposer un projet')}
                className="text-white underline hover:opacity-80"
              >
                Contacter pour collaboration EHC →
              </button>
            </div>
          </div>
        )}

        {/* 5. Stack & IA */}
        {activeModal === 'Stack & IA' && (
          <div className="space-y-4">
            <p className="text-neutral-400 text-sm">
              Arsenal technique complet pour le web moderne, le mobile, la fintech africaine et le cloud.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">Front-End</h4>
                <p className="text-neutral-400">React, Vite, Tailwind CSS, Framer Motion, i18n multilingue.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">Back-End &amp; Bases</h4>
                <p className="text-neutral-400">Node.js, Express, PHP, MySQL, PostgreSQL, Supabase, Prisma ORM, JWT.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">Mobile Cross-Platform</h4>
                <p className="text-neutral-400">React Native, Expo, Flutter, Dart.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">Fintech &amp; Paiement</h4>
                <p className="text-neutral-400">MTN Mobile Money Direct API (Bénin &amp; Afrique), webhooks bancaires.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">DevOps &amp; Déploiement</h4>
                <p className="text-neutral-400">Vercel, Railway, Neon DB, Netlify, Hostinger (DNS / SSL).</p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold text-white mb-1">Environnement &amp; Outils</h4>
                <p className="text-neutral-400">Parrot OS (Linux), Claude Code, Windsurf, LM Studio, OpenRouter.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-white/10 bg-black/40 text-xs text-neutral-400 flex flex-wrap justify-between items-center gap-2">
              <span>Langues : Français (Natif), Italien, Allemand</span>
              <span className="text-neutral-500">Centres d&apos;intérêt : Basketball 🏀, Open Source 🐧</span>
            </div>
          </div>
        )}

        {/* 6. Notre méthode */}
        {(activeModal === 'Notre méthode' || activeModal === 'See how we operate') && (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <p className="text-neutral-400">
              Ma méthode de travail réunit la vitesse de prototypage du software et l&apos;intransigeance du génie civil.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="font-mono text-neutral-400 text-[10px] uppercase block">
                  Principe 01
                </span>
                <h4 className="text-sm font-semibold text-white mt-0.5">
                  L&apos;esprit DQE appliqué au logiciel
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Comme un devis quantitatif estimatif de chantier, chaque livrable logiciel fait l&apos;objet d&apos;un cadrage précis : stack validée, jalons clairs, métriques de performance et zéro coût caché.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="font-mono text-neutral-400 text-[10px] uppercase block">
                  Principe 02
                </span>
                <h4 className="text-sm font-semibold text-white mt-0.5">
                  Fintech locale &amp; réalité du terrain africain
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Les applications doivent tourner parfaitement sur smartphones avec réseaux intermittents. L&apos;intégration directe MTN MoMo permet aux utilisateurs de payer sans carte bancaire internationale.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="font-mono text-neutral-400 text-[10px] uppercase block">
                  Principe 03
                </span>
                <h4 className="text-sm font-semibold text-white mt-0.5">
                  Autonomie sous Parrot OS &amp; IA de pointe
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Environnement sécurisé Linux couplé aux assistants Claude Code et modèles locaux sous LM Studio pour coder 3x plus vite avec une traçabilité totale.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => onSelectAction('Dire bonjour')}
                className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-neutral-200 transition-colors"
              >
                Échanger avec Marlet →
              </button>
            </div>
          </div>
        )}

        {/* 7. Dire bonjour / Me contacter */}
        {(activeModal === 'Dire bonjour' ||
          activeModal === 'Send a brief hello' ||
          activeModal === 'Contact' ||
          activeModal === 'Me contacter') && (
          <div className="space-y-5">
            {helloSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-medium">Message Prêt</h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Votre client mail s&apos;est ouvert. N&apos;hésitez pas à m&apos;écrire directement sur WhatsApp pour une réponse encore plus rapide.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-neutral-200"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                  <div>
                    <span className="text-xs text-neutral-400 font-mono">WhatsApp Direct</span>
                    <h4 className="text-base font-bold text-white">+229 45 56 30 69</h4>
                  </div>
                  <a
                    href="https://wa.me/22945563069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold rounded-full hover:bg-emerald-400 transition-colors"
                  >
                    Ouvrir WhatsApp
                  </a>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                  <div>
                    <span className="text-xs text-neutral-400 font-mono">Adresse Email</span>
                    <h4 className="text-base font-bold text-white">djenmarlet@gmail.com</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText('djenmarlet@gmail.com');
                      alert('Email copié dans le presse-papier : djenmarlet@gmail.com');
                    }}
                    className="px-4 py-1.5 border border-white/20 text-xs font-medium text-white rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Copier l&apos;adresse
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(
                      `mailto:djenmarlet@gmail.com?subject=Prise de contact portfolio&body=Nom: ${encodeURIComponent(
                        helloForm.name
                      )}%0D%0AEmail: ${encodeURIComponent(
                        helloForm.email
                      )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(helloForm.note)}`,
                      '_blank'
                    );
                    setHelloSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Marc K."
                        value={helloForm.name}
                        onChange={(e) => setHelloForm({ ...helloForm, name: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                        Votre Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="marc@domaine.com"
                        value={helloForm.email}
                        onChange={(e) => setHelloForm({ ...helloForm, email: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Votre Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Votre demande ou simple bonjour..."
                      value={helloForm.note}
                      onChange={(e) => setHelloForm({ ...helloForm, note: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-white/20 text-neutral-300 rounded-full text-xs font-medium hover:bg-white/10"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-neutral-200"
                    >
                      Envoyer par Email
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
