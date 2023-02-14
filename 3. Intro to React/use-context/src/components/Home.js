import ThemeContext from "../state/Themecontext";
import { React, useContext } from "react";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.background,
      }}
    >
      <span style={{ color: "lightblue", fontSize: "5em" }}>Homepage</span>
    </div>
  );
}

export default Home;
