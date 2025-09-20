import SkillBox from "./SkillBox";

function SecondarySection() {
  return (
    <div className="flex items-start flex-col space-y-12">
      <h1 className="font-bold text-4xl">Familiar With</h1>
      <div className="flex flex-wrap gap-4 gap-x-7">
        <SkillBox title="Next.js">
          <i className="devicon-nextjs-plain text-3xl"></i>
        </SkillBox>
        <SkillBox title="Astro">
          <i className="devicon-astro-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Socket.IO">
          <i className="devicon-socketio-original text-3xl"></i>
        </SkillBox>
        <SkillBox title="Redis">
          <i className="devicon-redis-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Jest">
          <i className="devicon-jest-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Git">
          <i className="devicon-git-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Pino">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 flex-shrink-0"
            fill="#687634"
            style={{ verticalAlign: "middle" }}
          >
            <title>pino</title>
            <path d="m9.225 5.555 2.789 5.472 2.756-5.505L11.999 0M1.979 20.123h13.769v-.037L8.862 6.29m3.524 5.522 4.131 8.311h5.505L15.137 6.291M4.5 24h14.87l-1.554-3.188H6.056" />
          </svg>
        </SkillBox>
        <SkillBox title="Docker">
          <i className="devicon-docker-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="PostgreSQL">
          <i className="devicon-postgresql-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="MySQL">
          <i className="devicon-mysql-plain colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Vercel">
          <i className="devicon-vercel-original text-3xl"></i>
        </SkillBox>
        <SkillBox title="Railway">
          <i className="devicon-railway-original text-3xl"></i>
        </SkillBox>
        <SkillBox title="Figma">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            className="w-8 h-8 flex-shrink-0"
            alt="Figma"
          />
        </SkillBox>
        <SkillBox title="Spring">
          <i className="devicon-spring-original colored text-3xl"></i>
        </SkillBox>
        <SkillBox title="Python">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="w-8 h-8 flex-shrink-0"
            alt="Python"
          />
        </SkillBox>
        <SkillBox title="Java">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            className="w-8 h-8 flex-shrink-0"
            alt="Java"
          />
        </SkillBox>
      </div>
    </div>
  );
}

export default SecondarySection;
