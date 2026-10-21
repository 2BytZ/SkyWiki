import { useEffect } from "react"
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/home"
import { Dranleic } from "./pages/dranleic-haligdrake"
import { Pharis } from "./pages/pharis-ironeye"
import { Credits } from "./pages/credits"
import { Layout } from "./components/Layout"


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Dranleic_Haligdrake" element={<Dranleic/>}/>
          <Route path="/Pharis_Ironeye" element={<Pharis/>}/>
          <Route path="/Credits" element={<Credits/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
