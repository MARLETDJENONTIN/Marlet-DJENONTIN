import { useState } from 'react';
import {
  FileSpreadsheet,
  X,
  Check,
  Sparkles,
  MessageCircle,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface InteractiveDevisEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  baseDays: string;
  category: string;
  desc: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'web-app',
    name: 'Application Web Full-Stack',
    baseDays: '2 à 4 semaines',
    category: 'React / Vite / Node',
    desc: 'Plateforme interactive, tableau de bord, API REST et architecture moderne.',
  },
  {
    id: 'mobile-app',
    name: 'Application Mobile (iOS / Android)',
    baseDays: '3 à 6 semaines',
    category: 'React Native / Flutter',
    desc: 'Application cross-platform, fluide, utilisable hors-ligne et optimisée pour les réseaux africains.',
  },
  {
    id: 'momo-fintech',
    name: 'Système de Vote ou Paiement MTN MoMo',
    baseDays: '1 à 3 semaines',
    category: 'Fintech & Webhooks',
    desc: 'Intégration directe de Mobile Money Bénin/Afrique, contrôle des transactions et anti-fraude.',
  },
  {
    id: 'ecommerce',
    name: 'Boutique E-commerce Haute Conversion',
    baseDays: '1 à 3 semaines',
    category: 'React / Vercel / Stripe',
    desc: 'Site vitrine ou e-commerce ultra-rapide (Score 98+ Lighthouse), tunnel d’achat frictionless.',
  },
  {
    id: 'qgis-sig',
    name: 'Étude SIG, Cartographie & Plans DXF',
    baseDays: '1 à 2 semaines',
    category: 'QGIS / AutoCAD / KoBoToolbox',
    desc: 'Collecte géolocalisée sur smartphone, plans techniques PDF/DXF et analyse spatiale.',
  },
];

interface AddonOption {
  id: string;
  name: string;
  desc: string;
}

const ADDONS: AddonOption[] = [
  {
    id: 'momo',
    name: 'Passerelle MTN Mobile Money',
    desc: 'Paiement direct USSD push sans redirection bancaire',
  },
  {
    id: 'auth',
    name: 'Authentification JWT & Rôles',
    desc: 'Gestion des comptes, profils utilisateurs et sécurité',
  },
  {
    id: 'ai',
    name: 'Agent IA ou Inférence LLM',
    desc: 'Analyse automatique, génération de contenu ou parsing',
  },
  {
    id: 'i18n',
    name: 'Support Multilingue (FR / EN / IT / DE)',
    desc: 'Internationalisation complète de l’interface',
  },
  {
    id: 'supabase',
    name: 'Base PostgreSQL / Supabase Managée',
    desc: 'Stockage cloud scalable avec synchronisation temps réel',
  },
  {
    id: 'devops',
    name: 'Déploiement Cloud & Configuration DNS/SSL',
    desc: 'Mise en ligne sur Vercel/Railway avec nom de domaine propre',
  },
];

export function InteractiveDevisEstimator({
  isOpen,
  onClose,
}: InteractiveDevisEstimatorProps) {
  const [selectedType, setSelectedType] = useState<string>('web-app');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'momo',
    'auth',
    'devops',
  ]);
  const [clientName, setClientName] = useState('');
  const [clientNote, setClientNote] = useState('');

  if (!isOpen) return null;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType =
    PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];

  const handleSendWhatsApp = () => {
    const selectedAddonsNames = ADDONS.filter((a) =>
      selectedAddons.includes(a.id)
    )
      .map((a) => `- ${a.name}`)
      .join('\n');

    const message = `Bonjour Marlet,\n\nJe vous contacte suite à la simulation DQE sur votre portfolio.\n\n*Projet souhaité :* ${currentType.name}\n*Délai estimé :* ${currentType.baseDays}\n*Options choisies :*\n${selectedAddonsNames}\n${
      clientName ? `\n*Mon nom :* ${clientName}` : ''
    }${clientNote ? `\n*Précisions :* ${clientNote}` : ''}\n\nJ'aimerais échanger avec vous pour affiner le devis et planifier un premier cadrage. Merci !`;

    const url = `https://wa.me/22945563069?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c1017] border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Simulateur Devis &amp; DQE Projet
                </h3>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Rigueur BTP appliquée au Code
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Chiffrez votre besoin avec clarté. Aucun flou artistique, des livrables
                définis.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors cursor-pointer shrink-0 ml-3"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step 1: Type of project */}
        <div className="space-y-4 mb-6">
          <label className="block text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
            1. Sélectionnez la nature de votre ouvrage
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedType === type.id
                    ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                    : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold">{type.name}</span>
                  <span className="text-[10px] font-mono-tech text-emerald-400">
                    {type.baseDays}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Specific modules & addons */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
            2. Options techniques &amp; intégrations requises
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ADDONS.map((addon) => {
              const active = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-lg text-left border transition-all flex items-start gap-2.5 cursor-pointer ${
                    active
                      ? 'bg-amber-500/10 border-amber-500/40 text-white'
                      : 'bg-black/30 border-white/5 text-neutral-400 hover:bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 text-[10px] ${
                      active ? 'bg-amber-400 text-black font-bold' : 'border border-neutral-600'
                    }`}
                  >
                    {active && '✓'}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">{addon.name}</div>
                    <div className="text-[10px] text-neutral-400 leading-tight">
                      {addon.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Brief info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1">
              Votre Nom / Entreprise (Optionnel)
            </label>
            <input
              type="text"
              placeholder="Ex: Koffi Mensah / Start-up"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1">
              Précision ou date cible
            </label>
            <input
              type="text"
              placeholder="Ex: Lancement prévu d'ici 3 semaines"
              value={clientNote}
              onChange={(e) => setClientNote(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-amber-950/20 border border-emerald-500/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-emerald-400">
              SYNTHÈSE DU CAHIER DES CHARGES
            </span>
            <div className="text-sm font-bold text-white">{currentType.name}</div>
            <div className="text-xs text-neutral-300">
              {selectedAddons.length} option(s) sélectionnée(s) · Délai indicatif :{' '}
              <strong className="text-emerald-400">{currentType.baseDays}</strong>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer self-start sm:self-auto"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Envoyer à Marlet sur WhatsApp</span>
          </button>
        </div>

        <div className="text-center text-[11px] text-neutral-500">
          Chiffrage indicatif sans engagement. Réponse garantie sous 24h ouvrées.
        </div>
      </div>
    </div>
  );
}
