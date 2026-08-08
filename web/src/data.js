export const SCRIPT = [
  { from: "user", text: "Assalamu alaikum, do you deliver to Dhanmondi? What's the price?" },
  { from: "agent", text: "Walaikum assalam! Yes — we deliver across Dhaka. Standard delivery is ৳80 and arrives next day. Which item are you looking at?" },
  { from: "user", text: "Ei product ta ki stock ache? আজ অর্ডার করলে কখন পাবো?" },
  { from: "agent", text: "হ্যাঁ, স্টকে আছে। আজ রাত ৮টার আগে অর্ডার করলে কাল দুপুরের মধ্যে পৌঁছে যাবে। আপনার নাম আর ফোন নম্বরটা দিলে অর্ডার রেডি করে ফেলি।" }
];

export const LANGS = [
  { name: "Bangla", channel: "WhatsApp · Dhaka", customer: "রুবিনা আক্তার", draft: "ধন্যবাদ! কনফার্ম করুন।", script: [
    { from: "user", text: "দাম কত? ডেলিভারি চার্জ আলাদা?" },
    { from: "agent", text: "প্রোডাক্টটির দাম ৳২,৪৫০ এবং ঢাকার ভেতরে ডেলিভারি ৳৮০।" },
    { from: "user", text: "আজ অর্ডার করলে কখন পাবো?" },
    { from: "agent", text: "আজ রাত ৮টার আগে অর্ডার করলে কাল দুপুরের মধ্যেই পৌঁছে যাবে। কনফার্ম করবো?" }
  ]},
  { name: "English", channel: "Instagram DM · Global", customer: "Sarah M.", draft: "Yes please, go ahead.", script: [
    { from: "user", text: "How much is it, and is delivery extra?" },
    { from: "agent", text: "It's ৳2,450, and delivery inside Dhaka is ৳80." },
    { from: "user", text: "Can I pay on delivery?" },
    { from: "agent", text: "Yes — cash on delivery works anywhere in Dhaka. Shall I place the order for you?" }
  ]},
  { name: "Banglish", channel: "Messenger · Chattogram", customer: "Tanvir H.", draft: "Ok vai, confirm koren.", script: [
    { from: "user", text: "Vai price koto? Delivery charge extra naki?" },
    { from: "agent", text: "Price ৳2,450 vai, ar Dhaka'r vitore delivery ৳80." },
    { from: "user", text: "Ajke order dile kobe pabo?" },
    { from: "agent", text: "Ajke raat 8ta'r age order dilen kal'i pouche jabe. Order confirm kore dibo?" }
  ]},
  { name: "Arabic", channel: "WhatsApp · Dubai", customer: "أحمد ع.", draft: "نعم، جهّز الطلب.", script: [
    { from: "user", text: "كم السعر؟ وهل التوصيل مجاني؟" },
    { from: "agent", text: "السعر ٩٥ درهماً، والتوصيل داخل دبي مجاني." },
    { from: "user", text: "متى يصل الطلب؟" },
    { from: "agent", text: "يصل غداً قبل الظهر إن شاء الله. هل أجهّز الطلب لك؟" }
  ]},
  { name: "Hindi", channel: "Instagram DM · Delhi", customer: "Priya S.", draft: "हाँ, कर दीजिए।", script: [
    { from: "user", text: "इसकी कीमत क्या है? डिलीवरी कितने दिन में?" },
    { from: "agent", text: "इसकी कीमत ₹1,900 है और डिलीवरी 2 दिन में हो जाती है।" },
    { from: "user", text: "क्या कोई गारंटी है?" },
    { from: "agent", text: "जी, 6 महीने की वारंटी मिलती है। ऑर्डर कन्फर्म कर दूँ?" }
  ]}
];

export const PRICES = {
  BDT: [["৳15,000", "৳8,000"], ["৳28,000", "৳15,000"], ["৳45,000", "৳25,000"]],
  USD: [["$150", "$80"], ["$280", "$150"], ["$450", "$250"]],
  AED: [["AED 550", "AED 290"], ["AED 1,000", "AED 550"], ["AED 1,650", "AED 900"]]
};

