// Turns the design's inline CSS text into a React style object so markup can be
// copied verbatim from the design file: css("padding:20px; borderRadius:999px")
export function css(text) {
  const out = {};
  String(text)
    .split(";")
    .forEach((part) => {
      const i = part.indexOf(":");
      if (i < 0) return;
      const key = part.slice(0, i).trim();
      const value = part.slice(i + 1).trim();
      if (!key || !value) return;
      out[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
    });
  return out;
}

export const CALENDLY =
  "https://cal.com/sajidur-rahman/book-your-free-initial-meeting-with-falah-chat";

export const PHONE = "+880 1947-441287";
export const PHONE_TEL = "+8801947441287";
export const EMAIL = "info@falahchat.com";

const WHATSAPP_NUMBER = "8801947441287";
const WHATSAPP_MESSAGE = "Hi Falah Chat! I have a question about your AI chat agents.";
export const WHATSAPP_LINK =
  "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
export const WHATSAPP_PLAIN = "https://wa.me/" + WHATSAPP_NUMBER;

export const SITE = "https://falahchat.com";
