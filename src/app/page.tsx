"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
      color: "#FFA500",
      textShadow: `
      0 0 10px #FF8C00,
      0 0 20px #FF8C00,
      0 0 30px #FF4500,
      0 0 40px #FF4500,
      0 0 50px #FF6347
    `,
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
