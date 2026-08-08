import React from "react";
import { css } from "../lib/css.js";

const problems = [
  ["01.", "Messages pile up after hours.", "Your busiest enquiry hours are 9pm to 1am. Nobody is on the phone then, so the sale cools overnight."],
  ["02.", "The same ten questions, forever.", "Price, delivery, location, stock. Your team retypes the answers all day instead of closing orders."],
  ["03.", "Leads live in three inboxes.", "WhatsApp here, Instagram there, Messenger and your website form somewhere else. No list, no follow-up, no record."]
];

const tiles = [
  ["Replies in seconds, always", "Every message gets a real answer within moments, day or night, weekends included.", false],
  ["Speaks your customer's language", "Bangla, English, Arabic, Hindi and Banglish — it replies the way the customer wrote.", false],
  ["Hands over to a human", "Your team can take over any chat with one tap, and the agent steps back politely.", false],
  ["Captures every lead", "Name, number, branch and intent saved to a dashboard you can export as CSV.", true]
];

export default function Product() {
  return (
    <>
      <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px")}>
        <div data-r="two" style={css("display:grid; gridTemplateColumns:1.1fr .9fr; gap:56px; alignItems:end")}>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(32px, 3.6vw, 52px); lineHeight:1.08; letterSpacing:-0.03em; fontWeight:700; margin:0; color:#67766F"
            )}
          >
            Every <span style={css("color:#F0F5F3")}>slow reply</span> is a customer <span style={css("color:#1DD98B")}>buying elsewhere.</span>
          </h2>
          <p style={css("fontSize:15.5px; lineHeight:1.7; color:#84938D; margin:0; textWrap:pretty")}>
            Most businesses answer DMs when someone is free. Buyers don't wait that long — they message three shops and buy
            from whoever answers first.
          </p>
        </div>
        <div data-r="g3" style={css("marginTop:52px; display:grid; gridTemplateColumns:repeat(3, 1fr); gap:20px")}>
          {problems.map(([n, t, d]) => (
            <article
              key={n}
              className="hvBorderSoft"
              style={css(
                "border:1px solid rgba(255,255,255,.08); borderRadius:22px; padding:34px 30px; background:#0D1310; minHeight:250px; display:flex; flexDirection:column"
              )}
            >
              <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:15px; fontWeight:700; color:#1DD98B")}>{n}</div>
              <h3
                style={css(
                  "fontFamily:'Inter',system-ui,sans-serif; fontSize:21px; fontWeight:600; lineHeight:1.25; letterSpacing:-0.02em; color:#F0F5F3; margin:22px 0 0"
                )}
              >
                {t}
              </h3>
              <p style={css("fontSize:14.5px; lineHeight:1.65; color:#84938D; margin:14px 0 0")}>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={css(
          "position:relative; borderTop:1px solid rgba(255,255,255,.06); borderBottom:1px solid rgba(255,255,255,.06); background:#0A0F0D; overflow:hidden"
        )}
      >
        <div
          style={css(
            "position:absolute; top:34%; left:50%; width:1100px; height:640px; transform:translateX(-50%); background:radial-gradient(ellipse at center, rgba(29,217,139,.14), transparent 66%); filter:blur(24px); pointerEvents:none"
          )}
        ></div>
        <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px; position:relative")}>
          <div style={css("maxWidth:760px; margin:0 auto; textAlign:center")}>
            <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>What we build</p>
            <h2
              style={css(
                "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(30px, 3.4vw, 48px); lineHeight:1.1; letterSpacing:-0.035em; fontWeight:700; margin:20px 0 0; color:#F0F5F3; textWrap:balance"
              )}
            >
              One agent that works your inbox <span style={css("color:#1DD98B")}>like your best salesperson.</span>
            </h2>
            <p style={css("fontSize:16px; lineHeight:1.7; color:#84938D; margin:18px auto 0; maxWidth:560px; textWrap:pretty")}>
              Trained on your products, prices and policies — not a generic bot. Every conversation lands in one dashboard.
            </p>
          </div>

          <div
            style={css(
              "marginTop:56px; borderRadius:22px; padding:1px; background:linear-gradient(135deg, rgba(29,217,139,.65), rgba(29,217,139,.10) 38%, rgba(255,255,255,.06) 62%, rgba(29,217,139,.45)); boxShadow:0 70px 150px -60px rgba(0,0,0,.98), 0 0 90px -40px rgba(29,217,139,.45)"
            )}
          >
            <div style={css("borderRadius:21px; padding:14px; background:#070B0A")}>
              <div style={css("borderRadius:13px; overflow:hidden; border:1px solid rgba(255,255,255,.08)")}>
                <div style={css("display:flex; alignItems:center; gap:14px; padding:12px 16px; background:#0D1310; borderBottom:1px solid rgba(255,255,255,.07)")}>
                  <div style={css("display:flex; gap:8px; flexShrink:0")}>
                    <span style={css("width:12px; height:12px; borderRadius:999px; background:#FF5F57")}></span>
                    <span style={css("width:12px; height:12px; borderRadius:999px; background:#FEBC2E")}></span>
                    <span style={css("width:12px; height:12px; borderRadius:999px; background:#28C840")}></span>
                  </div>
                  <div style={css("flex:1; display:flex; justifyContent:center")}>
                    <span
                      style={css(
                        "display:inline-flex; alignItems:center; gap:8px; padding:5px 16px; borderRadius:8px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06); fontSize:11.5px; color:#5F6E68; letterSpacing:0.02em"
                      )}
                    >
                      app.falahchat.com
                    </span>
                  </div>
                  <div style={css("width:56px; flexShrink:0")}></div>
                </div>
                <img src="/images/dashboard.jpeg" alt="The Falah Chat lead inbox dashboard" loading="lazy" style={css("display:block; width:100%; height:auto")} />
              </div>
            </div>
          </div>

          <div data-r="g4" style={css("marginTop:44px; display:grid; gridTemplateColumns:repeat(4, 1fr); gap:18px")}>
            {tiles.map(([t, d, green]) => (
              <article
                key={t}
                style={css(
                  "border:1px solid " +
                    (green ? "rgba(29,217,139,.35)" : "rgba(255,255,255,.08)") +
                    "; borderRadius:20px; padding:26px; background:" +
                    (green ? "rgba(29,217,139,.07)" : "#101714")
                )}
              >
                <h3 style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:16px; fontWeight:700; color:" + (green ? "#1DD98B" : "#F0F5F3") + "; margin:0")}>
                  {t}
                </h3>
                <p style={css("fontSize:13.5px; lineHeight:1.6; color:" + (green ? "#8FCBB2" : "#84938D") + "; margin:10px 0 0")}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
