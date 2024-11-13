import Link from "next/link";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";

const header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>
          <Link href="/">FOXLAB</Link>
        </h1>
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
  },
  logo: {
    margin: 0,
  },
  contactLinks: {
    display: "flex",
    gap: "15px",
  },
  contactItem: {
    color: "#fff",
    fontSize: "1.5em",
  },
};

export default header;
