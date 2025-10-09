import { EDUCATIONS } from "@/strings";

const Educations = () => {
  return (
    <section>
      <div className="mb-4 w-full">
        <h2 className="text-xl font-semibold">EDUCATIONS</h2>
        <hr className="h-px bg-black border-0 my-2 dark:bg-white" />
      </div>

      {EDUCATIONS.map((edu, index) => (
        <div
          key={index}
          className="flex items-start justify-between md:contents mt-2"
        >
          <div className="md:col-start-1 md:col-span-8">
            <p className="text-l font-semibold text-gray-800 dark:text-white">
              {edu.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {edu.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Educations;
