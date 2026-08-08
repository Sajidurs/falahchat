import React from "react";
import { css, CALENDLY, EMAIL, PHONE, PHONE_TEL, WHATSAPP_PLAIN } from "../lib/css.js";

const link =
  "textAlign:left; display:block; padding:11px 0; borderBottom:1px solid rgba(255,255,255,.07); fontSize:14px; fontWeight:500; color:#84938D";
const legal =
  "fontSize:10.5px; fontWeight:600; letterSpacing:0.13em; textTransform:uppercase; color:#5B6A64";
const social =
  "width:36px; height:36px; borderRadius:9px; border:1px solid rgba(255,255,255,.09); background:rgba(255,255,255,.03); display:flex; alignItems:center; justifyContent:center; fontSize:11px; fontWeight:700; letterSpacing:0.04em; color:#84938D";

export default function Footer() {
  return (
    <footer style={css("position:relative; borderTop:1px solid rgba(255,255,255,.06); background:#070B0A; overflow:hidden")}>
      <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:78px 28px 26px")}>
        <div data-r="footer3" style={css("display:grid; gridTemplateColumns:auto auto 1fr; gap:56px; alignItems:start")}>
          <div style={css("display:flex; flexDirection:column; gap:34px; minWidth:150px")}>
            <img src="/images/logo.webp" alt="Falah Chat" style={css("height:34px; width:auto; alignSelf:flex-start; display:block")} />
            <div style={css("display:flex; flexDirection:column; minWidth:150px")}>
              <a href="/" className="hvText" style={css(link)}>Home</a>
              <a href="/pricing" className="hvText" style={css(link)}>Pricing</a>
              <a href="/pricing#faq" className="hvText" style={css(link)}>FAQ</a>
              <a href="/contact" className="hvText" style={css(link)}>Contact</a>
            </div>
          </div>

          <div data-r="footcol2" style={css("display:flex; flexDirection:column; minWidth:170px; marginTop:68px")}>
            <a href="/whatsapp-ai-agent" className="hvText" style={css(link)}>WhatsApp Agent</a>
            <a href="/instagram-ai-agent" className="hvText" style={css(link)}>Instagram Agent</a>
            <a href="/messenger-ai-agent" className="hvText" style={css(link)}>Messenger Agent</a>
            <a href="/website-chatbot" className="hvText" style={css(link)}>Custom Website Chatbot</a>
            <a href={CALENDLY} target="_blank" rel="noopener" className="hvText" style={css(link)}>Book a call</a>
          </div>

          <div data-r="bigwrap" style={css("justifySelf:end; textAlign:right")}>
            <p
              data-r="bigtext"
              style={css(
                "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(34px, 5.2vw, 76px); lineHeight:1.0; letterSpacing:-0.045em; fontWeight:700; margin:0; color:#1B221F; whiteSpace:nowrap"
              )}
            >
              Let's Make Every<span style={css("display:block; color:#151B18")}>Message Count</span>
            </p>
          </div>
        </div>

        <div
          style={css(
            "marginTop:74px; paddingTop:30px; borderTop:1px solid rgba(255,255,255,.07); display:flex; alignItems:flex-end; justifyContent:space-between; gap:44px; flexWrap:wrap"
          )}
        >
          <div style={css("display:flex; gap:56px; flexWrap:wrap")}>
            <div style={css("display:flex; flexDirection:column; gap:8px")}>
              <div style={css("fontSize:11px; fontWeight:600; letterSpacing:0.14em; textTransform:uppercase; color:#5B6A64")}>Business enquiries</div>
              <a href={"mailto:" + EMAIL} className="hvGreen" style={css("fontSize:14.5px; fontWeight:500; color:#C7D3CE")}>{EMAIL}</a>
            </div>
            <div style={css("display:flex; flexDirection:column; gap:8px")}>
              <div style={css("fontSize:11px; fontWeight:600; letterSpacing:0.14em; textTransform:uppercase; color:#5B6A64")}>Phone</div>
              <a href={"tel:" + PHONE_TEL} className="hvGreen" style={css("fontSize:14.5px; fontWeight:500; color:#C7D3CE; whiteSpace:nowrap")}>{PHONE}</a>
            </div>
            <div style={css("display:flex; flexDirection:column; gap:8px")}>
              <div style={css("fontSize:11px; fontWeight:600; letterSpacing:0.14em; textTransform:uppercase; color:#5B6A64")}>WhatsApp</div>
              <a href={WHATSAPP_PLAIN} target="_blank" rel="noopener" className="hvGreen" style={css("fontSize:14.5px; fontWeight:500; color:#C7D3CE; whiteSpace:nowrap")}>{PHONE}</a>
            </div>
          </div>
          <div style={css("display:flex; alignItems:center; gap:14px")}>
            <span style={css("fontSize:11px; fontWeight:700; letterSpacing:0.2em; textTransform:uppercase; color:#5B6A64")}>Dhaka · Dubai</span>
            <span
              style={css(
                "width:38px; height:38px; borderRadius:999px; border:1px solid rgba(29,217,139,.3); display:flex; alignItems:center; justifyContent:center; fontSize:12px; fontWeight:700; color:#1DD98B"
              )}
            >
              24/7
            </span>
          </div>
        </div>

        <div
          style={css(
            "marginTop:34px; paddingTop:22px; borderTop:1px solid rgba(255,255,255,.06); display:flex; alignItems:center; justifyContent:space-between; gap:28px; flexWrap:wrap"
          )}
        >
          <div style={css("display:flex; gap:22px; flexWrap:wrap")}>
            <a href="/terms" className="hvGhost" style={css(legal)}>Terms of service</a>
            <a href="/privacy" className="hvGhost" style={css(legal)}>Privacy policy</a>
            <a href="/cookies" className="hvGhost" style={css(legal)}>Cookie policy</a>
          </div>
          <div style={css("fontSize:10.5px; fontWeight:600; letterSpacing:0.13em; textTransform:uppercase; color:#4E5C56")}>
            Falah Chat © 2026. All rights reserved.
          </div>
          <div style={css("display:flex; alignItems:center; gap:9px")}>
            <a href={WHATSAPP_PLAIN} target="_blank" rel="noopener" aria-label="WhatsApp" className="hvSocial" style={css(social)}>WA</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hvSocial" style={css(social)}>IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hvSocial" style={css(social)}>in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
