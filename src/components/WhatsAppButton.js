import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <style>{`
        @keyframes whatsappPulse {
          0% {
            transform: translateY(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(37,211,102,0.7);
          }
          70% {
            transform: translateY(-50%) scale(1.08);
            box-shadow: 0 0 0 18px rgba(37,211,102,0);
          }
          100% {
            transform: translateY(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(37,211,102,0);
          }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
        }}
      >
        {hover && (
          <div
            style={{
              marginRight: "14px",
              background: "#222",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 25px rgba(0,0,0,.25)",
            }}
          >
            💬 Chat with me
          </div>
        )}

        <a
          href="https://wa.me/254794712133?text=Hello%20Kevin,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#25D366",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontSize: "40px",
            animation: "whatsappPulse 2s infinite",
            boxShadow: "0 12px 35px rgba(0,0,0,.3)",
            transition: "all .3s ease",
          }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}

export default WhatsAppButton;
