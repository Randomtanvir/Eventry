"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex container items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 19a7 7 0 100-14 7 7 0 000 14zm0 0h.01"
        />
      </svg>
      <h2>{error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="underline text-blue-500"
      >
        Try again
      </button>
    </div>
  );
}
