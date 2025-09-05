import { useEffect, useRef } from "react";

export default function PageTransition({ isDark, onAnimationEnd }) {
  const maskRef = useRef(null);

  useEffect(() => {
    if (maskRef.current) {
      maskRef.current.classList.remove("scale-0", "scale-[100]");
      void maskRef.current.offsetWidth; // force reflow biar animasi jalan
      maskRef.current.classList.add("scale-[100]");
    }
  }, [isDark]);

  return (
    <div
      ref={maskRef}
      onTransitionEnd={onAnimationEnd}
      className="fixed inset-0 z-[9999] flex items-center justify-center 
                 pointer-events-none 
                 transition-transform duration-1000 ease-in-out 
                 scale-0"
                 style={{
                    WebkitMaskImage: "url('assets/shigure-ui.webp')",
                    maskImage: "url('assets/shigure-ui.webp')",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    backgroundColor: isDark ? "#030412" : "#ffffff", // warna isi
                  }}                  
    />
  );
}
