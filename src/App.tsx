import { Routes, Route, Navigate, useParams } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Experience from "./pages/Experience";
import Business from "./pages/Business";
import Technology, { AICaseStudy } from "./pages/Technology";
import Resume from "./pages/Resume";
import PrintResume from "./pages/PrintResume";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Photography from "./pages/Photography";
import NotFound from "./pages/NotFound";

function LegacyWork() {
  const { slug } = useParams();
  return <Navigate to={`/portfolio/${slug}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/portfolio/:slug" element={<CaseStudy />} />
        <Route path="/work" element={<Navigate to="/portfolio" replace />} />
        <Route path="/work/:slug" element={<LegacyWork />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/ventures" element={<Navigate to="/business" replace />} />
        <Route path="/business" element={<Business />} />
        <Route path="/design" element={<Work />} />
        <Route path="/ai-technology" element={<Technology />} />
        <Route path="/ai-technology/:slug" element={<AICaseStudy />} />
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
