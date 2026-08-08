import React from "react";
import Shell from "../components/Shell.jsx";
import { css, CALENDLY, EMAIL, PHONE, PHONE_TEL } from "../lib/css.js";

const points = [
  "We look at your real WhatsApp or Instagram enquiries",
  "You get a clear scope, timeline and price on the call",
  "Conversations in Bangla, English or Arabic — your choice"
];

export default function Contact() {
  return (
    <Shell current="/contact">
      <main
        data-r="pad two"
        style={css("maxWidth:1240px; margin:0 auto; padding:76px 28px 96px; display:grid; gridTemplateColumns:.85fr 1.15fr; gap:56px; alignItems:start")}
      >
        <div>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Contact</p>
          <h1
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(34px, 4vw, 56px); lineHeight:1.06; letterSpacing:-0.035em; fontWeight:700; margin:20px 0 0; color:#67766F"
            )}
          >
            Book a free <span style={css("color:#F0F5F3")}>20-minute</span> consultation.
          </h1>
          <p style={css("fontSize:16.5px; lineHeight:1.7; color:#93A29C; marginTop:22px; textWrap:pretty")}>
            No commitment, no slide deck. Tell us where your enquiries come from and what usually goes wrong, and we'll tell
            you honestly whether an AI agent helps.
          </p>
          <ul style={css("listStyle:none; padding:0; margin:32px 0 0; display:flex; flexDirection:column; gap:14px")}>
            {points.map((p) => (
              <li key={p} style={css("display:flex; gap:12px; fontSize:15px; color:#B9C7C1")}>
                <span style={css("color:#1DD98B; fontWeight:700")}>✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div
            style={css(
              "marginTop:36px; paddingTop:26px; borderTop:1px solid rgba(255,255,255,.08); fontSize:14px; color:#76857F; lineHeight:1.7"
            )}
          >
            Prefer to write first? Email <a href={"mailto:" + EMAIL}>{EMAIL}</a> or call{" "}
            <a href={"tel:" + PHONE_TEL}>{PHONE}</a>
            <br />
            Working hours 10:00–19:00 (GMT+6), replies within a day.
          </div>
        </div>
        <div style={css("border:1px solid rgba(255,255,255,.09); borderRadius:26px; padding:14px; background:#0D1310")}>
          <div
            style={css(
              "borderRadius:18px; background:#0A0F0D; border:1px dashed rgba(29,217,139,.28); minHeight:560px; display:flex; flexDirection:column; alignItems:center; justifyContent:center; gap:18px; padding:40px; textAlign:center"
            )}
          >
            <p style={css("fontSize:12px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#67766F; margin:0")}>Cal.com embed</p>
            <p style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:26px; fontWeight:700; letterSpacing:-0.02em; color:#F0F5F3; margin:0")}>
              Pick a time that suits you
            </p>
            <p style={css("fontSize:14.5px; lineHeight:1.6; color:#84938D; maxWidth:380px; margin:0")}>
              The live scheduler loads here. Until then, the button opens the same booking page in a new tab.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener"
              className="hvBtn"
              style={css(
                "marginTop:8px; display:inline-flex; alignItems:center; gap:10px; background:#1DD98B; color:#04100B; fontWeight:700; fontSize:15px; padding:15px 26px; borderRadius:999px"
              )}
            >
              Open the booking page <span>→</span>
            </a>
          </div>
        </div>
      </main>
    </Shell>
  );
}
