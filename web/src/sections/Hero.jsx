import React from "react";
import { css, CALENDLY } from "../lib/css.js";
import { BENEFIT_TILES, CLIENT_LOGOS } from "../data.js";

const tileWrap = "flex:0 0 calc((100vw - 200px) / 6); display:flex; flexDirection:column; gap:14px";
const tileBox =
  "aspectRatio:1 / 1; borderRadius:20px; overflow:hidden; border:1px solid rgba(255,255,255,.07); background:#080C0A";
const tileCap =
  "textAlign:center; fontSize:13px; fontWeight:600; letterSpacing:0.06em; textTransform:uppercase; color:#84938D";
const logoImg =
  "flexShrink:0; height:30px; width:auto; display:block; objectFit:contain; opacity:.42; filter:grayscale(1) brightness(1.9)";

export default function Hero() {
  const tiles = BENEFIT_TILES.concat(BENEFIT_TILES);
  const logos = CLIENT_LOGOS.concat(CLIENT_LOGOS);

  return (
    <section data-r="pad" style={css("fontFamily:'Inter',system-ui,sans-serif; position:relative; padding:78px 24px 0")}>
      <div style={css("maxWidth:880px; margin:0 auto; textAlign:center; position:relative; zIndex:3")}>
        <p
          style={css(
            "display:inline-flex; alignItems:center; gap:9px; padding:7px 15px 7px 11px; borderRadius:999px; border:1px solid rgba(29,217,139,.22); background:rgba(29,217,139,.06); margin:0"
          )}
        >
          <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B")}></span>
          <span style={css("fontSize:12px; fontWeight:700; letterSpacing:0.14em; textTransform:uppercase; color:#1DD98B")}>
            AI chat agents for business
          </span>
        </p>
        <h1
          style={css(
            "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(42px, 5.8vw, 80px); lineHeight:1.0; letterSpacing:-0.038em; fontWeight:700; margin:28px 0 0; color:#F0F5F3; textWrap:balance"
          )}
        >
          Turn Missed Messages
          <span style={css("display:block; fontStyle:italic; fontWeight:500; color:#1DD98B")}>Into Real Sales</span>
        </h1>
        <p style={css("margin:24px auto 0; maxWidth:540px; fontSize:16.5px; lineHeight:1.65; color:#93A29C; textWrap:pretty")}>
          AI agents for WhatsApp, Instagram, Messenger and your own website — answering in seconds, in Bangla, English or
          Banglish, and handing every qualified lead to your team.
        </p>
        <div style={css("marginTop:32px; display:flex; justifyContent:center")}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener"
            className="hvBtn"
            style={css(
              "display:inline-flex; alignItems:center; gap:10px; background:#1DD98B; color:#04100B; fontWeight:700; fontSize:15.5px; padding:15px 28px; borderRadius:999px; boxShadow:0 18px 40px -16px rgba(29,217,139,.65)"
            )}
          >
            Book a free consultation <span style={css("fontSize:17px")}>→</span>
          </a>
        </div>
      </div>

      <div style={css("position:relative; marginTop:74px")}>
        <div
          style={css(
            "overflow:hidden; maskImage:linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%); WebkitMaskImage:linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)"
          )}
        >
          <div style={css("display:flex; width:max-content; gap:22px; animation:railSlide 62s linear infinite")}>
            {tiles.map(([src, label], i) => (
              <div key={i} style={css(tileWrap)} aria-hidden={i >= BENEFIT_TILES.length ? "true" : "false"}>
                <div style={css(tileBox)}>
                  <img
                    src={src}
                    alt={i >= BENEFIT_TILES.length ? "" : label}
                    loading="lazy"
                    style={css("width:100%; height:100%; objectFit:cover; display:block")}
                  />
                </div>
                <div style={css(tileCap)}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={css("position:relative; zIndex:4; marginTop:64px; borderTop:1px solid rgba(255,255,255,.06); background:#070B0A")}>
        <div
          style={css(
            "padding:26px 0; overflow:hidden; maskImage:linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%); WebkitMaskImage:linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)"
          )}
        >
          <div style={css("display:flex; alignItems:center; width:max-content; gap:76px; animation:logoSlide 44s linear infinite")}>
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={i >= CLIENT_LOGOS.length ? "" : "Client logo"}
                aria-hidden={i >= CLIENT_LOGOS.length ? "true" : "false"}
                loading="lazy"
                className="hvLogo"
                style={css(logoImg)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
