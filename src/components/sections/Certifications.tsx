import { CERTIFICATIONS } from "@/strings";

const Certifications = () => {
  return (
    <section className="my-8">
      <div className="mb-4 w-full">
        <h2 className="text-xl font-semibold">CERTIFICATIONS</h2>
        <hr className="h-px bg-black border-0 my-2 dark:bg-white" />
      </div>
      {CERTIFICATIONS.map((cert, index) => (
        <div
          key={index}
          className="flex items-start justify-between md:contents"
        >
          <div className="md:col-start-1 md:col-span-8">
            <p className="text-l font-semibold text-gray-800 dark:text-white">
              {cert.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {cert.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
