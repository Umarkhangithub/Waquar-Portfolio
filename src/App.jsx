import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Project from './components/Project/Project'

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}   />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='contact' element={<Contact/>} />
          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
