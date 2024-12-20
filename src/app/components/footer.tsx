"use client";

import { useState } from "react";
import { FaMonero } from "react-icons/fa";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const moneroAddress =
    "44TRuabNWHUgDgTV8f1vdmi5XEnSr6eapN3ZsaByuxsTjinRNSu4gUUXpixRc2qvAX7ojZXBfkdmHDKZMVei5bEqNFCj3SC";
  const recipientName = "FoxLab";
  const description = "Donate";

  const handleAction = () => {
    navigator.clipboard.writeText(moneroAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);

      const uri = `monero:${moneroAddress}?recipient_name=${encodeURIComponent(
        recipientName
      )}&tx_description=${encodeURIComponent(description)}`;

      setTimeout(() => {
        window.location.href = uri;
      }, 500);
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
          onClick={handleAction}
          title="Copy Monero address and open URI"
        >
          {moneroAddress.slice(0, 6)}...{moneroAddress.slice(-6)}
        </span>
        <FaMonero style={styles.icon} />
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
    fontSize: "0.9em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "1.2em",
    color: "#FFA500",
    cursor: "default",
  },
  address: {
    display: "inline-block",
    marginLeft: "5px",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  },
};

export default Footer;
