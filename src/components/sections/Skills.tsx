import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SKILLS } from "../../strings";

const skillIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "React.js": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/react-native.png"
      alt="react-native"
    />
  ),
  "Next.js": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/nextjs.png"
      alt="nextjs"
      style={{ backgroundColor: "white", borderRadius: "8px" }}
    />
  ),
  TypeScript: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/typescript.png"
      alt="typescript"
    />
  ),
  JavaScript: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/javascript--v1.png"
      alt="javascript--v1"
    />
  ),
  "Node.js": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/node-js.png"
      alt="node-js"
    />
  ),
  "Express.js": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/ios/50/express-js.png"
      alt="express-js"
      className="bg-white p-3 rounded-lg"
    />
  ),
  MongoDB: () => (
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
      alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"
    />
  ),
  PostgreSQL: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/postgreesql.png"
      alt="postgreesql"
    />
  ),
  "Tailwind CSS": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/tailwind_css.png"
      alt="tailwind_css"
    />
  ),
  "Material UI": () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/material-ui.png"
      alt="material-ui"
    />
  ),
  Redux: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png"
      alt="external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo"
    />
  ),
  Git: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/git.png"
      alt="git"
    />
  ),
  Webpack: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/webpack.png"
      alt="webpack"
    />
  ),
  Vite: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/vite.png"
      alt="vite"
    />
  ),
};

const Skills = () => {
  return (
    <section>
      <div className="my-6 w-full">
        <h2 className="text-xl font-semibold">SKILLS</h2>
        <hr className="h-px bg-black border-0 my-2 dark:bg-white" />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {SKILLS.map((skill, index) => {
              const IconComponent = skillIcons[skill];
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-1">
                    <div className="p-4 rounded-lg text-center  transition-colors flex flex-col items-center gap-2">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      )}
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
