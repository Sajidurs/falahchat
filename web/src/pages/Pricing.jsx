import React, { useState } from "react";
import Shell from "../components/Shell.jsx";
import { css, CALENDLY } from "../lib/css.js";
import { PLANS, PRICES, FAQS } from "../data.js";

const CURRENCIES = ["BDT", "USD", "AED"];

export default function Pricing() {
  const [cur, setCur] = useState("USD");
  const [open, setOpen] = useState(0);
  const prices = PRICES[cur];

  return (
    <Shell current="/pricing">
      <main data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:76px 28px 96px")}>
        <div style={css("maxWidth:720px; margin:0 auto; textAlign:center")}>
          <h1
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(32px, 3.8vw, 52px); lineHeight:1.1; letterSpacing:-0.035em; fontWeight:700; margin:0; color:#F0F5F3"
            )}
          >
            <span style={css("color:#1DD98B")}>Smart Pricing</span> for Smarter Deals
          </h1>
          <p style={css("fontSize:16px; lineHeight:1.65; color:#84938D; margin:18px auto 0; maxWidth:560px; textWrap:pretty")}>
            Pick the plan that fits your workflow and scale as your business grows. One setup fee, then a monthly fee to run,
            monitor and improve your agent. No long contract.
          </p>
        </div>

        <div style={css("marginTop:38px; display:flex; justifyContent:center")}>
          <div
            style={css("display:inline-flex; gap:6px; padding:6px; borderRadius:999px; border:1px solid rgba(255,255,255,.12); background:#0D1310")}
            role="tablist"
            aria-label="Currency"
          >
            {CURRENCIES.map((c) => {
              const on = c === cur;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setCur(c)}
                  style={css(
                    "border:none; borderRadius:999px; padding:11px 24px; fontSize:14px; fontWeight:700; background:" +
                      (on ? "#1DD98B" : "transparent") +
                      "; color:" +
                      (on ? "#04140D" : "#93A29C")
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div
          data-r="pricing3"
          style={css("marginTop:40px; display:grid; gridTemplateColumns:repeat(3, 1fr); gap:22px; alignItems:start; maxWidth:1080px; marginLeft:auto; marginRight:auto")}
        >
          {PLANS.map((p, i) => (
            <article
              key={p.name}
              style={css(
                "position:relative; border:1px solid " +
                  (p.popular ? "rgba(29,217,139,.55)" : "rgba(255,255,255,.10)") +
                  "; borderRadius:20px; padding:30px 26px 32px; background:" +
                  (p.popular ? "#0C1512" : "#0D1310") +
                  "; overflow:hidden" +
                  (p.popular ? "; animation:popGlow 3.6s ease-in-out infinite" : "")
              )}
            >
              {p.popular && (
                <>
                  <div style={css("position:absolute; top:0; right:0; width:80px; height:80px; overflow:hidden; pointerEvents:none")}>
                    <div
                      style={css(
                        "position:absolute; top:22px; left:-26px; width:114px; transform:rotate(-45deg); background:#1DD98B; color:#04140D; textAlign:center; fontSize:7.5px; fontWeight:800; whiteSpace:nowrap; padding:4px 0; boxShadow:0 8px 22px -10px rgba(29,217,139,.9)"
                      )}
                    >
                      Most Recommended
                    </div>
                  </div>
                  <div style={css("position:absolute; top:0; left:0; right:0; height:100%; overflow:hidden; pointerEvents:none")}>
                    <div
                      style={css(
                        "position:absolute; top:0; bottom:0; width:38%; background:linear-gradient(90deg, transparent, rgba(29,217,139,.09), transparent); animation:popSweep 4.2s ease-in-out infinite"
                      )}
                    ></div>
                  </div>
                </>
              )}
              <div style={css("position:relative")}>
                <h2 style={css("fontSize:15px; fontWeight:600; color:#1DD98B; margin:0")}>{p.name}</h2>
                <div style={css("marginTop:18px; display:flex; alignItems:baseline; gap:8px")}>
                  <span style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:34px; fontWeight:700; letterSpacing:-0.035em; color:#F0F5F3")}>
                    {prices[i][1]}
                  </span>
                  <span style={css("fontSize:12.5px; color:#76857F")}>(per month)</span>
                </div>
                <div style={css("marginTop:9px; fontSize:12.5px; fontWeight:700; color:#C7D4CE")}>
                  {prices[i][0]} <span style={css("fontWeight:400; color:#76857F")}>one-time onboarding fee</span>
                </div>
                <p style={css("margin:20px 0 0; fontSize:13px; lineHeight:1.6; color:#84938D; minHeight:62px; textWrap:pretty")}>{p.blurb}</p>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener"
                  className="hvBtnDeep"
                  style={css(
                    "marginTop:4px; display:flex; justifyContent:center; background:#2E7D50; border:1px solid rgba(29,217,139,.45); color:#EAF7F0; fontWeight:600; fontSize:13.5px; padding:11px 20px; borderRadius:8px"
                  )}
                >
                  Get Started
                </a>
                <div
                  style={css(
                    "marginTop:26px; paddingTop:22px; borderTop:1px solid rgba(255,255,255,.08); fontSize:11.5px; fontWeight:700; letterSpacing:0.1em; textTransform:uppercase; color:#C7D4CE"
                  )}
                >
                  What's included?
                </div>
                <ul style={css("listStyle:none; padding:0; margin:18px 0 0; display:flex; flexDirection:column; gap:11px")}>
                  {p.features.map((f) => (
                    <li key={f} style={css("display:flex; gap:10px; alignItems:flex-start; fontSize:13px; lineHeight:1.5; color:#93A29C")}>
                      <span
                        style={css(
                          "flexShrink:0; marginTop:1px; width:15px; height:15px; borderRadius:999px; border:1px solid rgba(29,217,139,.5); color:#1DD98B; fontSize:9px; display:flex; alignItems:center; justifyContent:center"
                        )}
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div style={css("maxWidth:1080px; margin:34px auto 0; display:flex; alignItems:baseline; gap:22px; flexWrap:wrap; fontSize:12.5px; color:#76857F")}>
          <span style={css("fontWeight:700; color:#C7D4CE")}>Additional usage (pay-as-you-go):</span>
          <span>Extra conversations beyond your plan — billed per conversation</span>
          <span>·</span>
          <span>Additional channel — quoted monthly</span>
          <span>·</span>
          <span>Custom integrations — quoted per project</span>
        </div>

        <div id="faq" data-r="two" style={css("marginTop:96px; display:grid; gridTemplateColumns:.8fr 1.2fr; gap:56px")}>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(28px, 3vw, 42px); lineHeight:1.1; letterSpacing:-0.03em; fontWeight:700; margin:0; color:#67766F"
            )}
          >
            Common <span style={css("color:#F0F5F3")}>questions</span>
          </h2>
          <div style={css("display:flex; flexDirection:column; borderTop:1px solid rgba(255,255,255,.09)")}>
            {FAQS.map((q, i) => {
              const isOpen = i === open;
              return (
                <div key={q.q} style={css("borderBottom:1px solid rgba(255,255,255,.09)")}>
                  <h3 style={css("margin:0")}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      style={css(
                        "width:100%; display:flex; alignItems:center; justifyContent:space-between; gap:20px; background:none; border:none; padding:22px 0; textAlign:left; fontFamily:'Inter',system-ui,sans-serif; fontSize:18px; fontWeight:600; letterSpacing:-0.01em; color:#F0F5F3"
                      )}
                    >
                      <span>{q.q}</span>
                      <span style={css("color:#1DD98B; fontSize:22px; lineHeight:1")}>{isOpen ? "–" : "+"}</span>
                    </button>
                  </h3>
                  {isOpen && <p style={css("margin:0 0 24px; paddingRight:40px; fontSize:15px; lineHeight:1.7; color:#84938D; textWrap:pretty")}>{q.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Shell>
  );
}
