import React, { useState } from "react";
import { css } from "../lib/css.js";
import { STEPS } from "../data.js";

export default function HowItWorks() {
  const [step, setStep] = useState(0);
  const s = STEPS[step];

  return (
    <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px")}>
      <div style={css("maxWidth:620px; margin:0 auto; textAlign:center")}>
        <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Simple steps</p>
        <h2
          style={css(
            "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(30px, 3.4vw, 48px); lineHeight:1.1; letterSpacing:-0.035em; fontWeight:700; margin:18px 0 0; color:#F0F5F3"
          )}
        >
          How it works
        </h2>
        <p style={css("fontSize:16px; lineHeight:1.65; color:#84938D; margin:16px 0 0; textWrap:pretty")}>
          No long build, no new software for your team. Live in 5 to 10 working days.
        </p>
      </div>

      <div data-r="two" style={css("marginTop:64px; display:grid; gridTemplateColumns:1fr 1fr; gap:72px; alignItems:center")}>
        <div data-r="howcol" style={css("position:relative; paddingBottom:70px; paddingRight:56px")}>
          <div
            style={css(
              "position:relative; width:100%; maxWidth:400px; aspectRatio:4 / 5; borderRadius:24px; overflow:hidden; border:1px solid rgba(255,255,255,.08); background:#101714; boxShadow:0 50px 110px -60px rgba(0,0,0,.95)"
            )}
          >
            <img
              src="/images/how-it-works.webp"
              alt="How Falah Chat works for business owners"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              style={css("position:absolute; inset:0; width:100%; height:100%; objectFit:cover")}
            />
            <div
              style={css(
                "position:absolute; inset:0; pointerEvents:none; background:linear-gradient(180deg, rgba(7,11,10,.18) 0%, transparent 40%, rgba(7,11,10,.45) 100%)"
              )}
            ></div>
          </div>

          <div
            style={css(
              "position:absolute; top:40%; left:58%; zIndex:3; display:inline-flex; alignItems:center; gap:8px; padding:8px 14px; borderRadius:999px; background:#1DD98B; color:#04140D; fontSize:12px; fontWeight:700; whiteSpace:nowrap; boxShadow:0 18px 40px -18px rgba(29,217,139,.8); animation:floatCard 7s ease-in-out infinite"
            )}
          >
            {s.pill}
          </div>

          <div
            style={css(
              "position:absolute; right:0; bottom:0; zIndex:2; width:min(320px, 78%); borderRadius:20px; border:1px solid rgba(255,255,255,.10); background:rgba(13,19,16,.92); backdropFilter:blur(20px); WebkitBackdropFilter:blur(20px); boxShadow:0 40px 90px -40px rgba(0,0,0,.98); overflow:hidden"
            )}
          >
            <div style={css("padding:14px 16px; borderBottom:1px solid rgba(255,255,255,.07); fontSize:12.5px; fontWeight:700; color:#F0F5F3")}>{s.cardTitle}</div>
            <div style={css("padding:14px 16px; display:flex; flexDirection:column; gap:10px")}>
              {s.rows.map(([mark, label, tag, tagColor]) => (
                <div key={label} style={css("display:flex; alignItems:center; gap:11px")}>
                  <span
                    style={css(
                      "flexShrink:0; width:26px; height:26px; borderRadius:8px; background:rgba(29,217,139,.12); border:1px solid rgba(29,217,139,.28); color:#1DD98B; display:flex; alignItems:center; justifyContent:center; fontSize:9.5px; fontWeight:800"
                    )}
                  >
                    {mark}
                  </span>
                  <span style={css("flex:1; minWidth:0; fontSize:12.5px; color:#C7D4CE; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>{label}</span>
                  <span style={css("flexShrink:0; fontSize:10.5px; fontWeight:700; letterSpacing:0.06em; textTransform:uppercase; color:" + tagColor)}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ol style={css("listStyle:none; margin:0; padding:0; display:flex; flexDirection:column")}>
          {STEPS.map((st, i) => {
            const on = i === step;
            return (
              <li key={st.num}>
                <button
                  onClick={() => setStep(i)}
                  className="hvStepRail"
                  style={css(
                    "width:100%; textAlign:left; background:none; border:none; borderLeft:2px solid " +
                      (on ? "#1DD98B" : "rgba(255,255,255,.10)") +
                      "; padding:22px 0 26px 26px; display:flex; gap:18px; alignItems:flex-start"
                  )}
                >
                  <span
                    style={css(
                      "flexShrink:0; width:42px; height:42px; borderRadius:13px; background:" +
                        (on ? "#1DD98B" : "rgba(255,255,255,.04)") +
                        "; border:1px solid " +
                        (on ? "#1DD98B" : "rgba(255,255,255,.12)") +
                        "; color:" +
                        (on ? "#04140D" : "#84938D") +
                        "; display:flex; alignItems:center; justifyContent:center; fontFamily:'Inter',system-ui,sans-serif; fontSize:14px; fontWeight:700"
                    )}
                  >
                    {st.num}
                  </span>
                  <span style={css("display:flex; flexDirection:column; gap:8px")}>
                    <span
                      style={css(
                        "fontFamily:'Inter',system-ui,sans-serif; fontSize:19px; fontWeight:600; letterSpacing:-0.02em; color:" + (on ? "#F0F5F3" : "#B9C7C1")
                      )}
                    >
                      {st.title}
                    </span>
                    <span style={css("fontSize:14.5px; lineHeight:1.65; color:#84938D; maxWidth:420px")}>{st.desc}</span>
                  </span>
                </button>
              </li>
            );
          })}
          <li style={css("paddingLeft:28px; marginTop:14px")}>
            <a
              href="/pricing"
              className="hvBorder"
              style={css(
                "display:inline-flex; alignItems:center; gap:9px; border:1px solid rgba(255,255,255,.14); color:#F0F5F3; borderRadius:999px; padding:12px 22px; fontSize:14px; fontWeight:700; whiteSpace:nowrap"
              )}
            >
              See what's included <span>→</span>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