export const PLANS = [
  { name: "Starter Plan", channels: "WhatsApp only", blurb: "Perfect for shops and clinics that get most of their enquiries on WhatsApp and want them answered instantly.", popular: false, features: [
    "An AI agent that answers your WhatsApp chats",
    "Asks which branch or area the customer is in",
    "Your team can take over any chat instantly",
    "Every lead saved in a dashboard, exportable as CSV",
    "Replies in Bangla, English, Arabic, Hindi or Banglish"
  ]},
  { name: "Growth Plan", channels: "WhatsApp + Instagram DM", blurb: "Best value for growing businesses selling across WhatsApp and Instagram — the most cost-effective way to scale.", popular: true, features: [
    "Everything in Starter",
    "Instagram DMs answered the same way",
    "One inbox for both channels, no tab switching",
    "Priority support when you need a change fast"
  ]},
  { name: "All Channels", channels: "WhatsApp + Instagram + Messenger + Website", blurb: "For teams handling every channel at once, including a custom chatbot built into your own website.", popular: false, features: [
    "Everything in Growth",
    "Messenger conversations covered too",
    "A custom chatbot built into your own website",
    "Appointment booking straight into your calendar",
    "All four channels in a single dashboard",
    "A dedicated onboarding call with our team"
  ]}
];

export const STEPS = [
  { num: "01", title: "Connect your channels", desc: "You approve access to WhatsApp, Instagram or Messenger — or we drop one line of code on your website. No new app for your team to learn.",
    pill: "Connect WhatsApp", cardTitle: "Channels",
    rows: [["WA","WhatsApp Business","Connected","#1DD98B"],["IG","Instagram Direct","Connected","#1DD98B"],["MS","Messenger inbox","Connected","#1DD98B"],["WEB","Website chatbot","Pending","#76857F"]] },
  { num: "02", title: "We train the AI on your business", desc: "Products, prices, branches, delivery rules, tone of voice. We test it with real questions before it goes near a customer.",
    pill: "Add your price list", cardTitle: "Training sources",
    rows: [["PD","Product catalogue","Learned","#1DD98B"],["PR","Price list 2026","Learned","#1DD98B"],["PO","Delivery & refund policy","Learned","#1DD98B"],["TN","Tone of voice samples","In review","#76857F"]] },
  { num: "03", title: "Go live and capture leads", desc: "The agent starts answering. You watch leads land in the dashboard and step in whenever a deal is worth closing yourself.",
    pill: "New lead captured", cardTitle: "Lead inbox",
    rows: [["WA","Rubina Akter","New","#1DD98B"],["IG","Sarah M.","Qualified","#1DD98B"],["MS","Tanvir H.","New","#1DD98B"],["WEB","Imran Chowdhury","Booked","#1DD98B"]] }
];

