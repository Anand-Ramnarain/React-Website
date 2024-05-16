import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Router>
          <Pages />
        </Router>
      </div>
    </>
  );
};

export default App;
