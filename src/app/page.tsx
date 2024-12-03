import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        <h2>FOXLAB</h2>
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
};
