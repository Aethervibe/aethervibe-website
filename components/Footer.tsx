export default function Footer() {
  return (
    <footer className="bg-[#0F1F3D] text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <div className="text-xl font-bold text-white mb-2">
              Aether<span className="text-emerald-400">vibe</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              The ITC transfer platform connecting clean energy developers with qualified corporate tax buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#for-sellers" className="hover:text-white transition-colors">For Developers</a>
            <a href="#for-buyers" className="hover:text-white transition-colors">For Buyers</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <span>© 2026 Aethervibe · Powered by Aethermind LLC</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
