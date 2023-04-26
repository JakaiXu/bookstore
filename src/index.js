import { createRoot } from "react-dom/client";
import App from "./components/App";

import { Provider } from "./context/books";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
