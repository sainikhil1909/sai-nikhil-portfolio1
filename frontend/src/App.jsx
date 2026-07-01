
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Research from "./components/Research/Research";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

import Preloader from "./components/Preloader/Preloader";

import ComingSoon from "./components/ComingSoon/ComingSoon";
import ChatBot from "./components/ChatBot/ChatBot";
import Offline from "./components/Offline/Offline";

function HomePage() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      {/* <Research /> */}
      <Resume />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );

}

function App() {

  const [loading, setLoading] = useState(true);

  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {

    const handleOnline = () => {

      setOnline(true);

    };

    const handleOffline = () => {

      setOnline(false);

    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {

      window.removeEventListener("online", handleOnline);

      window.removeEventListener("offline", handleOffline);

    };

  }, []);

  useEffect(() => {

    // Disable Right Click
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    const disableKeys = (e) => {

      if (
        e.key === "F12" ||

        (e.ctrlKey &&
          e.shiftKey &&
          e.key.toLowerCase() === "i") ||

        (e.ctrlKey &&
          e.shiftKey &&
          e.key.toLowerCase() === "j") ||

        (e.ctrlKey &&
          e.key.toLowerCase() === "u")
      ) {

        e.preventDefault();

        return false;
      }
    };

    document.addEventListener(
      "contextmenu",
      disableRightClick
    );

    document.addEventListener(
      "keydown",
      disableKeys
    );

    return () => {

      document.removeEventListener(
        "contextmenu",
        disableRightClick
      );

      document.removeEventListener(
        "keydown",
        disableKeys
      );

    };

  }, []);

  if (loading) {

    return (
      <Preloader
        onDone={() => setLoading(false)}
      />
    );

  }

  if (!online) {

    return <Offline />;

  }



  if (loading) {

    return (
      <Preloader
        onDone={() => setLoading(false)}
      />
    );

  }

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/coming-soon"
        element={<ComingSoon />}
      />

    </Routes>

  );

}

export default App;