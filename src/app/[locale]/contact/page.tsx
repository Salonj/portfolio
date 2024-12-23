export default function ProjectModal() {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Your Profile"
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-base text-gray-300">
            21-year-old software engineering major student. I learn, design, and
            implement websites and applications.
          </p>

          {/* Buttons Section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.75l8.25 6-3.083 2.25a.75.75 0 00-.167.826l1.834 5.784-5.834-4.242a.75.75 0 00-.916 0L5.166 18.61l1.834-5.784a.75.75 0 00-.167-.826L3.75 9.75 12 3.75z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75L7.5 12l9 8.25"
                />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Résumé Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 border-2 border-gray-800 bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition mt-4 max-w-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.75v16.5M8.25 17.25h7.5M8.25 6.75h7.5"
              />
            </svg>
            Résumé
          </a>
        </div>
      </div>
    </div>
  );
}
