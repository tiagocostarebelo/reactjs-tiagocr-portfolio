import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
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
    const titles = {
      '/': "TiagoCR | Home",
      '/about': "TiagoCR | About",
      '/portfolio': "TiagoCR | Portfolio",
      '/portfolio/:slug': "TiagoCR | ",
      '/services': "TiagoCR | Services",
      '/contact': "TiagoCR | Contact",
      '/privacy-policy': "TiagoCR | Privacy Policy",
      '/terms-and-conditions': "TiagoCR | Terms and Conditions"
    }
    document.title = titles[location.pathname] || 'TiagoCR | Portfolio';
  }, [location])

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
