import { useState } from 'react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Phone,
  Smartphone,
  CreditCard,
  TrendingUp,
  Map,
  Palette,
  Send,
  MessageCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenEstimator: () => void;
}

export function ProjectsSection({ onOpenEstimator }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter categories
  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web-fullstack', label: 'Web & Fintech (MoMo)' },
    { id: 'ai-trading', label: 'IA & Finance' },
    { id: 'geomatic-civil', label: 'SIG & Génie Civil' },
    { id: 'branding-strategy', label: 'EHC & Branding' },
    { id: 'marketing-content', label: 'Marketing & Ads' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projets" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>RÉALISATIONS &amp; TRAVAUX CONCRETS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projets sélectionnés
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Applications en production, intégrations de passerelles de paiement africaines (MTN MoMo),
              systèmes d&apos;IA, missions e-commerce haute conversion et cartographie SIG de terrain.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEstimator}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all self-start md:self-auto cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estimer un projet similaire</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento / Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              onClick={() => setActiveProject(project)}
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-mono-tech text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key feature preview */}
                <div className="space-y-1.5 mb-5 text-xs text-neutral-300">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 text-xs mt-0.5">▪</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-4 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono-tech text-neutral-300 bg-white/[0.04] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[10px] text-neutral-500 font-mono-tech self-center">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 pt-1 group-hover:translate-x-1 transition-transform">
                  <span>Détails &amp; architecture →</span>
                  <span className="text-neutral-500 text-[11px] font-normal">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#0e121b] border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {activeProject.categoryLabel}
                  </span>
                  {activeProject.badge && (
                    <span className="text-xs text-neutral-400 bg-white/5 px-2 py-0.5 rounded font-mono-tech">
                      {activeProject.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">{activeProject.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer shrink-0 ml-4"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Detailed narrative */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono-tech mb-2">
                  Contexte &amp; Réalisation
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Rôle & Métriques */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[11px] text-neutral-400 font-mono-tech block mb-1">
                    Rôle de Marlet Djenontin
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {activeProject.role}
                  </span>
                </div>
                {activeProject.metrics && (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-[11px] text-neutral-400 font-mono-tech block mb-1">
                      Impact &amp; Performance
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      {activeProject.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Functional Points */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono-tech mb-3">
                  Fonctionnalités &amp; Spécifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2 text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono-tech mb-2.5">
                  Technologies Déployées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-white/[0.05] border border-white/10 text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Specific Preview / Simulation */}
              {activeProject.id === 'momo-mvp-caf' && (
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CreditCard className="w-4 h-4" />
                    <span>Focus Passerelle : Flux MTN Mobile Money Bénin/Afrique</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Le système déclenche une requête USSD push directe sur le numéro de l&apos;utilisateur
                    (ex: MTN Bénin *400#) avec confirmation PIN sécurisée côté opérateur et webhook
                    instantané sans redirection externe bancaire.
                  </p>
                </div>
              )}

              {activeProject.id === 'ai-chartist-agent' && (
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Focus R&amp;D : Inférence Locale &amp; Hybride</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Exécution d&apos;inférences légères sous LM Studio pour l&apos;analyse géométrique
                    et escalade vers Claude Code / OpenRouter pour l&apos;analyse macro et la rédaction
                    des fiches de décision boursières.
                  </p>
                </div>
              )}

              {activeProject.id === 'qgis-gbetagbo' && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Map className="w-4 h-4" />
                    <span>Focus Terrain : Chaîne SIG Complète</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Du formulaire KoBoToolbox sur mobile à la génération de plans d&apos;exécution DXF
                    pour AutoCAD, en passant par les rasters géoréférencés et l&apos;analyse spatiale.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-neutral-400 font-mono-tech">
                  Intéressé par une réalisation similaire ?
                </span>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(null);
                      onOpenEstimator();
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all cursor-pointer"
                  >
                    Estimer le coût
                  </button>
                  <a
                    href={`https://wa.me/22945563069?text=${encodeURIComponent(
                      `Bonjour Marlet, j'ai vu votre projet "${activeProject.title}" sur votre portfolio et je souhaite discuter d'un besoin similaire.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Contacter Marlet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
