import Home from "../src/pages/Home";
import Courses from "../src/pages/Courses";
import ApplyOnline from "../src/pages/ApplyOnline";
import "../src/index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudyInIndia from "./pages/StudyInIndia";
import StudyInAbroad from "./pages/StudyInAbroad";
import AssignmentWriting from "./pages/AssignmentWriting";
import DeceratationWriting from "./pages/DeceratationWriting";
import SynopsisWriting from "./pages/SynopsisWriting";
import PhdthesisWriting from "./pages/PhdthesisWriting";
import Mbaproject from "./pages/Mbaproject";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="ApplyOnline" element={<ApplyOnline />} />
        <Route path="StudyInIndia" element={<StudyInIndia />} />
        <Route path="StudyInAbroad" element={<StudyInAbroad />} />
        <Route path="AssignmentWriting" element={<AssignmentWriting />} />
        <Route path="DeceratationWriting" element={<DeceratationWriting />} />
        <Route path="SynopsisWriting" element={<SynopsisWriting />} />
        <Route path="MbaProject" element={<Mbaproject />} />
        <Route path="PhdthesisWriting" element={<PhdthesisWriting />} />
        <Route path="blog" element={<Blog />} />
        <Route exact path="/Blog-post" component={BlogPostPage} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
