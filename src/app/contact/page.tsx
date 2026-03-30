import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import InfoCards from "@/components/contact/InfoCards";
import MapSection from "@/components/contact/MapSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a tattoo session or get in touch with us.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
              Ready to start your next piece? Drop us a line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <InfoCards />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
