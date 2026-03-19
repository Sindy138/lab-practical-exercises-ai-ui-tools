import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <svg
              viewBox="0 0 1134 340"
              className="h-8 md:h-10 w-auto fill-white"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Spotify"
            >
              <path d="M567 170c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm80.8 254c-3.2 5.2-10.4 6.8-15.6 3.6-42.8-26.4-96.8-32.4-160-17.6-6 1.6-12.4-2-14-8s2-12.4 8-14c69.2-16 128.8-9.2 176.8 20.4 5.2 3.2 6.8 10.4 3.6 15.6zm22.4-50c-4 6.4-12.4 8.4-18.8 4.4-49.2-30-124-38.8-182-21.2-7.2 2-14.8-2.4-16.8-9.2-2-7.2 2.4-14.8 9.2-16.8 66.4-20 148.8-10.4 204.8 24.4 6.4 4 8.4 12.4 4.4 18.8zm2-52c-58.8-35.2-156-38.4-212-21.2-8.4 2.4-17.6-2.4-20-10.8-2.4-8.4 2.4-17.6 10.8-20 64.4-19.6 171.2-16 238.8 24.8 7.6 4.4 10 14.4 5.6 22-4.4 7.6-14.4 10-22 5.6z" />
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold text-sm"
              style={{ fontWeight: 700 }}
            >
              Premium
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold text-sm"
              style={{ fontWeight: 700 }}
            >
              Support
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold text-sm"
              style={{ fontWeight: 700 }}
            >
              Download
            </a>
            <div className="h-6 w-px bg-gray-600" />
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold text-sm"
              style={{ fontWeight: 700 }}
            >
              Sign up
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold text-sm"
              style={{ fontWeight: 700 }}
            >
              Log in
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 py-6 border-t border-gray-800 mt-4">
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold"
              style={{ fontWeight: 700 }}
            >
              Premium
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold"
              style={{ fontWeight: 700 }}
            >
              Support
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold"
              style={{ fontWeight: 700 }}
            >
              Download
            </a>
            <div className="h-px bg-gray-700" />
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold"
              style={{ fontWeight: 700 }}
            >
              Sign up
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DB954] transition-colors font-bold"
              style={{ fontWeight: 700 }}
            >
              Log in
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
