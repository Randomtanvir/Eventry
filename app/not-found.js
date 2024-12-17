import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-gray-100 text-center px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-gray-400 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9L12 11.25M14.25 9L12 11.25m0 0L9.75 13.5M12 11.25l2.25 2.25M12 21C6.48 21 2 16.52 2 11S6.48 1 12 1s10 4.48 10 10-4.48 10-10 10z"
        />
      </svg>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
