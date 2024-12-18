"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNeonOn, setIsNeonOn] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const blinkNeon = useCallback((min: number, max: number) => {
    const blinks = getRandomInt(min, max);
    for (let i = 0; i < blinks; i++) {
      setTimeout(() => setIsNeonOn((prev) => !prev), i * 200);
    }
    setTimeout(() => setIsNeonOn(true), blinks * 200);
  }, []);

  useEffect(() => {
    const neonLoop = () => {
      setIsNeonOn(true);
      const onTime = getRandomInt(15000, 35000);

      setTimeout(() => {
        blinkNeon(1, 3);

        setTimeout(() => {
          setIsNeonOn(false);
          const offTime = getRandomInt(3000, 5000);

          setTimeout(() => {
            blinkNeon(1, 3);
            setTimeout(neonLoop, 500);
          }, offTime);
        }, 500);
      }, onTime);
    };

    neonLoop();
  }, [blinkNeon]);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
    },
    main: {
      padding: "20px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: isSmallScreen ? "2.5rem" : "4.5rem",
      color: isNeonOn ? "#FFA500" : "#777777",
      textShadow: isNeonOn
        ? `
          0 0 10px #FF8C00,
          0 0 20px #FF8C00,
          0 0 30px #FF4500,
          0 0 40px #FF4500,
          0 0 50px #FF6347
        `
        : "none",
      transition: "all 0.1s ease-out",
      letterSpacing: "0.2em",
    },
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <h2 style={styles.title}>|[FOXLAB]|</h2>
      </main>
      <Footer />
    </div>
  );
}
