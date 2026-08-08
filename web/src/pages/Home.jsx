import React from "react";
import Shell from "../components/Shell.jsx";
import Hero from "../sections/Hero.jsx";
import TwoDays from "../sections/TwoDays.jsx";
import Inbox from "../sections/Inbox.jsx";
import Product from "../sections/Product.jsx";
import Languages from "../sections/Languages.jsx";
import Industries from "../sections/Industries.jsx";
import WebsiteChatbot from "../sections/WebsiteChatbot.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";

export default function Home() {
  return (
    <Shell current="/">
      <main>
        <Hero />
        <TwoDays />
        <Inbox />
        <Product />
        <Languages />
        <Industries />
        <WebsiteChatbot />
        <HowItWorks />
      </main>
    </Shell>
  );
}
