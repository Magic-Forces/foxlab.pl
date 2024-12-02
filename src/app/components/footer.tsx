const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>FOXLAB</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center" as const,
    padding: "10px",
  },
};

export default Footer;
