import './App.css';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Program from './pages/program';
import Progress from './pages/progress';
import Tracking from './pages/tracking';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/program" element={<Program />}/>
            <Route path="/progress" element={<Progress />}/>
            <Route path="/tracking" element={<Tracking />}/>
            <Route path="/signin" element={<SignIn />}/>
        </Routes>
    </Router>
  );
}

export default App;