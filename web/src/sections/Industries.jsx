import React, { useCallback, useRef, useState } from "react";
import { css, CALENDLY } from "../lib/css.js";
import { INDUSTRIES } from "../data.js";

export default function Industries() {
  const rail = useRef(null);
  const [active, setActive] = useState(0);
  const [bar, setBar] = useState({ width: "34%", left: "0%" });

  const measure = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const frac = el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1;
    const pct = max > 0 ? el.scrollLeft / max : 0;
    setBar({ width: (frac * 100).toFixed(2) + "%", left: (pct * (1 - frac) * 100).toFixed(2) + "%" });
  }, []);

  const nudge = (dir) => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const from = el.scrollLeft;
    const to = Math.max(0, Math.min(max, from + dir * Math.round(el.clientWidth * 0.7)));
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 420);
      el.scrollLeft = from + (to - from) * (1 - Math.pow(1 - k, 3));
      measure();
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section id="industries" style={css("borderTop:1px solid rgba(255,255,255,.06); background:#070B0A")}>
      <div data-r="indpad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 0 96px 28px")}>
        <div data-r="indinner" style={css("paddingRight:28px")}>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>/ Industries we serve</p>
          <div data-r="two" style={css("marginTop:26px; display:grid; gridTemplateColumns:1.15fr .85fr; gap:56px; alignItems:end")}>
            <h2
              style={css(
                "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(34px, 4.4vw, 62px); lineHeight:1.02; letterSpacing:-0.035em; fontWeight:700; margin:0; color:#F0F5F3"
              )}
            >
              Trained for
              <br />
              <span style={css("color:#67766F")}>your industry</span>
            </h2>
            <div>
              <p style={css("fontSize:15.5px; lineHeight:1.7; color:#84938D; margin:0; maxWidth:420px; textWrap:pretty")}>
                Every agent is trained on the questions your customers actually ask — pricing, availability, bookings and
                follow-ups, in the way your industry works.
              </p>
              <div style={css("marginTop:22px; display:flex; gap:26px; flexWrap:wrap")}>
                <a href={CALENDLY} target="_blank" rel="noopener" style={css("fontSize:14.5px; fontWeight:600; display:inline-flex; alignItems:center; gap:8px")}>
                  Book a demo <span style={css("fontSize:12px")}>›</span>
                </a>
                <a href="/contact" style={css("fontSize:14.5px; fontWeight:600; color:#1DD98B; display:inline-flex; alignItems:center; gap:8px")}>
                  Talk to us <span style={css("fontSize:12px")}>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul
          id="ind-rail"
          ref={rail}
          onScroll={measure}
          style={css(
            "listStyle:none; margin:52px 0 0; padding:0 28px 4px 0; display:flex; gap:16px; overflowX:auto; scrollbarWidth:none; scrollSnapType:x mandatory"
          )}
        >
          {INDUSTRIES.map(([slug, name], i) => {
            const on = i === active;
            return (
              <li key={slug} style={css("flexShrink:0")}>
                <button
                  type="button"
                  data-ind="card"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  style={css(
                    "padding:0; textAlign:left; position:relative; display:block; width:" +
                      (on ? "300px" : "236px") +
                      "; aspectRatio:3 / 4; borderRadius:18px; overflow:hidden; border:1px solid " +
                      (on ? "rgba(29,217,139,.55)" : "rgba(255,255,255,.08)") +
                      "; background:#101714; scrollSnapAlign:start; transition:width .45s cubic-bezier(.2,.8,.25,1), border-color .3s ease"
                  )}
                >
                  <img
                    src={"/images/industries/" + slug + ".jpg"}
                    alt={name + " businesses using an AI chat agent"}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={css("position:absolute; inset:0; width:100%; height:100%; objectFit:cover")}
                  />
                  <div
                    style={css(
                      "position:absolute; inset:0; pointerEvents:none; background:linear-gradient(180deg, rgba(7,11,10,.10) 0%, transparent 38%, rgba(7,11,10,.86) 100%)"
                    )}
                  ></div>
                  <div
                    style={css(
                      "position:absolute; left:0; right:0; bottom:0; padding:14px; display:flex; alignItems:flex-end; justifyContent:space-between; gap:10px; pointerEvents:none"
                    )}
                  >
                    <span
                      style={css(
                        "borderRadius:10px; padding:8px 12px; fontSize:12.5px; fontWeight:700; lineHeight:1.25; letterSpacing:-0.01em; transition:background .3s ease, color .3s ease; background:" +
                          (on ? "#1DD98B" : "rgba(7,11,10,.62)") +
                          "; color:" +
                          (on ? "#04140D" : "#DFE8E4")
                      )}
                    >
                      {name}
                    </span>
                    <span
                      style={css(
                        "flexShrink:0; width:38px; height:38px; borderRadius:999px; display:flex; alignItems:center; justifyContent:center; fontSize:15px; transition:background .3s ease, color .3s ease; background:" +
                          (on ? "#1DD98B" : "rgba(7,11,10,.55)") +
                          "; color:" +
                          (on ? "#04140D" : "#DFE8E4") +
                          "; border:1px solid " +
                          (on ? "#1DD98B" : "rgba(255,255,255,.16)")
                      )}
                    >
                      ↗
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div style={css("marginTop:26px; paddingRight:28px; display:flex; alignItems:center; gap:20px")}>
          <div style={css("flex:1; height:2px; background:rgba(255,255,255,.09); borderRadius:999px; position:relative; overflow:hidden")}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: bar.left, width: bar.width, background: "#1DD98B", borderRadius: "999px" }}></div>
          </div>
          <div style={css("display:flex; gap:10px")}>
            <button onClick={() => nudge(-1)} aria-label="Previous industries" className="hvArrow" style={css("width:40px; height:40px; borderRadius:999px; background:transparent; border:1px solid rgba(255,255,255,.14); color:#B9C7C1; fontSize:15px")}>
              ←
            </button>
            <button onClick={() => nudge(1)} aria-label="More industries" className="hvArrow" style={css("width:40px; height:40px; borderRadius:999px; background:transparent; border:1px solid rgba(255,255,255,.14); color:#B9C7C1; fontSize:15px")}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
