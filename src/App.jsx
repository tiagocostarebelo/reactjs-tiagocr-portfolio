import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProjectsPage from "./pages/projectsPage";
import ContactPage from "./pages/contactPage";
import Footer from "./components/Footer";


function App() {


  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes >
      <Footer />
    </>
  )
}

export default App
