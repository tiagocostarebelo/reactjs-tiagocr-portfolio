import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProjectsPage from "./pages/projectsPage";
import ServicesPage from "./pages/servicesPage";
import ContactPage from "./pages/contactPage";


function App() {


  return (

    <Routes >
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes >

  )
}

export default App
