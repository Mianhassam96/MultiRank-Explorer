import { BarChart2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent gradient-bg">
            MultiRank Explorer
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};