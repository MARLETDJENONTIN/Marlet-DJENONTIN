import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ExperienceTimeline() {
  return (
    <section id="parcours" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAJECTOIRE &amp; EXPÉRIENCES DE TERRAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Parcours Professionnel &amp; Formation
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            De la gestion de chantier BTP et du recensement cartographique au développement logiciel
            full-stack et à la direction d&apos;agence hôtelière.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={exp.role + exp.company} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080a0f] border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] group-hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono-tech mt-1">
                      <span className="text-white font-medium">{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/[0.04] border border-white/10 text-neutral-300">
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Missions List */}
                <div className="pt-4 space-y-2.5">
                  {exp.missions.map((mission, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <span className="text-emerald-400 text-xs mt-1 shrink-0">▪</span>
                      <span className="leading-relaxed">{mission}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="pt-5 flex flex-wrap gap-1.5 border-t border-white/[0.04] mt-5">
                  {exp.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-white/[0.03] text-neutral-400 border border-white/5"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Formations Strip */}
        <div className="mt-20 pt-12 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-400 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>DIPLÔME &amp; FORMATION CONTINUE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.diploma}
                className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3"
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="text-base font-bold text-white">{edu.diploma}</h4>
                  <span className="text-xs font-mono-tech text-emerald-400">{edu.school}</span>
                </div>
                <div className="text-xs text-neutral-400 font-mono-tech">{edu.location}</div>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
