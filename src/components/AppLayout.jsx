import AboutMePicture from "../assets/AboutMePicture.png";
import Button from "./Button";
import HeroPage from "./HeroPage";
function AppLayout() {
  return (
    <>
      <HeroPage />
      <div className="mx-auto max-w-lg">
        <div className="w-full space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-4xl">Justin Hadinata</h1>
              <h2 className="font-medium text-gray-500 text-lg">
                Focused on MERN stack
              </h2>
            </div>
            <div className="flex-shrink-0 relative rounded-full">
              <img
                src={AboutMePicture}
                alt="Profile picture"
                className="w-24 h-24 object-cover rounded-full  shadow-lg"
              />
              <div className="absolute bottom-1 right-4 w-2.5 h-2.5 bg-green-500  rounded-full"></div>
            </div>
          </div>

          <div className="flex space-y-5 flex-col items-start text-justify text-black text-lg">
            <h1>
              Haloo👋🏻 -{" "}
              <span className="font-bold">I’m a full stack developer</span> bla
              bla who likes to build full-stack applications. I'm a 19-year-old
              undergraduate student with expertise in React, and I'm also
              proficient in backend technologies like Node.js, Express, and
              Django. I’m a full stack developer bla bla who likes to build
              full-stack applications. I'm a 19-year-old undergraduate student
              with expertise in React, and I'm also proficient in backend
              technologies like Node.js, Express, and Django.
            </h1>
            <div className="flex space-x-4">
              <Button variant="purple">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  style={{ verticalAlign: "middle" }}
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <>Github</>
              </Button>
              <Button variant="purple">Github</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-lg mt-24">
        <div className="w-full space-y-24 ">
          <div className="flex items-start flex-col space-y-12">
            <h1 className="font-bold text-4xl">Primary Skills</h1>
            <div className="flex flex-col space-y-12">
              <div className="flex space-x-5 text-5xl ">
                <div className="flex flex-col space-y-2">
                  <i class="devicon-react-original colored"></i>
                  <p className="text-sm text-gray-500">React</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <i class="devicon-tailwindcss-original colored"></i>
                  <p className="text-sm text-gray-500">Tailwind</p>
                </div>
                <i class="devicon-typescript-plain colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-zustand-plain colored"></i>
                <i class="devicon-reactrouter-plain colored"></i>
                <div className="flex flex-col space-y-2">
                  <i class="devicon-redux-original colored"></i>
                  <p className="text-sm text-gray-500">Redux Toolkit</p>
                </div>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 flex-shrink-0"
                  fill="#FF4154"
                  style={{ verticalAlign: "middle" }}
                >
                  <title>React Query</title>
                  <path d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z" />
                </svg>
              </div>
              <div className="flex space-x-5 text-5xl">
                <i class="devicon-express-original colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col space-y-12">
            <h1 className="font-bold text-4xl">Familiar With</h1>
            <div className="flex flex-col space-y-12">
              <div className="flex space-x-5 text-5xl">
                <i class="devicon-nextjs-plain colored"></i>
                <i class="devicon-astro-plain colored"></i>
                <i class="devicon-socketio-original colored"></i>
                <i class="devicon-redis-plain colored"></i>
                <i class="devicon-jest-plain colored"></i>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 flex-shrink-0"
                  fill="#687634"
                  style={{ verticalAlign: "middle" }}
                >
                  <title>pino</title>
                  <path d="m9.225 5.555 2.789 5.472 2.756-5.505L11.999 0M1.979 20.123h13.769v-.037L8.862 6.29m3.524 5.522 4.131 8.311h5.505L15.137 6.291M4.5 24h14.87l-1.554-3.188H6.056" />
                </svg>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-docker-plain-wordmark colored"></i>
              </div>
              <div className="flex space-x-5 text-5xl">
                <i class="devicon-postgresql-plain-wordmark colored"></i>
                <i class="devicon-mysql-plain-wordmark colored"></i>
                <i class="devicon-vercel-original colored"></i>
                <i class="devicon-railway-original "></i>

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                  className="w-12 h-12 flex-shrink-0"
                />
                <i class="devicon-spring-original colored"></i>

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-12 h-12 flex-shrink-0"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  className="w-12 h-12 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
