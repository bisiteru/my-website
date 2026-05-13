import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🧹</div>
        <h1 className="text-6xl font-black text-white mb-3">404</h1>
        <h2 className="text-2xl font-bold text-white/80 mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-sm mx-auto">
          Looks like this page has been swept away. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#dd4c2f] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#b83d25] transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
