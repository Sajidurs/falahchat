import React, { useEffect, useRef, useState } from "react";
import { css } from "../lib/css.js";
import { LANGS } from "../data.js";

export default function Languages() {
  const [lang, setLang] = useState(1);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [swapping, setSwapping] = useState(false);
  const timers = useRef([]);

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    clearAll();
    if (reduced) {
      setVisible(LANGS[lang].script.length);
      setTyping(false);
      return clearAll;
    }
    setVisible(0);
    setTyping(false);
    const script = LANGS[lang].script;
    const play = (idx) => {
      if (idx >= script.length) return;
      const next = script[idx];
      const show = () => {
        setVisible(idx + 1);
        setTyping(false);
        timers.current.push(setTimeout(() => play(idx + 1), 800));
      };
      if (next.from === "agent") {
        setTyping(true);
        timers.current.push(setTimeout(show, 1200));
      } else {
        timers.current.push(setTimeout(show, 450));
      }
    };
    timers.current.push(setTimeout(() => play(0), 520));
    return clearAll;
  }, [lang]);

  const pick = (i) => {
    if (i === lang) return;
    setSwapping(true);
    setTimeout(() => setSwapping(false), 360);
    setLang(i);
  };

  const l = LANGS[lang];
  const msgs = l.script.slice(0, visible);

  return (
    <section data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:96px 28px")}>
      <div style={css("display:flex; justifyContent:space-between; alignItems:end; gap:40px; flexWrap:wrap")}>
        <h2
          style={css(
            "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(28px, 3vw, 42px); lineHeight:1.12; letterSpacing:-0.03em; fontWeight:700; margin:0; color:#F0F5F3"
          )}
        >
          Answers in the language <span style={css("color:#1DD98B")}>they wrote in.</span>
        </h2>
        <p style={css("fontSize:14px; color:#76857F; margin:0")}>Tap a language to preview a reply</p>
      </div>

      <div style={css("marginTop:34px; display:flex; gap:12px; flexWrap:wrap")}>
        {LANGS.map((x, i) => {
          const on = i === lang;
          return (
            <button
              key={x.name}
              onClick={() => pick(i)}
              className="hvBorder"
              style={css(
                "borderRadius:999px; padding:12px 22px; fontSize:14.5px; fontWeight:600; background:" +
                  (on ? "#1DD98B" : "transparent") +
                  "; color:" +
                  (on ? "#04140D" : "#B9C7C1") +
                  "; border:1px solid " +
                  (on ? "#1DD98B" : "rgba(255,255,255,.14)")
              )}
            >
              {x.name}
            </button>
          );
        })}
      </div>

      <div style={css("marginTop:28px; position:relative; minHeight:492px")}>
        {swapping && (
          <>
            <div
              style={css(
                "position:absolute; inset:0; borderRadius:26px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.045); animation:ghostTrail .5s cubic-bezier(.2,.7,.3,1) forwards; pointerEvents:none"
              )}
            ></div>
            <div
              style={css(
                "position:absolute; inset:0; borderRadius:26px; border:1px solid rgba(29,217,139,.14); background:rgba(255,255,255,.03); animation:ghostTrail .58s .06s cubic-bezier(.2,.7,.3,1) forwards; pointerEvents:none"
              )}
            ></div>
          </>
        )}

        <div
          key={lang}
          style={css(
            "border:1px solid rgba(255,255,255,.09); borderRadius:26px; background:#0C120F; overflow:hidden; boxShadow:0 40px 90px -40px rgba(0,0,0,.9); animation:cardIn .5s cubic-bezier(.2,.8,.25,1) both"
          )}
        >
          <div style={css("display:flex; alignItems:center; gap:14px; padding:16px 22px; borderBottom:1px solid rgba(255,255,255,.07); background:rgba(255,255,255,.022)")}>
            <div style={css("display:flex; gap:6px; marginRight:4px")}>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
              <span style={css("width:9px; height:9px; borderRadius:999px; background:rgba(255,255,255,.14)")}></span>
            </div>
            <div
              style={css(
                "width:34px; height:34px; borderRadius:999px; background:#1C2521; border:1px solid rgba(255,255,255,.10); display:flex; alignItems:center; justifyContent:center; fontFamily:'Inter',system-ui,sans-serif; fontWeight:700; fontSize:14px; color:#1DD98B; flexShrink:0"
              )}
            >
              {l.customer.slice(0, 1)}
            </div>
            <div style={css("flex:1; minWidth:0")}>
              <div dir="auto" style={css("fontSize:14.5px; fontWeight:700; color:#F0F5F3")}>{l.customer}</div>
              <div style={css("fontSize:11.5px; color:#76857F")}>{l.channel}</div>
            </div>
            <div
              style={css(
                "display:flex; alignItems:center; gap:8px; padding:7px 13px; borderRadius:999px; border:1px solid rgba(29,217,139,.3); background:rgba(29,217,139,.08); fontSize:11.5px; fontWeight:700; letterSpacing:0.08em; textTransform:uppercase; color:#1DD98B; whiteSpace:nowrap"
              )}
            >
              <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B")}></span>
              {l.name}
            </div>
          </div>

          <div style={css("padding:26px 24px; display:flex; flexDirection:column; gap:14px; minHeight:334px")}>
            {msgs.map((m, i) =>
              m.from === "user" ? (
                <div key={i} style={css("display:flex; justifyContent:flex-start; animation:fadeUp .4s ease both")}>
                  <div
                    dir="auto"
                    data-r="bubble"
                    style={css(
                      "maxWidth:64%; background:#151D19; border:1px solid rgba(255,255,255,.07); borderRadius:18px 18px 18px 5px; padding:14px 18px; fontSize:15.5px; lineHeight:1.55; color:#DFE8E4"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ) : (
                <div key={i} style={css("display:flex; justifyContent:flex-end; animation:fadeUp .4s ease both")}>
                  <div
                    dir="auto"
                    data-r="bubble"
                    style={css(
                      "maxWidth:64%; background:#1DD98B; borderRadius:18px 18px 5px 18px; padding:14px 18px; fontSize:15.5px; lineHeight:1.55; fontWeight:500; color:#04140D"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              )
            )}
            {typing && (
              <div style={css("display:flex; justifyContent:flex-end; animation:fadeUp .3s ease both")}>
                <div
                  style={css(
                    "background:#151D19; border:1px solid rgba(255,255,255,.07); borderRadius:18px 18px 5px 18px; padding:16px 18px; display:flex; gap:5px"
                  )}
                >
                  <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B; animation:blink 1.2s infinite")}></span>
                  <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B; animation:blink 1.2s .2s infinite")}></span>
                  <span style={css("width:6px; height:6px; borderRadius:999px; background:#1DD98B; animation:blink 1.2s .4s infinite")}></span>
                </div>
              </div>
            )}
          </div>

          <div style={css("display:flex; alignItems:center; gap:14px; padding:16px 22px; borderTop:1px solid rgba(255,255,255,.07); background:rgba(255,255,255,.022)")}>
            <div dir="auto" style={css("flex:1; fontSize:14.5px; color:#5A6862")}>{l.draft}</div>
            <div
              style={css(
                "width:36px; height:36px; borderRadius:999px; background:rgba(29,217,139,.12); border:1px solid rgba(29,217,139,.3); display:flex; alignItems:center; justifyContent:center; color:#1DD98B; fontSize:15px; flexShrink:0"
              )}
            >
              ↑
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
