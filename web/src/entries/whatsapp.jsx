import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import AgentPage from "../pages/AgentPage.jsx";

createRoot(document.getElementById("root")).render(<AgentPage slug="whatsapp" />);
