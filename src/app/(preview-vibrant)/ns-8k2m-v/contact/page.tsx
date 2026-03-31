import ContactForm from "@/components/contact/ContactForm";
import InfoCards from "@/components/contact/InfoCards";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
            Ready to start your next piece? Drop us a line.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
            <ContactForm />
            <InfoCards />
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
}
