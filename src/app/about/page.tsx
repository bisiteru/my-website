import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dust & Wipes",
  description: "Founder Bisi Teru shares why he started Dust & Wipes in Abuja in 2017, and how that purpose guides cleaning and staff training in Abuja and Lagos.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f4f3ee] py-20 text-[#173627] sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="section-eyebrow">About Dust &amp; Wipes</p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[1.06] tracking-[-0.04em]">Why I started Dust &amp; Wipes.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#486052]">It began with conversations I could not ignore. They changed how I saw cleaning, and why I built this company.</p>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28" aria-labelledby="story-heading">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#d3d9d4]">
            <Image src="/images/founder-photo.jpg" alt="Bisi Teru, founder of Dust & Wipes Limited" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div>
            <p className="section-eyebrow">Our story</p>
            <h2 id="story-heading" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">It began with listening.</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[#53645a]">
              <p>I spent many years as an Information Technology consultant and manager for government agencies, international NGOs and corporate organisations. In those workplaces, I saw how much cleaners contributed to daily life, and how easily their work was overlooked.</p>
              <p>In 2016, while working full-time as an IT manager, I got to know the cleaners in my organisation. I listened to their stories, struggles and aspirations. The wider pattern I had seen became impossible to ignore: difficult conditions, little training, delayed pay and work that was too often undervalued.</p>
              <p>Those conversations opened my eyes. Cleaning was more than a service. It was a chance to care for the spaces people depend on while creating better opportunities for the people doing the work.</p>
              <p>I founded Dust &amp; Wipes in Abuja in 2017 with both commitments in mind. I wanted clients to receive dependable, professional cleaning from well-trained people. I also wanted cleaners to be treated with dignity, respect and fairness. Those commitments belong together.</p>
              <p>Today, our Abuja operation and Lagos office give us a base for conversations with homes, hospitality teams, institutions and workplaces seeking thoughtful cleaning and staff development. That includes practical training for organisations&apos; directly employed cleaners and supervisors. I carry the same belief into every conversation: the people behind the work always matter.</p>
              <blockquote className="border-l-2 border-[#0b8441] pl-6 font-[family-name:var(--font-display)] text-2xl leading-snug text-[#173627]">I am privileged to lead a family of dedicated professionals whom I proudly call my brothers and sisters.</blockquote>
              <p className="text-base font-semibold text-[#173627]">Bisi Teru <span className="block text-sm font-normal text-[#53645a]">Founder &amp; CEO, Dust &amp; Wipes Limited</span></p>
            </div>
            <Link href="/training" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-[#0b8441] hover:underline underline-offset-4">Explore our training approach <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="bg-[#173627] py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d0b8]">Work with us</p><h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold sm:text-5xl">A considered approach starts with a conversation.</h2></div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start rounded-md bg-white px-6 py-3 font-semibold text-[#173627] hover:bg-[#e9f2eb] active:scale-[0.98]">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
