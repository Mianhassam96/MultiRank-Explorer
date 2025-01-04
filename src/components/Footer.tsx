import { Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              MultiMian
            </h3>
            <p className="text-gray-300">
              Advanced website analysis tools for modern web professionals.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">Connect</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MultiMian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
