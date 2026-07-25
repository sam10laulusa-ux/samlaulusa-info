import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Experience from "./pages/Experience";
import Ventures from "./pages/Ventures";
import Resume from "./pages/Resume";
import PrintResume from "./pages/PrintResume";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Photography from "./pages/Photography";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/portfolio/:slug" element={<CaseStudy />} />
        <Route path="/work" element={<Navigate to="/portfolio" replace />} />
        <Route path="/work/:slug" element={<Navigate to="/portfolio" replace />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/resume/print" element={<PrintResume />} />
    </Routes>
  );
}
