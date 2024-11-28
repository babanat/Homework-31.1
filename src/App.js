import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
import Poslugi from "./pages/Poslugi";
import CurrencyConverter from "./pages/CurrencyConverter";
import Contacts from "./pages/Contacts";
import AskQuestion from "./pages/AskQuestion";
import PersonalAccount from "./pages/PersonalAccount";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Header />
        <Body />
        <Routes>
          <Route path="/" element={<Navigate to="/converter" />} />
          <Route path="/converter" element={<CurrencyConverter />} />
          <Route path="/poslugi" element={<Poslugi />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/ask-question" element={<AskQuestion />} />
          <Route path="/personal-account" element={<PersonalAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

