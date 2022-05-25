import { Routes,Route } from 'react-router-dom'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Ourportfolio from './components/OurPortfolio/OurPortfolio';
import Ourservices from './components/OurServices/OurServices';
import Pages from './components/Pages/Pages';
import DetailBlog from './components/Blog/DetailBlog';
import Error from './components/error';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="mt-[52px]"></div>
      
      <Routes>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/blog/:id" element={<DetailBlog/>}></Route>
        <Route path="/pages" element={<Pages/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/ourportfolio" element={<Ourportfolio/>}></Route>
        <Route path="/ourservices" element={<Ourservices/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>

      <div className="mt-[30px]"></div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
