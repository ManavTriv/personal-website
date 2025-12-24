import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <Router>
        <AppRouter />
      </Router>
    </ColorProvider>
  );
}

export default App;