export const AGENTS = [
  { slug: "whatsapp", path: "/whatsapp-ai-agent", name: "WhatsApp Agent", mark: "WA", tag: "WhatsApp Business API",
    headA: "The channel your customers ", headB: "already message you on", headC: " — answered in seconds.",
    intro: "Most enquiries in Bangladesh start on WhatsApp, and most of them arrive after your shop closes. The WhatsApp Agent replies instantly on your verified business number, answers the questions your team retypes every day, and saves the customer as a lead before they cool off.",
    stats: [["< 6s", "average first reply"], ["24/7", "including holidays"], ["5", "languages handled"]],
    benefits: [
      { t: "Instant replies on your own number", d: "Runs on the official WhatsApp Business API with your verified business profile — customers see your name, not a third-party bot." },
      { t: "Answers the same ten questions", d: "Price, stock, delivery charge, timeline, branch address, payment options. Your team stops retyping and starts closing." },
      { t: "Bangla, English and Banglish", d: "It replies in the language and script the customer wrote in, including mixed Banglish, so nothing feels translated." },
      { t: "Confirms orders and cash on delivery", d: "Collects the address, confirms COD, and repeats the order back so there is no dispute at the door." },
      { t: "Hands over the moment it matters", d: "When a customer is ready to buy or asks something unusual, your team takes over the same chat in one tap." },
      { t: "Every chat becomes a lead", d: "Name, number, area, product interest and next step saved to your dashboard and exportable as CSV." }
    ],
    handles: ["Price and package questions", "Stock and availability checks", "Delivery charge and timeline", "Branch address and opening hours", "Order status follow-ups", "Cash-on-delivery confirmation", "Appointment and site-visit booking", "Escalation to a human agent"] },

  { slug: "messenger", path: "/messenger-ai-agent", name: "Messenger Agent", mark: "MS", tag: "Facebook Page inbox",
    headA: "Turn your Page inbox from a ", headB: "backlog into a pipeline", headC: ".",
    intro: "Facebook ads bring the enquiries; the Page inbox loses them. The Messenger Agent answers every message and ad reply the moment it lands, keeps your response rate green, and pulls comment threads into a private conversation before a competitor does it for you.",
    stats: [["100%", "of messages answered"], ["Instant", "ad-enquiry replies"], ["0", "unread request folder"]],
    benefits: [
      { t: "Answers ad enquiries instantly", d: "Every enquiry from a boosted post gets a real answer while the customer is still scrolling." },
      { t: "Comment to DM, automatically", d: "Someone asks the price under your post — the agent replies publicly and opens a private chat to close it." },
      { t: "Keeps your response badge green", d: "Your Page keeps a Very responsive badge instead of a typically-replies-in-a-day warning." },
      { t: "Clears the message request folder", d: "Messages from people who never messaged you before get seen and answered instead of buried." },
      { t: "Knows your offers and policies", d: "Trained on your current campaign, prices, delivery rules and refund policy so answers stay accurate." },
      { t: "One inbox with every other channel", d: "Messenger leads sit next to WhatsApp, Instagram and website leads in the same dashboard." }
    ],
    handles: ["Replies to ad and boosted-post enquiries", "Public comment replies", "Comment-to-DM handoff", "Price and offer questions", "Availability and variants", "Location and delivery area", "Lead capture with contact details", "Handover to your team"] },

  { slug: "instagram", path: "/instagram-ai-agent", name: "Instagram Agent", mark: "IG", tag: "Instagram Direct",
    headA: "Every DM and story reply, ", headB: "answered like a real person", headC: ".",
    intro: "Instagram is where people browse and ask, but DMs and story replies pile up faster than any team can clear them. The Instagram Agent answers in your brand voice, follows up on story reactions, and turns casual curiosity into a saved lead with a number attached.",
    stats: [["Seconds", "to first reply"], ["DMs + stories", "both covered"], ["Brand voice", "trained on your feed"]],
    benefits: [
      { t: "Answers DMs around the clock", d: "The late-night how-much question gets a real answer at 1am, not at 11am the next morning." },
      { t: "Story replies and reactions", d: "A reaction to your story becomes a conversation instead of a notification nobody opens." },
      { t: "Catches message requests", d: "First-time customers land in the requests folder — the agent finds them and replies." },
      { t: "Speaks in your brand voice", d: "Tone, phrasing and level of formality trained on how you already write, so it never sounds generic." },
      { t: "Sends the right product details", d: "Sizes, variants, price, shipping and the link to buy — pulled from your own catalogue." },
      { t: "Saves every enquiry as a lead", d: "Handle, name, product interest and next step recorded and ready to follow up." }
    ],
    handles: ["Direct message enquiries", "Story reply follow-ups", "Message request folder", "Price and product details", "Sizes, colours and variants", "Shipping and delivery questions", "Link to purchase or booking", "Handover to your team"] },

  { slug: "website", path: "/website-chatbot", name: "Custom Website Chatbot", mark: "WEB", tag: "Custom build for your site",
    headA: "A chatbot built for your website — ", headB: "not a plugin", headC: " bolted onto it.",
    intro: "Most website visitors leave without contacting anyone. The custom chatbot is built and trained on your business, styled to match your site, and installed with one line of code. It holds a genuine conversation, answers from your own pages and documents, and books the appointment before the visitor closes the tab.",
    stats: [["1 line", "of code to install"], ["Your brand", "colours and voice"], ["Booked", "straight to your calendar"]],
    benefits: [
      { t: "Conversations like a human", d: "It understands what visitors actually mean, asks sensible follow-up questions and keeps context — no menu of buttons." },
      { t: "Books appointments end to end", d: "Checks your live calendar, offers real slots, confirms the booking and sends the reminder without anyone stepping in." },
      { t: "Trained on your own content", d: "Service pages, price lists, PDFs and policies. It answers from your material, and says so when it does not know." },
      { t: "Styled to your brand", d: "Colours, typography, avatar, greeting and position all match your site — it looks built in, because it is." },
      { t: "Qualifies before it hands over", d: "Budget, timeline, service needed and location captured, so your team only picks up conversations worth their time." },
      { t: "One line of code, any platform", d: "WordPress, Shopify, Webflow, Framer or custom — paste one snippet and it is live, mobile included." }
    ],
    handles: ["Explaining your services", "Pricing and quote questions", "Appointment and demo booking", "Calendar reminders and reschedules", "Qualifying budget and timeline", "Routing to the right team", "Out-of-hours coverage", "Lead capture with full transcript"] }
];

