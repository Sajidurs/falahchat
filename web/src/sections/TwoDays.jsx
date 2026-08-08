import React from "react";
import { css } from "../lib/css.js";

const wins = [
  ["Replied in 6 seconds", "Every message, day or night", true],
  ["Zero missed enquiries", "Nothing sits in a request folder", false],
  ["Every lead written down", "Name, number, branch, next step", false],
  ["He steps in only to close", "Handoff the moment it's worth it", false]
];

export default function TwoDays() {
  return (
    <section style={css("position:relative; overflow:hidden; background:#070B0A; borderTop:1px solid rgba(255,255,255,.06)")}>
      <div
        style={css(
          "position:absolute; top:0; right:0; width:52%; height:100%; background:radial-gradient(ellipse 70% 60% at 70% 55%, rgba(29,217,139,.10), transparent 70%); pointerEvents:none"
        )}
      ></div>
      <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px 56px; position:relative; zIndex:1")}>
        <div style={css("maxWidth:720px")}>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Two kinds of day</p>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(30px, 3.2vw, 46px); lineHeight:1.1; letterSpacing:-0.03em; fontWeight:700; margin:20px 0 0; color:#67766F"
            )}
          >
            Same enquiries. <span style={css("color:#F0F5F3")}>One owner is drowning,</span>{" "}
            <span style={css("color:#1DD98B")}>the other is closing.</span>
          </h2>
        </div>

        <div data-r="split2" style={css("marginTop:44px; display:grid; gridTemplateColumns:1fr 1px 1fr; gap:0; alignItems:end")}>
          <div data-r="daycol" style={css("display:flex; alignItems:flex-end; gap:10px; paddingRight:6px")}>
            <div style={css("flex:1; minWidth:196px; display:flex; flexDirection:column; gap:14px; paddingBottom:24px")}>
              <p
                style={css(
                  "alignSelf:flex-start; whiteSpace:nowrap; fontSize:11.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#67766F; border:1px solid rgba(255,255,255,.12); borderRadius:999px; padding:7px 14px; margin:0"
                )}
              >
                Without Falah Chat
              </p>
              <div style={css("display:flex; flexDirection:column; gap:12px")}>
                <div
                  style={css(
                    "border:1px solid rgba(255,255,255,.09); borderRadius:16px; background:rgba(13,19,16,.88); backdropFilter:blur(6px); padding:14px 15px; transform:rotate(-2.2deg); animation:driftA 9s ease-in-out infinite"
                  )}
                >
                  <div style={css("display:flex; alignItems:center; justifyContent:space-between; gap:10px")}>
                    <span style={css("fontSize:12px; fontWeight:700; color:#B9C7C1")}>WhatsApp</span>
                    <span style={css("fontSize:11px; fontWeight:700; color:#04140D; background:#76857F; borderRadius:999px; padding:3px 8px")}>14</span>
                  </div>
                  <div style={css("fontSize:12.5px; color:#84938D; marginTop:7px; lineHeight:1.5")}>“Vai, price koto? Ekhono keu reply dey nai.”</div>
                  <div style={css("fontSize:10.5px; color:#5A6862; marginTop:8px")}>11:42 PM</div>
                </div>
                <div
                  style={css(
                    "border:1px solid rgba(255,255,255,.09); borderRadius:16px; background:rgba(13,19,16,.88); backdropFilter:blur(6px); padding:14px 15px; transform:rotate(1.6deg); marginLeft:26px; animation:driftB 10s ease-in-out infinite"
                  )}
                >
                  <div style={css("fontSize:12px; fontWeight:700; color:#B9C7C1")}>Missed call</div>
                  <div style={css("fontSize:12.5px; color:#84938D; marginTop:6px")}>Customer · 9:47 AM</div>
                </div>
                <div
                  style={css(
                    "border:1px solid rgba(255,255,255,.09); borderRadius:16px; background:rgba(13,19,16,.88); backdropFilter:blur(6px); padding:14px 15px; transform:rotate(-1.2deg); animation:driftA 11s ease-in-out infinite"
                  )}
                >
                  <div style={css("display:flex; alignItems:center; justifyContent:space-between; gap:10px")}>
                    <span style={css("fontSize:12px; fontWeight:700; color:#B9C7C1")}>Instagram requests</span>
                    <span style={css("fontSize:11px; fontWeight:700; color:#04140D; background:#76857F; borderRadius:999px; padding:3px 8px")}>6</span>
                  </div>
                  <div style={css("fontSize:12.5px; color:#84938D; marginTop:7px; lineHeight:1.5")}>“Can you send your price list?”</div>
                </div>
                <div
                  style={css(
                    "border:1px dashed rgba(255,255,255,.16); borderRadius:14px; padding:12px 14px; transform:rotate(2.4deg); marginLeft:40px; fontSize:12.5px; color:#76857F"
                  )}
                >
                  Follow up with Amina — later
                </div>
              </div>
              <p style={css("fontSize:13.5px; lineHeight:1.7; color:#76857F; maxWidth:262px; margin:0")}>
                Answering at midnight, retyping the same prices, leads written on the back of an invoice book.
              </p>
            </div>
            <img
              data-r="dayimg"
              src="/images/unhappy-person.png"
              alt="Business owner overwhelmed by unanswered messages on his phone"
              loading="lazy"
              style={css(
                "height:auto; maxHeight:560px; maxWidth:52%; objectFit:contain; objectPosition:bottom; filter:grayscale(1) brightness(.72) contrast(1.05); maskImage:linear-gradient(to bottom, #000 52%, transparent 90%); WebkitMaskImage:linear-gradient(to bottom, #000 52%, transparent 90%); pointerEvents:none"
              )}
            />
          </div>

          <div
            data-r="divider"
            style={css(
              "position:relative; alignSelf:stretch; background:linear-gradient(to bottom, transparent, rgba(255,255,255,.10) 30%, rgba(29,217,139,.35) 55%, transparent 92%)"
            )}
          >
            <div
              style={css(
                "position:absolute; top:52%; left:50%; transform:translate(-50%,-50%); width:9px; height:9px; borderRadius:999px; background:#1DD98B; boxShadow:0 0 0 5px rgba(29,217,139,.12)"
              )}
            ></div>
          </div>

          <div data-r="daycol" style={css("display:flex; alignItems:flex-end; gap:10px; paddingLeft:6px")}>
            <img
              data-r="dayimg"
              src="/images/happy-person.png"
              alt="Business owner calmly running his shop with Falah Chat handling replies"
              loading="lazy"
              style={css(
                "height:auto; maxHeight:520px; maxWidth:48%; objectFit:contain; objectPosition:bottom; filter:saturate(1.02) brightness(.95); maskImage:linear-gradient(to bottom, #000 38%, transparent 84%); WebkitMaskImage:linear-gradient(to bottom, #000 38%, transparent 84%); pointerEvents:none"
              )}
            />
            <div style={css("flex:1; minWidth:210px; display:flex; flexDirection:column; gap:14px; paddingBottom:24px")}>
              <p
                style={css(
                  "alignSelf:flex-end; whiteSpace:nowrap; fontSize:11.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; border:1px solid rgba(29,217,139,.32); background:rgba(29,217,139,.08); borderRadius:999px; padding:7px 14px; margin:0"
                )}
              >
                With Falah Chat
              </p>
              <div style={css("display:flex; flexDirection:column; gap:12px")}>
                {wins.map(([title, sub, primary], i) => (
                  <div
                    key={i}
                    style={css(
                      "display:flex; alignItems:center; gap:12px; border:1px solid " +
                        (primary ? "rgba(29,217,139,.28)" : "rgba(255,255,255,.10)") +
                        "; borderRadius:16px; background:" +
                        (primary ? "rgba(11,20,16,.92)" : "rgba(12,18,15,.92)") +
                        "; backdropFilter:blur(6px); padding:14px 16px; animation:" +
                        (i % 2 ? "driftB" : "driftA") +
                        " " +
                        (8 + i * 0.9) +
                        "s ease-in-out infinite"
                    )}
                  >
                    <span
                      style={css(
                        "width:26px; height:26px; borderRadius:999px; background:" +
                          (primary ? "#1DD98B" : "rgba(29,217,139,.14)") +
                          "; border:1px solid " +
                          (primary ? "#1DD98B" : "rgba(29,217,139,.3)") +
                          "; color:" +
                          (primary ? "#04140D" : "#1DD98B") +
                          "; display:flex; alignItems:center; justifyContent:center; fontSize:13px; fontWeight:700; flexShrink:0"
                      )}
                    >
                      ✓
                    </span>
                    <div>
                      <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:17px; fontWeight:700; color:#F0F5F3")}>{title}</div>
                      <div style={css("fontSize:11.5px; color:#84938D")}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={css("alignSelf:flex-end; textAlign:right; fontSize:13.5px; lineHeight:1.7; color:#84938D; maxWidth:268px; margin:0")}>
                Same shop, same phone number — the agent answers first and he only picks up the ready buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={css(
          "position:absolute; left:0; right:0; bottom:0; height:200px; background:linear-gradient(to bottom, transparent, #070B0A 72%); pointerEvents:none; zIndex:0"
        )}
      ></div>
    </section>
  );
}
