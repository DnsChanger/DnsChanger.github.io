import "./styles/global.css";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);
root.render(<App />);

reportWebVitals();
