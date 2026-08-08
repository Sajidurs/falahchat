import React from "react";
import Shell from "../components/Shell.jsx";
import { css, CALENDLY } from "../lib/css.js";
import { AGENTS } from "../data.js";

const timeline = [
  ["01.", "A 20-minute call", "We look at your real enquiries and tell you honestly whether this agent earns its keep."],
  ["02.", "We build and train it", "Your products, prices, policies and tone of voice, tested against real questions before launch."],
  ["03.", "You watch leads land", "Every conversation becomes a lead in your dashboard. We keep tuning it month after month."]
];

export default function AgentPage({ slug }) {
  const agent = AGENTS.find((a) => a.slug === slug) || AGENTS[0];

  return (
    <Shell current={agent.path}>
      <main>
        <section style={css("position:relative; overflow:hidden")}>
          <div
            style={css(
              "position:absolute; top:-200px; left:50%; width:900px; height:560px; transform:translateX(-50%); background:radial-gradient(ellipse at center, rgba(29,217,139,.10), transparent 65%); filter:blur(18px); pointerEvents:none"
            )}
          ></div>
          <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:64px 28px 0; position:relative")}>
            <nav aria-label="Agents" style={css("display:flex; gap:8px; flexWrap:wrap; justifyContent:center")}>
              {AGENTS.map((a) => {
                const on = a.slug === agent.slug;
                return (
                  <a
                    key={a.slug}
                    href={a.path}
                    className="hvBorder"
                    style={css(
                      "display:inline-flex; alignItems:center; gap:9px; borderRadius:999px; padding:9px 16px; fontSize:13.5px; fontWeight:600; whiteSpace:nowrap; border:1px solid " +
                        (on ? "#1DD98B" : "rgba(255,255,255,.12)") +
                        "; background:" +
                        (on ? "#1DD98B" : "transparent") +
                        "; color:" +
                        (on ? "#04140D" : "#93A29C")
                    )}
                  >
                    <span style={css("fontSize:10.5px; fontWeight:800; letterSpacing:0.08em; opacity:.7")}>{a.mark}</span>
                    {a.name}
                  </a>
                );
              })}
            </nav>

            <div style={css("maxWidth:840px; margin:0 auto; textAlign:center; paddingTop:52px")}>
              <p
                style={css(
                  "display:inline-flex; alignItems:center; gap:9px; padding:7px 15px 7px 11px; borderRadius:999px; border:1px solid rgba(29,217,139,.22); background:rgba(29,217,139,.06); margin:0"
                )}
              >
                <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B")}></span>
                <span style={css("fontSize:12px; fontWeight:700; letterSpacing:0.14em; textTransform:uppercase; color:#1DD98B")}>{agent.tag}</span>
              </p>
              <h1
                style={css(
                  "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(34px, 4.2vw, 60px); lineHeight:1.06; letterSpacing:-0.038em; fontWeight:700; margin:26px 0 0; color:#67766F; textWrap:balance"
                )}
              >
                {agent.headA}
                <span style={css("color:#F0F5F3")}>{agent.headB}</span>
                {agent.headC}
              </h1>
              <p style={css("margin:24px auto 0; maxWidth:640px; fontSize:16.5px; lineHeight:1.7; color:#93A29C; textWrap:pretty")}>{agent.intro}</p>
              <div style={css("marginTop:32px; display:flex; justifyContent:center; gap:14px; flexWrap:wrap")}>
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
                <a
                  href="/pricing"
                  className="hvBorder"
                  style={css(
                    "display:inline-flex; alignItems:center; gap:10px; border:1px solid rgba(255,255,255,.14); color:#F0F5F3; fontWeight:700; fontSize:15.5px; padding:15px 26px; borderRadius:999px; whiteSpace:nowrap; flexShrink:0"
                  )}
                >
                  See pricing
                </a>
              </div>
            </div>

            <div data-r="g3" style={css("marginTop:64px; display:grid; gridTemplateColumns:repeat(3, 1fr); gap:20px; maxWidth:900px; marginLeft:auto; marginRight:auto")}>
              {agent.stats.map(([big, small]) => (
                <div key={small} style={css("border:1px solid rgba(255,255,255,.08); borderRadius:20px; padding:26px 24px; background:#0D1310; textAlign:center")}>
                  <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:28px; fontWeight:700; letterSpacing:-0.03em; color:#1DD98B")}>{big}</div>
                  <div style={css("marginTop:8px; fontSize:13px; color:#84938D")}>{small}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px 0")}>
          <div style={css("maxWidth:620px")}>
            <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Benefits</p>
            <h2
              style={css(
                "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(28px, 3.2vw, 44px); lineHeight:1.1; letterSpacing:-0.03em; fontWeight:700; margin:20px 0 0; color:#67766F"
              )}
            >
              What the <span style={css("color:#F0F5F3")}>{agent.name}</span> does for you.
            </h2>
          </div>
          <div data-r="g3" style={css("marginTop:44px; display:grid; gridTemplateColumns:repeat(3, 1fr); gap:20px")}>
            {agent.benefits.map((b, i) => (
              <article
                key={b.t}
                className="hvBorderStrong"
                style={css("border:1px solid rgba(255,255,255,.08); borderRadius:22px; padding:30px 28px; background:#0D1310; display:flex; flexDirection:column")}
              >
                <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:14px; fontWeight:700; color:#1DD98B")}>
                  {String(i + 1).padStart(2, "0")}.
                </div>
                <h3
                  style={css(
                    "fontFamily:'Inter',system-ui,sans-serif; fontSize:19px; fontWeight:600; lineHeight:1.28; letterSpacing:-0.02em; color:#F0F5F3; margin:18px 0 0"
                  )}
                >
                  {b.t}
                </h3>
                <p style={css("fontSize:14px; lineHeight:1.65; color:#84938D; margin:12px 0 0; textWrap:pretty")}>{b.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:88px 28px 0")}>
          <div
            data-r="two padcard"
            style={css(
              "border:1px solid rgba(255,255,255,.08); borderRadius:26px; background:#0A0F0D; padding:48px 44px; display:grid; gridTemplateColumns:.85fr 1.15fr; gap:56px; alignItems:start"
            )}
          >
            <div>
              <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Day to day</p>
              <h2
                style={css(
                  "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(26px, 2.6vw, 36px); lineHeight:1.14; letterSpacing:-0.03em; fontWeight:700; margin:18px 0 0; color:#F0F5F3"
                )}
              >
                What it handles without you.
              </h2>
              <p style={css("fontSize:14.5px; lineHeight:1.7; color:#84938D; marginTop:18px; textWrap:pretty")}>
                Trained on your products, prices and policies before it goes near a customer — and anything outside its scope
                is passed straight to your team.
              </p>
            </div>
            <ul data-r="g2" style={css("listStyle:none; padding:0; margin:0; display:grid; gridTemplateColumns:1fr 1fr; gap:14px 26px")}>
              {agent.handles.map((x) => (
                <li
                  key={x}
                  style={css(
                    "display:flex; gap:11px; alignItems:flex-start; fontSize:14.5px; lineHeight:1.5; color:#B9C7C1; paddingBottom:14px; borderBottom:1px solid rgba(255,255,255,.06)"
                  )}
                >
                  <span
                    style={css(
                      "flexShrink:0; marginTop:2px; width:16px; height:16px; borderRadius:999px; border:1px solid rgba(29,217,139,.5); color:#1DD98B; fontSize:9px; display:flex; alignItems:center; justifyContent:center"
                    )}
                  >
                    ✓
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:88px 28px 96px")}>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(26px, 2.8vw, 40px); lineHeight:1.12; letterSpacing:-0.03em; fontWeight:700; margin:0; color:#67766F"
            )}
          >
            Live in <span style={css("color:#F0F5F3")}>5 to 10 working days</span>.
          </h2>
          <div data-r="g3" style={css("marginTop:36px; display:grid; gridTemplateColumns:repeat(3, 1fr); gap:20px")}>
            {timeline.map(([n, t, d]) => (
              <article key={n} style={css("border:1px solid rgba(255,255,255,.08); borderRadius:22px; padding:32px 28px; background:#0D1310")}>
                <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:14px; fontWeight:700; color:#1DD98B")}>{n}</div>
                <h3 style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:20px; fontWeight:600; letterSpacing:-0.02em; color:#F0F5F3; margin:18px 0 0")}>{t}</h3>
                <p style={css("fontSize:14px; lineHeight:1.65; color:#84938D; margin:12px 0 0")}>{d}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
