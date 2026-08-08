import React from "react";
import { css, CALENDLY } from "../lib/css.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhatsAppFloat from "./WhatsAppFloat.jsx";

function HandsOff() {
  const cardBase =
    "display:flex; alignItems:center; gap:12px; padding:12px 15px; borderRadius:16px; background:rgba(13,19,16,.80); backdropFilter:blur(18px); WebkitBackdropFilter:blur(18px); border:1px solid rgba(255,255,255,.12); boxShadow:0 26px 60px -30px rgba(0,0,0,.95)";
  const mark =
    "flexShrink:0; width:32px; height:32px; borderRadius:10px; background:rgba(29,217,139,.12); border:1px solid rgba(29,217,139,.3); color:#1DD98B; display:flex; alignItems:center; justifyContent:center; fontSize:11px; fontWeight:800";

  return (
    <section style={css("position:relative; borderTop:1px solid rgba(255,255,255,.06); background:#070B0A; overflow:hidden")}>
      <div
        style={css(
          "position:absolute; top:-160px; left:50%; width:900px; height:600px; transform:translateX(-50%); background:radial-gradient(ellipse at center, rgba(29,217,139,.09), transparent 68%); filter:blur(18px); pointerEvents:none"
        )}
      ></div>
      <div data-r="pad" style={css("maxWidth:1240px; margin:0 auto; padding:104px 28px; position:relative")}>
        <div style={css("maxWidth:720px; margin:0 auto; textAlign:center")}>
          <p style={css("fontSize:12.5px; fontWeight:700; letterSpacing:0.16em; textTransform:uppercase; color:#1DD98B; margin:0")}>Hands off</p>
          <h2
            style={css(
              "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(32px, 3.6vw, 52px); lineHeight:1.08; letterSpacing:-0.035em; fontWeight:700; margin:20px 0 0; color:#F0F5F3; textWrap:balance"
            )}
          >
            Go do your other things. <span style={css("color:#1DD98B")}>The agent runs the front desk.</span>
          </h2>
          <p style={css("fontSize:16.5px; lineHeight:1.7; color:#93A29C; margin:18px auto 0; maxWidth:520px; textWrap:pretty")}>
            It answers, qualifies and books calls across every channel — you step in only to close.
          </p>
        </div>

        <div
          style={css(
            "position:relative; marginTop:52px; borderRadius:28px; overflow:hidden; border:1px solid rgba(255,255,255,.08); boxShadow:0 70px 150px -70px rgba(0,0,0,.98)"
          )}
        >
          <div data-r="night" style={css("position:relative; width:100%; aspectRatio:16 / 8")}>
            <img
              src="/images/go-do-your-other-things.webp"
              alt="Business owner doing other tasks while AI agent runs the front desk"
              loading="lazy"
              style={css("position:absolute; inset:0; width:100%; height:100%; objectFit:cover")}
            />
            <div
              style={css(
                "position:absolute; inset:0; pointerEvents:none; background:linear-gradient(90deg, rgba(7,11,10,.88) 0%, rgba(7,11,10,.62) 40%, rgba(7,11,10,.20) 72%, rgba(7,11,10,.55) 100%)"
              )}
            ></div>
            <div
              style={css(
                "position:absolute; inset:0; pointerEvents:none; background:linear-gradient(180deg, rgba(7,11,10,.42) 0%, transparent 30%, rgba(7,11,10,.72) 100%)"
              )}
            ></div>

            <div
              data-r="nightcards"
              style={css("position:absolute; top:8%; left:4%; display:flex; flexDirection:column; gap:12px; width:min(340px, 42%); pointerEvents:none")}
            >
              <div style={css(cardBase + "; animation:floatCard 7s ease-in-out infinite")}>
                <span style={css(mark)}>WA</span>
                <div style={css("minWidth:0; flex:1")}>
                  <div style={css("display:flex; alignItems:baseline; justifyContent:space-between; gap:10px")}>
                    <span style={css("fontSize:12.5px; fontWeight:700; color:#F0F5F3")}>New message</span>
                    <span style={css("fontSize:11px; color:#5F6E68")}>3:06 AM</span>
                  </div>
                  <div style={css("marginTop:3px; fontSize:12.5px; color:#93A29C; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>
                    "What's your service cost?"
                  </div>
                </div>
              </div>
              <div style={css(cardBase + "; marginLeft:26px; animation:floatCard 7s 1.2s ease-in-out infinite")}>
                <span style={css(mark)}>IG</span>
                <div style={css("minWidth:0; flex:1")}>
                  <div style={css("display:flex; alignItems:baseline; justifyContent:space-between; gap:10px")}>
                    <span style={css("fontSize:12.5px; fontWeight:700; color:#F0F5F3")}>New enquiry</span>
                    <span style={css("fontSize:11px; color:#5F6E68")}>3:11 AM</span>
                  </div>
                  <div style={css("marginTop:3px; fontSize:12.5px; color:#93A29C; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>
                    "Do you deliver to Chattogram?"
                  </div>
                </div>
              </div>
              <div
                style={css(
                  "display:flex; alignItems:center; gap:12px; padding:12px 15px; borderRadius:16px; background:rgba(29,217,139,.12); backdropFilter:blur(18px); WebkitBackdropFilter:blur(18px); border:1px solid rgba(29,217,139,.45); boxShadow:0 26px 60px -28px rgba(29,217,139,.55); marginLeft:52px; animation:floatCard 7s 2.4s ease-in-out infinite"
                )}
              >
                <span
                  style={css(
                    "flexShrink:0; width:32px; height:32px; borderRadius:10px; background:#1DD98B; color:#04140D; display:flex; alignItems:center; justifyContent:center; fontSize:13px; fontWeight:800"
                  )}
                >
                  ✓
                </span>
                <div style={css("minWidth:0; flex:1")}>
                  <div style={css("display:flex; alignItems:baseline; justifyContent:space-between; gap:10px")}>
                    <span style={css("fontSize:12.5px; fontWeight:700; color:#1DD98B")}>Booked</span>
                    <span style={css("fontSize:11px; color:#5F8E76")}>3:19 AM</span>
                  </div>
                  <div style={css("marginTop:3px; fontSize:12.5px; color:#8FCBB2; whiteSpace:nowrap; overflow:hidden; textOverflow:ellipsis")}>
                    "Call confirmed for 10:00 AM."
                  </div>
                </div>
              </div>
            </div>

            <div
              data-r="nightfoot"
              style={css(
                "position:absolute; left:0; right:0; bottom:0; padding:34px 38px; pointerEvents:none; display:flex; alignItems:flex-end; justifyContent:space-between; gap:36px; flexWrap:wrap"
              )}
            >
              <p style={css("fontSize:15.5px; lineHeight:1.6; color:#C7D4CE; maxWidth:420px; textWrap:pretty; margin:0")}>
                He stepped away from the desk. Three enquiries came in. One is already on his calendar.
              </p>
              <div style={css("display:flex; gap:44px; flexWrap:wrap")}>
                <div>
                  <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:26px; fontWeight:700; letterSpacing:-0.03em; color:#F0F5F3")}>9pm–1am</div>
                  <div style={css("marginTop:5px; fontSize:13px; color:#93A29C")}>peak enquiry hours</div>
                </div>
                <div>
                  <div style={css("fontFamily:'Inter',system-ui,sans-serif; fontSize:26px; fontWeight:700; letterSpacing:-0.03em; color:#1DD98B")}>Zero</div>
                  <div style={css("marginTop:5px; fontSize:13px; color:#93A29C")}>waiting in the morning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={css("borderTop:1px solid rgba(255,255,255,.06); background:#0A0F0D")}>
      <div
        data-r="pad stack"
        style={css("maxWidth:1240px; margin:0 auto; padding:88px 28px; display:flex; alignItems:center; justifyContent:space-between; gap:40px; flexWrap:wrap")}
      >
        <h2
          style={css(
            "fontFamily:'Inter',system-ui,sans-serif; fontSize:clamp(28px, 3.2vw, 46px); lineHeight:1.08; letterSpacing:-0.03em; fontWeight:700; margin:0; color:#67766F; maxWidth:640px"
          )}
        >
          Your next customer <span style={css("color:#F0F5F3")}>already messaged you.</span> <span style={css("color:#1DD98B")}>Answer them.</span>
        </h2>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener"
          className="hvBtn"
          style={css(
            "display:inline-flex; alignItems:center; gap:10px; background:#1DD98B; color:#04100B; fontWeight:700; fontSize:16px; padding:18px 30px; borderRadius:999px; whiteSpace:nowrap"
          )}
        >
          Book a free consultation <span style={css("fontSize:18px")}>→</span>
        </a>
      </div>
    </section>
  );
}

export default function Shell({ current, children, gridBackdrop = true }) {
  return (
    <div style={css("minHeight:100vh; background:#070B0A; color:#F0F5F3; position:relative; overflow:hidden")}>
      {gridBackdrop && (
        <div
          style={css(
            "position:absolute; inset:0; pointerEvents:none; backgroundImage:linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px); backgroundSize:96px 96px; maskImage:radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%); WebkitMaskImage:radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)"
          )}
        ></div>
      )}
      <div
        style={css(
          "position:absolute; top:-260px; left:50%; width:900px; height:620px; transform:translateX(-50%); background:radial-gradient(ellipse at center, rgba(29,217,139,.10), transparent 65%); filter:blur(20px); pointerEvents:none"
        )}
      ></div>
      <div
        style={css(
          "position:absolute; inset:0; pointerEvents:none; backgroundImage:repeating-linear-gradient(90deg, rgba(29,217,139,.075) 0 2px, transparent 2px 22px); maskImage:radial-gradient(ellipse 55% 45% at 50% 8%, #000, transparent 72%); WebkitMaskImage:radial-gradient(ellipse 55% 45% at 50% 8%, #000, transparent 72%); opacity:.9"
        )}
      ></div>

      <Header current={current} />
      {children}
      <HandsOff />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
