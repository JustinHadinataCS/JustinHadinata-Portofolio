import AboutMeSection from "./AboutMeSection";
import HeroPage from "./HeroPage";
import PrimarySection from "./PrimarySection";
import ProjectSection from "./ProjectSection";
import SecondarySection from "./SecondarySection";

function AppLayout() {
  return (
    <>
      <HeroPage />
      <AboutMeSection />
      <div className="mx-auto max-w-lg mt-24">
        <div className="w-full space-y-24 ">
          <ProjectSection />
          <PrimarySection />
          <SecondarySection />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
