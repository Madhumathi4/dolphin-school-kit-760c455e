import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import AboutPreview from "@/components/home/AboutPreview";
import Leadership from "@/components/home/Leadership";
import ImportantNotes from "@/components/home/ImportantNotes";
import AchievementsPreview from "@/components/home/AchievementsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import AdmissionCTA from "@/components/home/AdmissionCTA";
import MapSection from "@/components/home/MapSection";
import ContactInfo from "@/components/home/ContactInfo";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <AboutPreview />
        <Leadership />
        <ImportantNotes />
        <AchievementsPreview />
        <GalleryPreview />
        <AdmissionCTA />
        <MapSection />
        <ContactInfo />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Index;
