import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Dust & Wipes Limited Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: May 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us through our contact form, including your name, phone number, email address, and service requirements. We use this information solely to respond to your enquiries and provide our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>Your personal information is used to respond to enquiries, provide quotes, schedule services, and communicate service updates. We do not sell, trade, or rent your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h2>
            <p>For any privacy-related questions, please contact us at info@dustandwipes.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
