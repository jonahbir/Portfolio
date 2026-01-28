import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import ActivitiesSection from "./components/ActivitiesSection";
import CertificatesSection from "./components/CertificatesSection";
import BookSection from "./components/BookSection";
import BooksReadSection from "./components/BooksReadSection";
import ProjectGallery from "./components/ProjectGallery";
import TeachersSection from "./components/TeachersSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-midnight text-white min-h-screen">
      {/* Navigation would go here... */}
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <JourneySection />
      <SkillsSection />
      <ActivitiesSection />
      <CertificatesSection />
      <BookSection />
      <BooksReadSection />
      <ProjectGallery />
      <TeachersSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
