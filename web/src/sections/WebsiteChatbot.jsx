import React from "react";
import { css } from "../lib/css.js";

const cards = [
  ["Conversations like a human", "Understands what visitors actually mean, asks follow-up questions, and keeps your tone of voice.", false],
  ["Books appointments", "Checks your calendar, offers real slots, confirms the booking and sends the reminder.", true],
  ["Answers from your content", "Prices, services, delivery, opening hours, policies — trained on your pages and documents.", false],
  ["Qualifies and hands over", "Captures name, number and intent, then passes hot leads to your team in the same inbox.", false]
];

const chat = [
  ["out", "Do you do consultations this week?"],
  ["in", "Yes — I have Wednesday 11:00 and Thursday 16:00 open. Which suits you better?"],
  ["out", "Thursday please."],
  ["in", "Booked for Thursday 16:00. I've sent the confirmation to your email — anything else I can help with?"]
];

export default function WebsiteChatbot() {
  return (
    <section style={css("position:relative; borderTop:1px solid rgba(255,255,255,.06); background:#0A0F0D; overflow:hidden")}>
      <div
        style={css(
          "position:absolute; top:-120px; right:8%; width:640px; height:520px; background:radial-gradient(ellipse at center, rgba(29,217,139,.10), transparent 70%); filter:blur(14px); pointerEvents:none"
        )}
      ></div>
      <div
        data-r="pad two"
        style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px; position:relative; display:grid; gridTemplateColumns:1.02fr .98fr; gap:64px; alignItems:center")}
      >
        <div>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>New · Website chatbot</p>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(30px, 3.2vw, 46px); lineHeight:1.1; letterSpacing:-0.03em; fontWeight:700; margin:20px 0 0; color:#67766F"
            )}
          >
            A custom chatbot <span style={css("color:#F0F5F3")}>on your own website</span> — not a plugin.
          </h2>
          <p style={css("fontSize:15.5px; lineHeight:1.7; color:#84938D; marginTop:20px; maxWidth:540px; textWrap:pretty")}>
            Built and trained on your business, styled to your brand, and installed with one line of code. It talks like a
            person, not a menu of buttons — and it turns a visitor who was about to leave into a booked appointment.
          </p>
          <div data-r="g2" style={css("marginTop:34px; display:grid; gridTemplateColumns:1fr 1fr; gap:14px")}>
            {cards.map(([t, d, green]) => (
              <article
                key={t}
                style={css(
                  "border:1px solid " +
                    (green ? "rgba(29,217,139,.35)" : "rgba(255,255,255,.08)") +
                    "; borderRadius:18px; padding:20px; background:" +
                    (green ? "rgba(29,217,139,.07)" : "#101714")
                )}
              >
                <h3 style={css("fontSize:15px; fontWeight:700; color:" + (green ? "#1DD98B" : "#F0F5F3") + "; margin:0")}>{t}</h3>
                <p style={css("fontSize:13.5px; lineHeight:1.6; color:" + (green ? "#8FCBB2" : "#84938D") + "; margin:8px 0 0")}>{d}</p>
              </article>
            ))}
          </div>
          <div style={css("marginTop:28px; display:flex; alignItems:center; gap:18px; flexWrap:wrap")}>
            <a
              href="/website-chatbot"
              className="hvBtn"
              style={css(
                "display:inline-flex; alignItems:center; gap:10px; background:#1DD98B; color:#04100B; fontWeight:700; fontSize:15px; padding:14px 24px; borderRadius:999px"
              )}
            >
              Explore the website chatbot <span style={css("fontSize:17px")}>→</span>
            </a>
            <span style={css("fontSize:13.5px; color:#76857F")}>Matches your brand · works on mobile · one line of code</span>
          </div>
        </div>

        <div style={css("display:flex; justifyContent:center")}>
          <div
            style={css(
              "width:100%; maxWidth:460px; border:1px solid rgba(255,255,255,.10); borderRadius:22px; background:#0D1310; overflow:hidden; boxShadow:0 50px 110px -50px rgba(0,0,0,.95)"
            )}
          >
            <div style={css("display:flex; alignItems:center; gap:9px; padding:13px 16px; borderBottom:1px solid rgba(255,255,255,.07); background:rgba(255,255,255,.022)")}>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
              <span style={css("marginLeft:10px; fontSize:11.5px; color:#5F6E68; letterSpacing:0.04em")}>yourbusiness.com</span>
            </div>
            <div style={css("padding:22px 20px 24px; display:flex; flexDirection:column; gap:14px; background:#0A0F0D")}>
              <div style={css("display:flex; alignItems:center; gap:11px; paddingBottom:14px; borderBottom:1px solid rgba(255,255,255,.06)")}>
                <span
                  style={css(
                    "width:34px; height:34px; borderRadius:11px; background:rgba(29,217,139,.12); border:1px solid rgba(29,217,139,.28); color:#1DD98B; display:flex; alignItems:center; justifyContent:center; fontSize:12px; fontWeight:700"
                  )}
                >
                  AI
                </span>
                <span style={css("display:flex; flexDirection:column; gap:2px")}>
                  <span style={css("fontSize:14px; fontWeight:700; color:#F0F5F3")}>Chat with us</span>
                  <span style={css("fontSize:11.5px; color:#1DD98B")}>Online now · replies instantly</span>
                </span>
              </div>
              {chat.map(([dir, text], i) =>
                dir === "out" ? (
                  <div
                    key={i}
                    style={css(
                      "alignSelf:flex-end; maxWidth:82%; background:#1DD98B; color:#04140D; fontSize:13.5px; lineHeight:1.55; padding:11px 14px; borderRadius:16px 16px 4px 16px"
                    )}
                  >
                    {text}
                  </div>
                ) : (
                  <div
                    key={i}
                    style={css(
                      "alignSelf:flex-start; maxWidth:86%; background:#131A17; border:1px solid rgba(255,255,255,.07); color:#C7D4CE; fontSize:13.5px; lineHeight:1.55; padding:11px 14px; borderRadius:16px 16px 16px 4px"
                    )}
                  >
                    {text}
                  </div>
                )
              )}
              <div
                style={css(
                  "display:flex; alignItems:center; gap:9px; marginTop:4px; padding:9px 13px; borderRadius:999px; border:1px solid rgba(29,217,139,.3); background:rgba(29,217,139,.07); alignSelf:flex-start"
                )}
              >
                <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B")}></span>
                <span style={css("fontSize:11.5px; fontWeight:700; letterSpacing:0.08em; textTransform:uppercase; color:#1DD98B")}>
                  Appointment booked · lead saved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
