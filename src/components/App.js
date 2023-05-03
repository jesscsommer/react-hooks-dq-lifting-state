import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
