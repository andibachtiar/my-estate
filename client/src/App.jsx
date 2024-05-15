import { RouterProvider, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import router from "./routes/Routes";

export default function App() {
  return <RouterProvider router={router} />;
}
