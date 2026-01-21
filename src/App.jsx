import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { getPageTitle, getMetaDescription } from "./utils/seo";
import Layout from "./layout/Layout";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PortfolioPage from "./pages/portfolioPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";


function App() {
  const location = useLocation();

  useEffect(() => {
    // Title
    document.title = getPageTitle(location.pathname);

    // Meta description
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", getMetaDescription(location.pathname));
  }, [location.pathname]);

  return (

    <Routes >
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >

  )
}

export default App