export const FAQS = [
  { q: "Can you put a chatbot on our own website?", a: "Yes. We build a custom chatbot styled to your brand and install it with one line of code. It holds a real conversation, answers from your own pages and documents, books appointments into your calendar, and saves every visitor as a lead in the same dashboard as WhatsApp, Instagram and Messenger." },
  { q: "How long until it's live?", a: "Usually 5 to 10 working days. Most of that time is us learning your products, prices and policies well enough that the agent sounds like your business, not a bot." },
  { q: "Do we need any technical knowledge?", a: "No. You approve access to your accounts, answer our questions about how you sell, and we handle the rest. Your team keeps using the apps they already use." },
  { q: "Where does our customer data live?", a: "Chats and leads stay in your own accounts and your dashboard. We only access what's needed to run the agent, we don't sell or share data, and we can delete everything on request." },
  { q: "Can we cancel?", a: "Yes — monthly, with 30 days' notice. There's no lock-in contract. You keep your accounts and can export your leads before you go." },
  { q: "What if we need something custom?", a: "Tell us on the consultation call. Order lookups, catalogue sync, CRM handoff and similar work are quoted separately so you only pay for what you actually need." }
];

export const CHANNELS = [
  { key: "WhatsApp", mark: "WA", note: "Business API", path: "/whatsapp-ai-agent" },
  { key: "Instagram", mark: "IG", note: "Direct messages", path: "/instagram-ai-agent" },
  { key: "Messenger", mark: "MS", note: "Page inbox", path: "/messenger-ai-agent" },
  { key: "Website", mark: "WEB", note: "Custom site chatbot", path: "/website-chatbot" }
];

export const LEADS = [
  { name: "Rubina Akter", channel: "WhatsApp", lang: "Bangla", snippet: "আজ অর্ডার করলে কখন পাবো?", status: "New lead", hot: true },
  { name: "Sarah M.", channel: "Instagram", lang: "English", snippet: "Can I pay on delivery?", status: "Qualified", hot: false },
  { name: "Tanvir H.", channel: "Messenger", lang: "Banglish", snippet: "Ajke order dile kobe pabo?", status: "New lead", hot: true },
  { name: "أحمد ع.", channel: "WhatsApp", lang: "Arabic", snippet: "متى يصل الطلب؟", status: "Handed to sales", hot: false },
  { name: "Priya S.", channel: "Instagram", lang: "Hindi", snippet: "क्या कोई गारंटी है?", status: "Qualified", hot: false },
  { name: "Imran Chowdhury", channel: "Website", lang: "English", snippet: "Booked a site visit for Thursday 4pm.", status: "Appointment booked", hot: true }
];

export const INDUSTRIES = [
  ["restaurants", "Restaurants & Cafés"],
  ["clinics", "Clinics & Dental"],
  ["realestate", "Real Estate"],
  ["salons", "Beauty & Salons"],
  ["fitness", "Fitness & Gyms"],
  ["ecommerce", "E-commerce & Retail"],
  ["travel", "Travel & Tours"],
  ["automotive", "Automotive"],
  ["education", "Education & Coaching"],
  ["homeservices", "Home Services"]
];

export const BENEFIT_TILES = [
  ["/images/benefit-replies.png", "Replies in seconds"],
  ["/images/benefit-always-on.png", "Always on, 24/7"],
  ["/images/benefit-languages.png", "Speaks every language"],
  ["/images/benefit-inbox.png", "All channels, one inbox"],
  ["/images/benefit-leads.png", "Every lead captured"],
  ["/images/benefit-sales.png", "Grows your sales"],
  ["/images/benefit-rest.png", "Works while you rest"]
];

export const CLIENT_LOGOS = [
  "/images/client-1.png", "/images/client-2.png", "/images/client-3.png", "/images/client-4.png",
  "/images/client-5.png", "/images/client-6.png", "/images/client-7.png", "/images/client-8.png"
];
