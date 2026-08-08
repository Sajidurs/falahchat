import React from "react";
import { css, WHATSAPP_LINK } from "../lib/css.js";

export default function WhatsAppFloat() {
  return (
    <a
      data-r="wafloat"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Message us on WhatsApp"
      className="hvWa"
      style={css(
        "position:fixed; right:22px; bottom:22px; zIndex:60; display:flex; alignItems:center; gap:13px; maxWidth:330px; padding:10px 20px 10px 10px; borderRadius:999px; background:rgba(10,16,13,.86); backdropFilter:blur(20px); WebkitBackdropFilter:blur(20px); border:1px solid rgba(29,217,139,.32); boxShadow:0 26px 60px -26px rgba(0,0,0,.95), 0 0 30px -12px rgba(29,217,139,.35)"
      )}
    >
      <span
        style={css(
          "position:relative; flexShrink:0; width:44px; height:44px; borderRadius:999px; background:#1DD98B; display:flex; alignItems:center; justifyContent:center"
        )}
      >
        <span style={css("position:absolute; inset:0; borderRadius:999px; border:1px solid #1DD98B; animation:pulseRing 2.8s ease-out infinite")}></span>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#04140D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.7-4.8A8.5 8.5 0 1 1 21 11.5Z"></path>
          <path d="M8.9 9.1c.3 2.4 3.6 5.7 6 6l1.1-1.4-1.9-1-.9.8c-1-.5-2-1.5-2.5-2.5l.8-.9-1-1.9L8.9 9.1Z" fill="#04140D" stroke="none"></path>
        </svg>
      </span>
      <span data-r="wacopy" style={css("display:flex; flexDirection:column; gap:3px; minWidth:0")}>
        <span style={css("fontSize:13.5px; fontWeight:700; letterSpacing:-0.01em; color:#F0F5F3")}>Have a question?</span>
        <span style={css("fontSize:12px; lineHeight:1.35; color:#8FCBB2")}>Send us a message on WhatsApp now</span>
      </span>
    </a>
  );
}
