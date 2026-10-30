import {
  Compass,
  Building2,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  Award,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Share2,
  QrCode,
  ShieldAlert,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function CivilEngineeringAndEHC() {
  return (
    <section id="genie-civil" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>DOUBLE EXPERTISE · STRUCTURE &amp; STRATÉGIE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Génie Civil, BTP &amp; Direction Opérationnelle EHC
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            La programmation n&apos;est pas une théorie abstraite : c&apos;est de la construction.
            Découvrez comment mon expérience de terrain en génie civil et mon rôle d&apos;adjoint
            dans le conseil en hôtellerie enrichissent chaque projet digital.
          </p>
        </div>

        {/* 2-Column Split: Génie Civil (Left) vs EHC Agency (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Column 1: Génie Civil & BTP */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Technicien Supérieur en Génie Civil
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono-tech">
                      HND / BTS · Polytech Ada (Cotonou, Bénin)
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  BTP &amp; SIG
                </span>
              </div>

              {/* Expérience OBJECTIF CONSTRUCTION */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-semibold text-white">
                    OBJECTIF CONSTRUCTION Bénin
                  </h4>
                  <span className="text-[11px] font-mono-tech text-amber-400">
                    24/11/2023 – 23/05/2024
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Conduite de travaux sur chantier réel, pilotage des équipes et contrôle strict des normes de sécurité et de conformité structurelle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Implantation bâtiments &amp; semelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Coordination coulage béton armé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Attachements &amp; décomptes sous-traitants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Dossiers d&apos;appels d&apos;offres &amp; DQE</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Suivi-contrôle des travaux sur infrastructures éducatives</span>
                  </div>
                </div>
              </div>

              {/* Cartographie censitaire & Logiciels */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">
                    Chef d&apos;équipe en cartographie censitaire
                  </span>
                  <span className="text-[10px] font-mono-tech text-neutral-400">Terrain SIG</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Coordination d&apos;enquêteurs cartographes, vérification des découpages spatiaux et géoréférencement.
                </p>
              </div>

              {/* Logiciels BTP */}
              <div className="pt-2">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 block mb-2">
                  Logiciels &amp; Méthodes de Chantier
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-200">
                    AutoCAD
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-200">
                    ArchiCAD
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-200">
                    QGIS
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-200">
                    KoBoToolbox
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-200">
                    Métrés &amp; DQE
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400 italic">
              « Dans le code comme sur le chantier, un bug dans les fondations ne se répare pas avec une couche de peinture. »
            </div>
          </div>

          {/* Column 2: Élite Hospitality Consulting (EHC) */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Élite Hospitality Consulting (EHC)
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono-tech">
                      Responsable Adjoint · Conseil Hôtellerie &amp; Événementiel
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Direction &amp; Brand
                </span>
              </div>

              {/* Branding vert & or narrative */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/30 to-amber-950/20 border border-emerald-500/20 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold text-white">
                    Identité de Marque de Prestige : Vert &amp; Or
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Conception complète de la charte graphique et des supports de l&apos;agence.
                  Création d&apos;une présence raffinée reflétant les plus hauts standards de l&apos;hôtellerie de luxe et de l&apos;accueil d&apos;honneur au Bénin.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 pt-1">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Cartes de visite avec QR codes connectés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Flyers et affiches de recrutement hôtelier</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Rédaction de discours d&apos;accueil et protocoles PDF</span>
                  </div>
                </div>
              </div>

              {/* Rôle managérial */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-xs font-semibold text-white block">
                  Responsabilités de Direction Adjointe
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Coordination opérationnelle des missions de conseil, structuration des équipes de service lors des grands événements, relations avec les directeurs d&apos;établissements et suivi de la qualité d&apos;exécution.
                </p>
              </div>

              {/* Impact */}
              <div className="pt-2">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 block mb-2">
                  Piliers de Valeur EHC
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Conseil Hôtelier
                  </span>
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Événementiel VIP
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/10">
                    Recrutement &amp; Staffing
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/10">
                    Standards d&apos;Accueil
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400">
              « L&apos;expérience utilisateur numérique et l&apos;accueil d&apos;un client dans un palace reposent sur la même exigence : zéro friction. »
            </div>
          </div>
        </div>

        {/* Marketing Digital, Contenu & Passions Strip */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-wider">
                COMMUNICATION, ACQUISITION &amp; PASSIONS
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Marketing Digital, Création de Contenu &amp; Esprit d&apos;Équipe
              </h3>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/[0.05] border border-white/10 text-neutral-300">
                Basketball 🏀
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/[0.05] border border-white/10 text-neutral-300">
                Open Source 🐧
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.marketingAndContent.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2"
              >
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-emerald-400">
                  {item.tag}
                </span>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
