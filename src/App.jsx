import Footer from "./components/footer/Footer"

import Navbar from "./components/navbar/Navbar"
// import Contacts from "./pages/Contacts"
// import Home from "./pages/Home"
// import Projects from "./pages/Projects"
import Project from "./pages/Project"
import "/styles/main.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Projects /> */}
      <Project />
      {/* <Contacts /> */}
      <Footer />
    </div>
  )
}

export default App
