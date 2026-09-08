import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MediaSection } from './components/MediaSection';
import { FacilitatorSection } from './components/FacilitatorSection';
import { FacultySection } from './components/FacultySection';
import { AIBuilderSection } from './components/AIBuilderSection';
import { AuthorSection } from './components/AuthorSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <FacilitatorSection />
      <FacultySection />
      <AIBuilderSection />
      <AuthorSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

export default App;
