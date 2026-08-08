import React, { useState } from "react";
import { css } from "../lib/css.js";
import { CHANNELS, LEADS } from "../data.js";

const TABS = ["All", "WhatsApp", "Instagram", "Messenger", "Website"];

export default function Inbox() {
  const [tab, setTab] = useState("All");
  const leads = tab === "All" ? LEADS : LEADS.filter((l) => l.channel === tab);

  return (
    <section style={css("borderTop:1px solid rgba(255,255,255,.06); background:#0A0F0D; position:relative; overflow:hidden")}>
      <div
        style={css(
          "position:absolute; top:50%; left:50%; width:760px; height:520px; transform:translate(-50%,-50%); background:radial-gradient(ellipse at center, rgba(29,217,139,.09), transparent 70%); filter:blur(10px); pointerEvents:none"
        )}
      ></div>
      <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px; position:relative")}>
        <div style={css("maxWidth:680px")}>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>One dashboard</p>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(30px, 3.2vw, 46px); lineHeight:1.1; letterSpacing:-0.03em; fontWeight:700; margin:20px 0 0; color:#67766F"
            )}
          >
            Four channels in, <span style={css("color:#F0F5F3")}>one place to work</span> your leads.
          </h2>
          <p style={css("fontSize:15.5px; lineHeight:1.7; color:#84938D; marginTop:20px; textWrap:pretty")}>
            WhatsApp, Instagram, Messenger and the chatbot on your own website all feed the same inbox. Every conversation
            the agent handles becomes a lead with a name, a number and a next step — no tab switching, nothing lost in a DM
            request folder.
          </p>
        </div>

        <div data-r="flow" style={css("marginTop:56px; display:grid; gridTemplateColumns:236px 132px 1fr; gap:0; alignItems:center")}>
          <div style={css("display:flex; flexDirection:column; gap:16px")}>
            {CHANNELS.map((c, i) => (
              <a
                key={c.key}
                href={c.path}
                className="hvBorder"
                style={css(
                  "textAlign:left; display:flex; alignItems:center; gap:13px; border:1px solid rgba(255,255,255,.10); borderRadius:18px; padding:15px 16px; background:#0F1613; boxShadow:0 20px 40px -28px rgba(0,0,0,.9); animation:" +
                    (i % 2 ? "driftB" : "driftA") +
                    " " +
                    (9 + i) +
                    "s ease-in-out infinite"
                )}
              >
                <span
                  style={css(
                    "width:38px; height:38px; borderRadius:12px; background:rgba(29,217,139,.12); border:1px solid rgba(29,217,139,.28); color:#1DD98B; display:flex; alignItems:center; justifyContent:center; fontFamily:'Inter',system-ui,sans-serif; fontSize:13px; fontWeight:700; letterSpacing:0.02em; flexShrink:0"
                  )}
                >
                  {c.mark}
                </span>
                <span style={css("display:flex; flexDirection:column; gap:3px")}>
                  <span style={css("fontSize:14.5px; fontWeight:700; color:#F0F5F3")}>{c.key}</span>
                  <span style={css("fontSize:11.5px; color:#76857F")}>{c.note}</span>
                </span>
              </a>
            ))}
          </div>

          <div data-r="flowline" style={css("position:relative; height:318px")} aria-hidden="true">
            <svg viewBox="0 0 132 318" preserveAspectRatio="none" style={css("position:absolute; inset:0; width:100%; height:100%; overflow:visible")}>
              {[35, 118, 200, 283].map((y, i) => (
                <path key={"b" + i} d={`M0 ${y} C58 ${y} 60 159 124 159`} fill="none" stroke="rgba(29,217,139,.30)" strokeWidth="1.2"></path>
              ))}
              {[35, 118, 200, 283].map((y, i) => (
                <path
                  key={"f" + i}
                  d={`M0 ${y} C58 ${y} 60 159 124 159`}
                  fill="none"
                  stroke="#1DD98B"
                  strokeWidth="1.6"
                  strokeDasharray="5 260"
                  style={{ animation: `dashFlow 3.4s ${i * 0.85}s linear infinite` }}
                ></path>
              ))}
            </svg>
            <div
              style={css(
                "position:absolute; top:50%; right:0; transform:translate(50%,-50%); width:16px; height:16px; borderRadius:999px; background:#1DD98B; boxShadow:0 0 0 5px rgba(29,217,139,.14)"
              )}
            ></div>
            <div
              style={css(
                "position:absolute; top:50%; right:0; transform:translate(50%,-50%); width:16px; height:16px; borderRadius:999px; border:1px solid #1DD98B; animation:pulseRing 2.4s ease-out infinite"
              )}
            ></div>
          </div>

          <div
            style={css(
              "border:1px solid rgba(255,255,255,.10); borderRadius:24px; background:#0D1310; overflow:hidden; boxShadow:0 50px 110px -50px rgba(0,0,0,.95)"
            )}
          >
            <div
              style={css(
                "display:flex; alignItems:center; justifyContent:space-between; gap:20px; padding:18px 22px; borderBottom:1px solid rgba(255,255,255,.07); background:rgba(255,255,255,.022); flexWrap:wrap"
              )}
            >
              <div style={css("display:flex; alignItems:baseline; gap:10px")}>
                <span style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:16px; fontWeight:700; color:#F0F5F3")}>Lead inbox</span>
                <span style={css("fontSize:12px; color:#76857F")}>
                  {leads.length} {leads.length === 1 ? "lead" : "leads"}
                </span>
              </div>
              <div style={css("display:flex; gap:8px; flexWrap:wrap")}>
                {TABS.map((t) => {
                  const on = t === tab;
                  return (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className="hvBorder"
                      style={css(
                        "borderRadius:999px; padding:7px 14px; fontSize:12px; fontWeight:700; whiteSpace:nowrap; background:" +
                          (on ? "#1DD98B" : "transparent") +
                          "; color:" +
                          (on ? "#04140D" : "#93A29C") +
                          "; border:1px solid " +
                          (on ? "#1DD98B" : "rgba(255,255,255,.12)")
                      )}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={css("display:flex; flexDirection:column")}>
              {leads.map((l, i) => (
                <div
                  key={l.name + i}
                  data-r="leadrow"
                  className="hvRow"
                  style={css(
                    "display:grid; gridTemplateColumns:190px 1fr auto; gap:18px; alignItems:center; padding:16px 22px; borderBottom:1px solid rgba(255,255,255,.05); animation:fadeUp .45s ease both; animationDelay:" +
                      i * 0.06 +
                      "s"
                  )}
                >
                  <div style={css("display:flex; alignItems:center; gap:11px; minWidth:0")}>
                    <span
                      style={css(
                        "width:30px; height:30px; borderRadius:9px; background:rgba(29,217,139,.1); border:1px solid rgba(29,217,139,.22); color:#1DD98B; display:flex; alignItems:center; justifyContent:center; fontSize:11px; fontWeight:700; flexShrink:0"
                      )}
                    >
                      {l.channel === "WhatsApp" ? "WA" : l.channel === "Instagram" ? "IG" : l.channel === "Messenger" ? "MS" : "WEB"}
                    </span>
                    <span style={css("display:flex; flexDirection:column; gap:2px; minWidth:0")}>
                      <span dir="auto" style={css("fontSize:14px; fontWeight:700; color:#F0F5F3; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>
                        {l.name}
                      </span>
                      <span style={css("fontSize:11.5px; color:#76857F")}>
                        {l.channel} · {l.lang}
                      </span>
                    </span>
                  </div>
                  <div dir="auto" data-r="leadsnip" style={css("fontSize:13.5px; color:#93A29C; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>
                    {l.snippet}
                  </div>
                  {l.hot ? (
                    <span style={css("fontSize:11.5px; fontWeight:700; color:#04140D; background:#1DD98B; padding:6px 12px; borderRadius:999px; whiteSpace:nowrap")}>
                      {l.status}
                    </span>
                  ) : (
                    <span
                      style={css(
                        "fontSize:11.5px; fontWeight:700; color:#84938D; border:1px solid rgba(255,255,255,.14); padding:5px 12px; borderRadius:999px; whiteSpace:nowrap"
                      )}
                    >
                      {l.status}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              style={css(
                "display:flex; alignItems:center; justifyContent:space-between; gap:16px; padding:16px 22px; background:rgba(255,255,255,.022); flexWrap:wrap"
              )}
            >
              <div style={css("fontSize:12.5px; color:#76857F")}>Export as CSV · assign to a teammate · take over any chat</div>
              <a
                href="/pricing"
                className="hvBorder"
                style={css(
                  "border:1px solid rgba(255,255,255,.14); color:#F0F5F3; borderRadius:999px; padding:9px 18px; fontSize:12.5px; fontWeight:700; whiteSpace:nowrap"
                )}
              >
                Included from Growth →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
