"use client";

import { useState } from "react";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const moneroAddress =
    "44TRuabNWHUgDgTV8f1vdmi5XEnSr6eapN3ZsaByuxsTjinRNSu4gUUXpixRc2qvAX7ojZXBfkdmHDKZMVei5bEqNFCj3SC";

  const handleCopy = () => {
    navigator.clipboard.writeText(moneroAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.monero}>
        Give me MOnEy:
        <span
          style={{
            ...styles.address,
            color: isCopied ? "#4CAF50" : "#FFA500",
          }}
          onClick={handleCopy}
          title="Copy the full address"
        >
          {moneroAddress.slice(0, 6)}...{moneroAddress.slice(-6)}
        </span>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1A1A1A",
    color: "#F4F4F4",
    textAlign: "center" as const,
    padding: "10px",
    borderTop: "2px solid #FFA500",
  },
  monero: {
    marginTop: "10px",
    fontSize: "0.9em",
  },
  address: {
    display: "inline-block",
    marginLeft: "5px",
    fontFamily: "monospace",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  },
};

export default Footer;