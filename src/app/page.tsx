import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <h2 style={styles.title}>
          <span style={styles.textWithSpacing}>FOXLA</span>
          <span style={styles.lastLetter}>B</span>
        </h2>
      </main>

      <Footer />
    </div>
  );
}

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
    fontSize: "4rem",
    color: "#FFA500",
    fontFamily: "NeonTube, sans-serif",
    textShadow: `
      0 0 10px #FF8C00,
      0 0 20px #FF8C00,
      0 0 30px #FF4500,
      0 0 40px #FF4500,
      0 0 50px #FF6347
    `,
    textDecoration: "underline",
    textDecorationColor: "#FFA500",
    textDecorationThickness: "6px",
    textUnderlineOffset: "2px",
    display: "inline-flex",
    userSelect: "none" as const,
  },
  textWithSpacing: {
    letterSpacing: "0.2em",
  },
  lastLetter: {
    letterSpacing: "0",
  },
};
