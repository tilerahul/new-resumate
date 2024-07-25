import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Layout/Home';
import Navbar from './components/Layout/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Layout/Footer';
import About from './components/about/About';
import Resume from './components/Resume/Resume';
import Project from './components/Resume/Section/Project';
import Feature from './components/feature';
import Blog from './components/Resume/Blog/Blog';
import CraftingBlog from './components/Resume/Blog/CraftingBlog';
import TailorResume from './components/Resume/Blog/TailorResume';
import ScrollToTop from './components/Resume/Section/ScrollToTop';
import PageNotFound from './components/PageNotFound';
import TempleteTwo from './components/Resume/Templetes/TempleteTwo'
import Faq from './components/faq/Faq';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ForgotPassword from './components/Auth/ForgotPassword';
import Team from './components/about/Team';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<CraftingBlog />} />
          <Route path="/blog2" element={<TailorResume />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/project" element={<Project />} />
          <Route path="/resume/resumePreview" element={<TempleteTwo />} />
          <Route path="/featurepath" element={<Feature />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    
  )
}
export default App
