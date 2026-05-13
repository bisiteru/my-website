import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Dust & Wipes Limited Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: May 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Services</h2>
            <p>Dust & Wipes Limited provides professional cleaning and pest control services to residential and commercial clients across Abuja FCT, Nigeria. All services are subject to availability and a confirmed booking agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Booking & Cancellation</h2>
            <p>Bookings are confirmed upon agreement of service details and pricing. Cancellations made less than 24 hours before the scheduled service may incur a cancellation fee. We reserve the right to reschedule in cases of emergency or extreme weather.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Satisfaction Guarantee</h2>
            <p>If you are not satisfied with any aspect of our service, please notify us within 24 hours of service completion. We will return to remedy the issue at no additional charge, subject to our assessment.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Liability</h2>
            <p>While we take every precaution, Dust & Wipes Limited shall not be liable for pre-existing damage or damage resulting from following client instructions. Our liability is limited to the cost of the service provided.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact</h2>
            <p>For service-related enquiries, contact us at info@dustandwipes.com or +234 806 000 0000.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
