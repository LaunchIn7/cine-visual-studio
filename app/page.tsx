
import VideoBackground from "@/components/VideoSection";
import ServicesSection from "@/components/Services";
import OurWorkGallery from "@/components/Works";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rahul Nag - Professional Photographer in Sydney | Wedding & Portrait Photography",
  description: "Award-winning photographer Rahul Nag specializes in wedding, portrait, and event photography in Sydney. 5+ years experience, 200+ satisfied clients. Book your session today!",
  alternates: {
    canonical: "https://cinevisualstudio.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" aria-label="Hero section">
        <VideoBackground/>
      </section>
      
      {/* Services Section */}
      <section id="services" aria-label="Photography services">
        <h1 className="sr-only">Professional Photography Services in Sydney</h1>
        <ServicesSection/>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" aria-label="Photography portfolio">
        <h2 className="sr-only">Our Photography Work and Portfolio</h2>
        <OurWorkGallery/>
      </section>
      
      {/* About Section */}
      <section id="about" aria-label="About Rahul Nag">
        <h2 className="sr-only">About Rahul Nag - Professional Photographer</h2>
        <AboutSection/>
      </section>
      
      {/* Contact Section */}
      <section id="contact" aria-label="Contact information">
        <h2 className="sr-only">Contact Rahul Nag Photography</h2>
        <ContactSection/>
      </section>
    </main>
  );
}
