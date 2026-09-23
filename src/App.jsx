import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Dranleic } from "./pages/dranleic-haligdrake"
import { Pharis } from "./pages/pharis-ironeye"
import { Layout } from "./components/Layout"


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Dranleic_Haligdrake" element={<Dranleic/>}/>
          <Route path="/Pharis_Ironeye" element={<Pharis/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
