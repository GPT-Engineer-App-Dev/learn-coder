import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CourseDetails from "./pages/CourseDetails.jsx"; // Import the new CourseDetails page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/course/:id" element={<CourseDetails />} /> {/* Add route for CourseDetails */}
      </Routes>
    </Router>
  );
}

export default App;
