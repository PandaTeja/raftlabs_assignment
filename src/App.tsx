import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Relation from "./page/relation/relation";
import Knight from "./page/knight/knight";
import Home from "./page/Home/home";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/relation" element={<Relation />} />
                    <Route path="/knight" element={<Knight />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;