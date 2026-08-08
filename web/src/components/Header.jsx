import React, { useState } from "react";
import { css, CALENDLY, EMAIL, PHONE, PHONE_TEL } from "../lib/css.js";

const navBtn =
  "background:none; border:none; padding:9px 15px; borderRadius:999px; fontSize:14px; fontWeight:600; color:#93A29C; position:relative; whiteSpace:nowrap; display:inline-block";
const dot = "width:3px; height:3px; borderRadius:999px; background:#3B4A44; flexShrink:0";
const sheetLink =
  "textAlign:left; background:none; border:none; borderBottom:1px solid rgba(255,255,255,.07); padding:20px 0; fontFamily:'Inter',system-ui,sans-serif; fontSize:26px; fontWeight:600; letterSpacing:-0.02em; color:#F0F5F3; display:block";

function Active() {
  return (
    <span
      style={css(
        "position:absolute; inset:0; borderRadius:999px; background:rgba(255,255,255,.075); border:1px solid rgba(255,255,255,.07)"
      )}
    ></span>
  );
}

export default function Header({ current = "/" }) {
  const [open, setOpen] = useState(false);
  const isAgent = current.includes("-ai-agent") || current === "/website-chatbot";

  return (
    <>
      <header
        data-r="hdr"
        style={css(
          "fontFamily:'Inter',system-ui,sans-serif; position:sticky; top:0; zIndex:50; padding:22px 24px 0; display:flex; justifyContent:center; pointerEvents:none"
        )}
      >
        <nav
          data-r="navpill"
          aria-label="Primary"
          style={css(
            "pointerEvents:auto; display:flex; alignItems:center; gap:5px; padding:6px 8px; borderRadius:999px; background:rgba(13,19,16,.66); backdropFilter:blur(20px); WebkitBackdropFilter:blur(20px); border:1px solid rgba(255,255,255,.08); boxShadow:0 20px 46px -20px rgba(0,0,0,.95)"
          )}
        >
          <a href="/" className="hvText" style={css(navBtn)} aria-current={current === "/" ? "page" : undefined}>
            {current === "/" && <Active />}
            <span style={css("position:relative")}>Home</span>
          </a>
          <span style={css(dot)}></span>
          <a href="/whatsapp-ai-agent" className="hvText" style={css(navBtn)}>
            {isAgent && <Active />}
            <span style={css("position:relative")}>Agents</span>
          </a>
          <span style={css(dot)}></span>
          <a href="/pricing" className="hvText" style={css(navBtn)} aria-current={current === "/pricing" ? "page" : undefined}>
            {current === "/pricing" && <Active />}
            <span style={css("position:relative")}>Pricing</span>
          </a>
          <a
            href="/"
            aria-label="Falah Chat home"
            style={css(
              "flexShrink:0; width:44px; height:44px; margin:0 4px; borderRadius:999px; background:#0A100D; border:1px solid rgba(29,217,139,.28); display:flex; alignItems:center; justifyContent:center; boxShadow:0 0 24px -6px rgba(29,217,139,.45)"
            )}
          >
            <img src="/images/logo.webp" alt="" width="22" height="22" style={css("height:22px; width:auto; display:block")} />
          </a>
          <a href="/contact" className="hvText" style={css(navBtn)} aria-current={current === "/contact" ? "page" : undefined}>
            {current === "/contact" && <Active />}
            <span style={css("position:relative")}>Contact</span>
          </a>
          <span style={css(dot)}></span>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener"
            className="hvBtn"
            style={css(
              "background:#1DD98B; color:#04100B; fontWeight:700; fontSize:14px; padding:10px 18px; borderRadius:999px; whiteSpace:nowrap"
            )}
          >
            Book a call
          </a>
        </nav>

        <div
          data-r="mbar"
          style={css(
            "display:none; pointerEvents:auto; width:100%; alignItems:center; justifyContent:space-between; gap:12px"
          )}
        >
          <a
            href="/"
            aria-label="Falah Chat home"
            style={css(
              "display:flex; alignItems:center; gap:10px; padding:7px 14px 7px 8px; borderRadius:999px; background:rgba(13,19,16,.72); backdropFilter:blur(20px); WebkitBackdropFilter:blur(20px); border:1px solid rgba(255,255,255,.08)"
            )}
          >
            <span
              style={css(
                "width:34px; height:34px; borderRadius:999px; background:#0A100D; border:1px solid rgba(29,217,139,.28); display:flex; alignItems:center; justifyContent:center; flexShrink:0"
              )}
            >
              <img src="/images/logo.webp" alt="" width="17" height="17" style={css("height:17px; width:auto; display:block")} />
            </span>
            <span style={css("fontSize:14.5px; fontWeight:700; letterSpacing:-0.01em; color:#F0F5F3")}>Falah Chat</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            style={css(
              "flexShrink:0; width:46px; height:46px; borderRadius:999px; background:rgba(13,19,16,.72); backdropFilter:blur(20px); WebkitBackdropFilter:blur(20px); border:1px solid rgba(255,255,255,.08); display:flex; flexDirection:column; alignItems:center; justifyContent:center; gap:5px"
            )}
          >
            {open ? (
              <span style={css("fontSize:19px; lineHeight:1; color:#1DD98B")}>✕</span>
            ) : (
              <>
                <span style={css("width:17px; height:1.6px; borderRadius:2px; background:#E6EFEA; display:block")}></span>
                <span
                  style={css(
                    "width:11px; height:1.6px; borderRadius:2px; background:#1DD98B; display:block; alignSelf:center; marginLeft:-6px"
                  )}
                ></span>
              </>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div
          data-r="msheet"
          style={css(
            "position:fixed; inset:0; zIndex:49; background:rgba(5,9,8,.94); backdropFilter:blur(22px); WebkitBackdropFilter:blur(22px); display:flex; flexDirection:column; justifyContent:space-between; padding:96px 22px 30px; animation:fadeUp .28s ease both"
          )}
        >
          <nav aria-label="Mobile" style={css("display:flex; flexDirection:column")}>
            <a href="/" style={css(sheetLink)}>Home</a>
            <a href="/whatsapp-ai-agent" style={css(sheetLink)}>WhatsApp Agent</a>
            <a href="/instagram-ai-agent" style={css(sheetLink)}>Instagram Agent</a>
            <a href="/messenger-ai-agent" style={css(sheetLink)}>Messenger Agent</a>
            <a href="/website-chatbot" style={css(sheetLink)}>Website Chatbot</a>
            <a href="/pricing" style={css(sheetLink)}>Pricing</a>
            <a href="/contact" style={css(sheetLink + "; borderBottom:none")}>Contact</a>
          </nav>
          <div style={css("display:flex; flexDirection:column; gap:16px")}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener"
              style={css(
                "display:flex; alignItems:center; justifyContent:center; gap:10px; background:#1DD98B; color:#04100B; fontWeight:700; fontSize:16px; padding:17px 24px; borderRadius:999px"
              )}
            >
              Book a free call <span style={css("fontSize:17px")}>→</span>
            </a>
            <div
              style={css(
                "display:flex; alignItems:center; justifyContent:space-between; fontSize:11px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#5B6A64"
              )}
            >
              <span>Dhaka · Dubai</span>
              <a href={"tel:" + PHONE_TEL} style={css("letterSpacing:0.04em; textTransform:none; fontSize:13px; fontWeight:500; whiteSpace:nowrap")}>
                {PHONE}
              </a>
            </div>
            <a href={"mailto:" + EMAIL} style={css("fontSize:13px; color:#5B6A64")}>{EMAIL}</a>
          </div>
        </div>
      )}
    </>
  );
}
