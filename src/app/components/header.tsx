"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaEnvelope, FaKey } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>
          <Link href="/">&lt;LOGO&gt;</Link>
        </h1>
        <div style={styles.contactLinks}>
          <div
            style={styles.tooltipWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="mailto:root@foxlab.com" style={styles.icon}>
              <FaEnvelope />
            </a>
            {isHovered && (
              <div style={styles.tooltip}>
                <a
                  href="/Magic-Forces_public.asc"
                  download
                  style={styles.downloadLink}
                >
                  <FaKey style={styles.keyIcon} />
                  <span style={styles.linkText}>GPG Key</span>
                </a>
                <div style={styles.arrow}></div>
              </div>
            )}
          </div>
          /
          <a
            style={styles.icon}
            href="https://github.com/magic-forces"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          /
          <a
            style={styles.icon}
            href="https://matrix.to/#/@magic_forces:foxlab.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMatrix />
          </a>
          /
          <a
            style={styles.icon}
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
    backgroundColor: "#1A1A1A",
    color: "#F4F4F4",
    padding: "20px",
    paddingBottom: "10px",
    borderBottom: "2px solid #FFA500",
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
  tooltipWrapper: {
    position: "relative" as const,
    display: "inline-block",
    paddingBottom: "10px",
  },
  icon: {
    textDecoration: "none",
    fontSize: "1.5em",
    transition: "color 0.3s ease",
  },
  tooltip: {
    position: "absolute" as const,
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#2E2E2E",
    color: "#FFF",
    padding: "10px 15px",
    borderRadius: "8px",
    whiteSpace: "nowrap" as const,
    zIndex: 10,
    fontSize: "0.9em",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center" as const,
  },
  keyIcon: {
    color: "#F4F4F4",
    fontSize: "1.2em",
    marginRight: "5px",
  },
  linkText: {
    color: "#FFA500",
    textDecoration: "none",
    fontWeight: "bold",
  },
  arrow: {
    position: "absolute" as const,
    top: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid #2E2E2E",
  },
  downloadLink: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none",
    color: "#FFF",
  },
};

export default Header;
