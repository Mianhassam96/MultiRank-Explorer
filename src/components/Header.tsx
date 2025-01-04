import { BarChart2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-gray-900 bg-clip-text text-transparent gradient-bg">
            MultiRank Explorer
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-900 hover:text-primary transition-colors font-medium">
            Features
          </a>
          <a href="#about" className="text-gray-900 hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-gray-900 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};