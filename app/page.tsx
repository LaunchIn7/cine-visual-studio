import Image from "next/image";
import styles from "./page.module.css";
import VideoBackground from "@/components/VideoSection";
import ServicesSection from "@/components/Services";
import OurWorkGallery from "@/components/Works";

export default function Home() {
  return (
    <div>
      <VideoBackground/>
      <ServicesSection/>
      <OurWorkGallery/>
    </div>
  );
}
