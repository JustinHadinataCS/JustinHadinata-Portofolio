import Button from "./Button";
import SkillBox from "./SkillBox";

function ProjectSection() {
  return (
    <div className="flex items-start flex-col space-y-12">
      <h1 className="font-bold text-4xl">My Projects</h1>

      <div className="w-full space-y-8">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h2 className="font-bold text-2xl">Focora</h2>
            <span className="text-gray-500 text-sm">19 September - now</span>
          </div>

          <div className="w-full bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Stop Juggling Apps.
              </h3>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Start Achieving Deep Work.
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                The first intelligent productivity tracker that unifies your
                tasks, timer, and focus habits.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium">
                Get Instant Early Access
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <SkillBox title="Express.js">
              <i className="devicon-express-original colored text-3xl"></i>
            </SkillBox>
            <SkillBox title="React">
              <i className="devicon-react-original colored text-3xl"></i>
            </SkillBox>
            <SkillBox title="MongoDB">
              <i className="devicon-mongodb-plain colored text-3xl"></i>
            </SkillBox>
          </div>

          <div className="space-y-4 flex flex-col items-start">
            <h3 className="font-bold text-xl">Smart Productivity Tracker</h3>
            <p className="text-gray-700 text-justify">
              A full-stack productivity application built for developers and
              professionals who want to achieve deep work. Features intelligent
              task management, focus tracking, and habit building. Built with
              modern MERN stack technologies and designed with a clean,
              intuitive interface.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="purple">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
              >
                <title>External Link</title>
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
              Live Link
            </Button>
            <Button variant="gray">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
