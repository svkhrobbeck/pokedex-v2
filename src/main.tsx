import "@/assets/styles/main.scss";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/router";

const root = ReactDOM.createRoot(document.getElementById("root")! as HTMLDivElement);

root.render(<RouterProvider router={router} />);
