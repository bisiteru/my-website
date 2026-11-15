import { CtaBand } from "@/components/ui/Blocks";

/**
 * Kept as a thin alias so the four pages that already import CTABanner render
 * the same restrained band as everywhere else. The previous implementation
 * layered a grain texture, a grid overlay and two blurred colour glows over a
 * gradient — decorative effects the rest of the system does not use.
 */
export default function CTABanner() {
  return <CtaBand />;
}
