import Space from "./Space";

function HeroPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="flex justify-center items-center w-full space-x-5 py-4">
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <button className="px-4 py-1 bg-black text-white rounded-md text-center leading-normal">
          Let's talk
        </button>
      </nav>
      <div className="flex-1 px-8 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center mt-10">
                <h1 className="text-8xl mb-2 font-bold">Hi, I'm Justin</h1>
                <h2 className="text-5xl font-semibold">A Software Engineer</h2>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Space />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
