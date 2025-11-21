import { useState } from 'react'

function Navbar() {
  const [isMobileView, setIsMobileView] = useState(false);
  
  return (
    <div>
      <nav className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="text-2xl font-bold text-white-800">Gbolahan</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="home" className="text-white-700 hover:text-gray-700 font-medium">Home</a>
            <a href="services" className="text-white-700 hover:text-gray-700 font-medium">Services</a>
            <a href="about" className="text-white-700 hover:text-gray-700 font-medium">About</a>
            <a href="skills" className="text-white-700 hover:text-gray-700 font-medium">Skills</a>
            <a href="portfolio" className="text-white-700 hover:text-gray-700 font-medium">Portfolio</a>
            <a href="contact" className="text-white-700 hover:text-gray-700 font-medium">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileView(!isMobileView)}
            className="md:hidden text-gray-700 text-2xl font-bold"
          >
            {isMobileView ? '✕' : '☰'}
          </button>
        
          {/* Mobile Menu */}
          {isMobileView && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="home" className="text-white-700 hover:text-gray-600 font-medium">Home</a>
                <a href="services" className="text-white-700 hover:text-gray-600 font-medium">Servicess</a>
                <a href="about" className="text-white-700 hover:text-gray-600 font-medium">About</a>
                <a href="skills" className="text-white-700 hover:text-gray-600 font-medium">Skills</a>
                <a href="portfolio" className="text-white-700 hover:text-gray-600 font-medium">Portfolio</a>
                <a href="contact" className="text-white-700 hover:text-gray-600 font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;