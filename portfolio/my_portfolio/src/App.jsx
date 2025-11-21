import Navbar from './components/Navbar'
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'

function App() {

  return (
    <div className='bg-[#0f1123] text-white min-h-screen font-sans'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;