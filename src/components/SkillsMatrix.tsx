import { useState } from 'react';
import {
  Code2,
  Database,
  Smartphone,
  Globe2,
  Terminal,
  Compass,
  Languages,
  CheckCircle,
  Cpu,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-cyan-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-purple-400" />,
    Globe2: <Globe2 className="w-5 h-5 text-blue-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Compass: <Compass className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="competences" className="py-24 relative bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL TECHNIQUE &amp; SAVOIR-FAIRE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compétences &amp; Technologies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Un profil hybride rare combinant développement d&apos;applications à haute vélocité,
            sécurité sous Linux, intelligence artificielle et rigueur d&apos;ingénierie civile.
          </p>
        </div>

        {/* 6 Category Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                  {iconMap[category.iconName] || <Layers className="w-5 h-5 text-white" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{category.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs px-2.5 py-1 rounded-lg font-mono-tech transition-colors ${
                        skill.highlight
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium'
                          : 'bg-white/[0.03] text-neutral-300 border border-white/5'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multilingual & Work Environment Focus Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Work Environment */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>ENVIRONNEMENT DE TRAVAIL AUGMENTÉ</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Parrot OS, Claude Code &amp; Modèles d&apos;IA Locaux
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Mon poste de travail principal tourne sous <strong className="text-white">Parrot OS (Debian Linux)</strong>,
                garantissant un environnement sécurisé, orienté vie privée et optimisé pour le dev bas-niveau.
                J&apos;utilise quotidiennement <strong className="text-white">Claude Code</strong>, <strong className="text-white">Windsurf</strong> et
                <strong className="text-white"> LM Studio</strong> pour concevoir du code robuste plus rapidement avec une traçabilité totale.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06] text-xs font-mono-tech">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-neutral-500 block text-[10px]">OS Principal</span>
                <span className="text-emerald-400 font-semibold">Parrot OS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-neutral-500 block text-[10px]">Assistant Code</span>
                <span className="text-cyan-400 font-semibold">Claude Code</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-neutral-500 block text-[10px]">IDE Agentique</span>
                <span className="text-purple-400 font-semibold">Windsurf</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-neutral-500 block text-[10px]">Inférence LLM</span>
                <span className="text-amber-400 font-semibold">LM Studio</span>
              </div>
            </div>
          </div>

          {/* Languages & Editorial */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-purple-400 mb-2">
                <Languages className="w-4 h-4" />
                <span>POLYGLOTTE &amp; RÉDACTION INTERNATIONALE</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Communication &amp; Rédaction Trilingue
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Capable de rédiger des documentations techniques, des argumentaires marketing et de communiquer
                avec des clients internationaux en trois langues européennes.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {PORTFOLIO_DATA.profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 text-xs"
                >
                  <span className="font-semibold text-white">{lang.name}</span>
                  <span className="text-neutral-400 font-mono-tech">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
