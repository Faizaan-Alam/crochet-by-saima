import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Creations } from "@/components/Creations";
import { CustomOrders } from "@/components/CustomOrders";
import { FeaturedCreations } from "@/components/FeaturedCreations";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  telephone: "+919910638880",
  areaServed: "IN",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Creations />
        <FeaturedCreations />
        <About />
        <CustomOrders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
