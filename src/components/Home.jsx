import { ThemeContext } from "../providers/ThemeContextProvider";
import { useContext } from "react";

export function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <div style={theme === "dark" ? { color: "red" } : { color: "green" }}>
        Home
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >Click</button>
    </div>
  );
}
