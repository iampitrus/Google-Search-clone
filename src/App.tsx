import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routee from "./components/Route";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar dark={darkTheme} setDark={setDarkTheme} />
        <Routee />
        <Footer />
      </div>
    </div>
  );
}

export default App;
