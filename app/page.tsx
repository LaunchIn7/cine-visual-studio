
import VideoBackground from "@/components/VideoSection";
import ServicesSection from "@/components/Services";
import OurWorkGallery from "@/components/Works";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <VideoBackground/>
      <ServicesSection/>
      <OurWorkGallery/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}
