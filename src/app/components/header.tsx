// components/Header.tsx
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>FOXLAB</h1>
        <div style={styles.contactLinks}>
          <a style={styles.contactItem} href="mailto:root@foxlab.com">
            <FaEnvelope />
          </a>
          <a
            style={styles.contactItem}
            href="https://github.com/magic-forces"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            style={styles.contactItem}
            href="https://matrix.to/#/@magic_forces:foxlab.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMatrix />
          </a>
          <a
            style={styles.contactItem}
            href="https://instagram.com/pyra.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    transition: "color 0.3s",
    cursor: "pointer",
  },
  contactLinks: {
    display: "flex",
    gap: "15px",
  },
  contactItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5em",
  },
};

export default Header;
