import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/homePage";

function App() {


  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />

      </Routes >
    </>
  )
}

export default App
