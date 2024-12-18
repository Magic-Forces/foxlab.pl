"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNeonOn, setIsNeonOn] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const neonLoop = () => {
      setIsNeonOn(true);
      let onTime = getRandomInt(15000, 30000);

      setTimeout(() => {
        blinkNeon(1, 3);

        setTimeout(() => {
          setIsNeonOn(false);
          let offTime = getRandomInt(3000, 5000);

          setTimeout(() => {
            blinkNeon(1, 3);
            setTimeout(neonLoop, 500);
          }, offTime);
        }, 500);
      }, onTime);
    };

    neonLoop();
  }, []);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const blinkNeon = (min: number, max: number) => {
    let blinks = getRandomInt(min, max);
    for (let i = 0; i < blinks; i++) {
      setTimeout(() => setIsNeonOn((prev) => !prev), i * 200);
    }
    setTimeout(() => setIsNeonOn(true), blinks * 200);
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
