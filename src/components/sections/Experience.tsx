import { EXPERIENCES } from "@/strings";

const Experience = () => {
  return (
    <>
      <section className="my-8">
        <div className="mb-4 w-full">
          <h2 className="text-xl font-semibold">EXPERIENCE</h2>
          <hr className="h-px bg-black border-0 my-2 dark:bg-white" />
        </div>

        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="grid gap-4 items-start md:grid-cols-12 md:gap-6 mt-3"
          >
            <div className="flex items-start justify-between md:contents">
              {/* Company / Role */}
              <div className="md:col-start-1 md:col-span-8">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {exp.company}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {exp.subtitle}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {exp.role}
                </p>
              </div>

              {/* Date */}
              <div className="md:col-start-9 md:col-span-4 text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="md:col-span-12 ml-4">
              <ul className="list-disc space-y-2 text-gray-700 dark:text-gray-200">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
