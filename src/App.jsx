import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
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
          <Route path="/wiki/Home" element={<Home/>} />
          <Route path="/wiki/Dranleic_Haligdrake" element={<Dranleic/>}/>
          <Route path="/wiki/Pharis_Ironeye" element={<Pharis/>}/>
          <Route path="/wiki/Credits" element={<Credits/>}/>
          <Route path="/wiki" element={<Navigate to="/wiki/Home" replace />} />
          <Route path="/" element={<Navigate to="/wiki/Home" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
