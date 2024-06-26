import { createRoot } from "react-dom/client";

import App from "./components/App";

import "./styles/global.css";

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);

root.render(<App />);
