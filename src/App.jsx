import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Home as DovahzulHome } from "./pages/dovahzul-home"
import { Dranleic } from "./pages/dranleic-haligdrake"
import { Pharis } from "./pages/pharis-ironeye"
import { Dranleic as DovahzulDranleic } from "./pages/dovahzul-dranleic-haligdrake"
import { Layout } from "./components/Layout"


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/dovahzul_Home" element={<DovahzulHome/>}/>
          <Route path="/Dranleic_Haligdrake" element={<Dranleic/>}/>
          <Route path="/dovahzul_Dranleic_Haligdrake" element={<DovahzulDranleic/>}/>
          <Route path="/Pharis_Ironeye" element={<Pharis/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
