import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from "@gravity-ui/uikit";
import Block from "./components/Block";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme="light">
        <Block />
      </ThemeProvider>
    </div>
  );
}

export default App;
