import React from "react";

const ToggleThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 
                 text-neutral-400 hover:text-white hover:bg-neutral-700/40"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        // 🌙 ikon moon
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      ) : (
        // ☀️ ikon sun
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l.71-.71M21 12h1M2 12H3m15.66 7.66l-.71-.71M4.05 4.05l.71.71" />
        </svg>
      )}
    </button>
  );
};

export default ToggleThemeButton;
