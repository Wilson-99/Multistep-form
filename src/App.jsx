import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./State";
import { Contact } from "./Steps/Contact";
import { Comment } from "./Steps/Comment";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";
import img from "./assets/img.jpg";
import "./Styles/App.sass";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <div className="sidebar">
            <img src={img} alt="" />
          </div>
          <div className="container">
            <div className="header">
              <h2>
                Obrigado pela preferência, 
                <span> dá-nos um feedback...</span>
              </h2>
            </div>
            <Stepper />
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/confirm" element={<Confirm />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
