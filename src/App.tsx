import "@/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
