import { BarChart2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-6 h-6 text-white" />
          <h1 className="text-2xl font-bold text-white">
            MultiRank Explorer
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white hover:text-indigo-200 transition-colors font-medium">
            Features
          </a>
          <a href="#about" className="text-white hover:text-indigo-200 transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-white hover:text-indigo-200 transition-colors font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};