import { React, useContext } from "react";
import ThemeContext from "../state/Themecontext";

function Details() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.background,
      }}
    >
      <span style={{ color: "lightblue", fontSize: "5em" }}>Details</span>
    </div>
  );
}

export default Details;
