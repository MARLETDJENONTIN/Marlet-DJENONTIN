import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Send,
  MapPin,
  Globe2,
  Clock,
  Sparkles,
  ArrowUp,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenEstimator: () => void;
}

export function ContactSection({ onOpenEstimator }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format a mailto link or prepare message
    const subject = encodeURIComponent(formData.subject || 'Nouveau projet portfolio');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`, '_blank');
    setMessageSent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 relative bg-[#07090d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <Mail className="w-3.5 h-3.5" />
              <span>DISPONIBILITÉ IMMÉDIATE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Donnons vie à votre prochain <span className="text-gradient-emerald">chantier digital</span>
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Que vous ayez besoin d&apos;une application web/mobile complète, de l&apos;intégration
              sécurisée de paiements <strong className="text-white">MTN MoMo</strong>, d&apos;un agent IA,
              ou d&apos;une étude de cartographie SIG, je suis joignable directement.
            </p>

            {/* Quick contact direct cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono-tech">WhatsApp Direct</div>
                    <div className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.profile.whatsapp}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    title="Copier le numéro"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={PORTFOLIO_DATA.profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    Ouvrir
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono-tech">Adresse Email</div>
                    <div className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.profile.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    title="Copier l'email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Écrire
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Cotonou / Abomey-Calavi, Bénin (UTC+1 / WAT)</span>
                </div>
                <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Actif
                </span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Envoyer un message direct</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Remplissez ce formulaire pour initialiser un échange par mail ou WhatsApp.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Besoin d&apos;un DQE ?</span>
                </button>
              </div>

              {messageSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-black flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white">Message initialisé !</h4>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    Votre client de messagerie s&apos;est ouvert pour transmettre les détails.
                    Vous pouvez également m&apos;écrire directement sur WhatsApp pour une réponse encore plus rapide.
                  </p>
                  <a
                    href={PORTFOLIO_DATA.profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contacter sur WhatsApp (+229 45 56 30 69)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1.5">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean Paul"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1.5">
                        Votre Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jean@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1.5">
                      Sujet de votre demande
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Intégration MTN MoMo pour site e-commerce / Application Mobile"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-1.5">
                      Description de votre besoin
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Décrivez votre projet, vos objectifs, les fonctionnalités attendues et vos contraintes de délai..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-neutral-500 font-mono-tech">
                      Réponse garantie sous 24h ouvrées
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmettre le message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">Marlet Djenontin</span>
            <span>·</span>
            <span>Développeur Full-Stack &amp; Génie Civil</span>
            <span>·</span>
            <span>Cotonou, Bénin 🇧🇯</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Environnement Parrot OS 🐧</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
