import {Routes, Route} from "react-router";
import {useEffect} from "react";
import Landing from "./pages/Landing";

import "./App.css";

function App() {
  useEffect(() => {
    function makeTheme() {
      let theme = localStorage.getItem("theme");

      if (theme === "light") {
        document.body.className = "light";
      } else if (theme === "dark") {
        document.body.className = "";
      } else {
        localStorage.setItem("theme", "dark");

        document.body.className = "";
      }
    }
    makeTheme();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
