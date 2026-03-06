import { motion } from "motion/react";
import { Send, MessageCircle, ExternalLink, Shield, Zap, Globe } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center font-sans overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full max-w-md min-h-screen bg-[#0a0a0a] flex flex-col z-10 shadow-2xl sm:border-x sm:border-zinc-800/50"
      >
        {/* App Content */}
        <div className="flex-1 px-6 py-12 flex flex-col justify-center">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl font-black tracking-tighter italic uppercase bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-none mb-2">
                XPANEL
              </h1>
              <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-3" />
              <p className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase">Digital Hub v2.0</p>
            </motion.div>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            {/* Telegram Card */}
            <motion.a
              href="https://t.me/+Kgd26o643BBmNzc9"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="group relative block w-full rounded-3xl bg-zinc-900/50 border border-white/5 p-6 overflow-hidden transition-all active:bg-zinc-800/50"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Send className="w-7 h-7 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Telegram</span>
                    <ExternalLink className="w-4 h-4 text-zinc-600" />
                  </div>
                  <h2 className="text-xl font-bold text-white">FREE PANEL</h2>
                  <p className="text-zinc-500 text-xs line-clamp-1">Join for instant updates & tools</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                <div className="flex gap-3">
                  <Zap className="w-3 h-3 text-zinc-600" />
                  <Shield className="w-3 h-3 text-zinc-600" />
                  <Globe className="w-3 h-3 text-zinc-600" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase">Active Community</span>
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/8801646414859"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="group relative block w-full rounded-3xl bg-zinc-900/50 border border-white/5 p-6 overflow-hidden transition-all active:bg-zinc-800/50"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">WhatsApp</span>
                    <ExternalLink className="w-4 h-4 text-zinc-600" />
                  </div>
                  <h2 className="text-xl font-bold text-white uppercase">ROOT SERVICE</h2>
                  <p className="text-zinc-500 text-xs line-clamp-1">Premium root & direct support</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-emerald-400 uppercase">Support Online</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase">24/7 Response</span>
              </div>
            </motion.a>
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
              <p className="text-[9px] font-mono text-zinc-600 uppercase mb-1">Security</p>
              <p className="text-xs font-bold text-white">End-to-End</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5">
              <p className="text-[9px] font-mono text-zinc-600 uppercase mb-1">Uptime</p>
              <p className="text-xs font-bold text-white">99.9% Live</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-10 text-center">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
            XPANEL DIGITAL &copy; {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>

      {/* Footer Label (Outside Phone) */}
      <div className="fixed bottom-6 left-0 right-0 text-center pointer-events-none opacity-20 hidden sm:block">
        <p className="text-[10px] font-mono text-white uppercase tracking-[0.5em]">
          XPANEL MOBILE INTERFACE &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
