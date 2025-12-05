import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import PortfolioPage from "./pages/portfolioPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";
import NotFound from "./pages/NotFound";


function App() {


  return (

    <Routes >
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >

  )
}

export default App
