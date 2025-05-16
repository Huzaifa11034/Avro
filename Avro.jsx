import { useState } from "react";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div
        className={`max-w-md w-full rounded-2xl p-8 md:p-10 text-center transition-all duration-500 transform ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          boxShadow: isHovered
            ? "0 0 20px rgba(120, 144, 255, 0.6), 0 0 40px rgba(120, 144, 255, 0.4)"
            : "0 0 10px rgba(120, 144, 255, 0.3)",
          border: "1px solid rgba(120, 144, 255, 0.2)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon or Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className={`absolute -inset-1 rounded-full transition-opacity duration-500 ${
                isHovered ? "opacity-75" : "opacity-40"
              }`}
              style={{
                background: "radial-gradient(circle at center, rgba(120,144,255,0.3), transparent)",
              }}
            ></div>
            <img
              src="https://placehold.co/120x120/6c757d/ffffff?text=App+Icon"
              alt="App Icon"
              className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Download Our Application</h1>

        {/* Description */}
        <p className="text-gray-300 mb-8">
          Experience the power of our desktop app with enhanced features and performance. Download now for free.
        </p>

        {/* Download Button */}
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Download Executable (v1.0.0)
        </a>

        {/* Small Info Text */}
        <p className="mt-4 text-sm text-gray-400">Windows | macOS | Linux • 120MB</p>
      </div>
    </div>
  );
}
