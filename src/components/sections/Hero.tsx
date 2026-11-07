import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#f4f3ee] text-[#173627]" aria-labelledby="home-heading">
      <div className="mx-auto grid max-w-7xl lg:min-h-[700px] lg:grid-cols-[1.04fr_0.96fr]">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0b8441]">
            <span className="h-px w-8 bg-[#0b8441]" aria-hidden="true" />
            Dust &amp; Wipes Limited · Abuja &amp; Lagos
          </p>
          <h1 id="home-heading" className="max-w-[13ch] font-[family-name:var(--font-display)] text-[clamp(3.2rem,6.2vw,6.5rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
            Better care for spaces that matter.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#486052]">
            Professionally managed cleaning and practical staff training for homes, workplaces and hospitality spaces in Abuja and Lagos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#0b8441] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#076634] active:scale-[0.98]">
              Discuss your requirements <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/training" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#9cb2a4] px-6 py-3 font-semibold text-[#173627] transition-colors hover:bg-white active:scale-[0.98]">
              Explore training <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-12 border-t border-[#cbd8ce] pt-5 text-sm text-[#496557]">
            Cleaning services · In-house team training · Site-specific plans
          </p>
        </div>
        <div className="relative min-h-[440px] overflow-hidden bg-[#d3d9d4] lg:min-h-full">
          <Image src="/images/glass-partition-cleaning.jpg" alt="Dust & Wipes team member cleaning glass partitions in a workplace" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-center" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#081e12]/80 to-transparent p-6 pt-16 text-sm text-white sm:p-9">
            Thoughtful service, delivered by people who know their work.
          </div>
        </div>
      </div>
    </section>
  );
}
