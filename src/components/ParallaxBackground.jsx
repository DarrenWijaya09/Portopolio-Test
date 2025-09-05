import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  // Ambil progress scroll halaman (0 = atas, 1 = bawah)
  const { scrollYProgress } = useScroll();

  // Buat animasi scroll lebih halus (spring)
  const x = useSpring(scrollYProgress, { damping: 50 });

  // Efek parallax: semakin ke bawah, layer bergeser berbeda
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]); // gunung paling belakang
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]); // planet bergerak horizontal
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]); // gunung tengah
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);  // gunung depan (diam)

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">

        {/* Background langit */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Gunung layer 3 (paling jauh) */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planet bergerak horizontal */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Gunung layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Gunung layer 1 (paling depan, diam) */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
