import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "@/components";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { NAVIGATION, CONTACT_INFO, STRINGS } from "@/strings";
import { useTheme } from "@/contexts/ThemeContext";

export default function RootLayout() {
  const location = useLocation();
  const navLength = NAVIGATION.length;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [horizontalWidth, setHorizontalWidth] = useState(193);

  useEffect(() => {
    const updateWidth = () => {
      const isMd = window.innerWidth >= 768;
      const gap = isMd ? 40 : 16;
      const width = (NAVIGATION.length - 1) * (80 + gap) + 1;
      setHorizontalWidth(width);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [navLength]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        id="navbar"
        className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-all duration-300"
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="relative flex flex-col items-center py-2 pt-8">
          <button
            id="darkModeToggle"
            onClick={toggleTheme}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:border-gray-600 flex items-center justify-center"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <div>
            <div className="flex justify-center justify-items-center items-center gap-3 mt-2">
              <h2
                className="text-3xl font-bold text-gray-600 dark:text-white tracking-wide cursor-pointer"
                onMouseEnter={() => setIsMenuOpen(true)}
              >
                {STRINGS.titleNavbar}
              </h2>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-5 mt-3">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    width="16"
                    height="16"
                    src={info.icon}
                    alt={info.alt}
                    className="mb-1 md:w-[18px] md:h-[18px]"
                  />
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-xs md:text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <p className="text-xs md:text-sm text-center">
                      {info.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            id="verticalLine"
            className={`w-px bg-gray-400 dark:bg-gray-500 transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "h-8" : "h-0"
            }`}
          ></div>

          <div
            id="branchLines"
            className={`relative flex flex-col items-center transition-all duration-300 ease-in-out ${
              isMenuOpen ? "" : "h-0"
            }`}
          >
            <div
              className={`h-px bg-gray-400 dark:bg-gray-500`}
              style={{ width: `${horizontalWidth}px` }}
            ></div>
            <div
              className={`flex justify-center gap-x-4 md:gap-x-10 w-full ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {NAVIGATION.map((_, index) => (
                <div key={index} className="w-20 flex justify-center">
                  <div className="w-[1px] h-6 bg-gray-400 dark:bg-gray-500"></div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="menuItems"
            className={`flex justify-center gap-x-4 md:gap-x-10 transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "h-10 mt-1" : "h-0"
            }`}
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`w-20 text-center text-gray-600 dark:text-white font-semibold relative py-1 px-2 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group ${
                  isActive(item.path) ? "text-gray-800 dark:text-gray-200" : ""
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
