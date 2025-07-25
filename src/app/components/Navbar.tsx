export function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold tracking-tight  px-3 py-1 rounded-md">
                Class Manager
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a 
                  href="/home" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Sobre
                </a>
                <a 
                  href="/login" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Login
                </a>
                <a 
                  href="/register" 
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300 ml-4"
                >
                  Cadastre-se
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-controls="mobile-menu" 
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
 
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
          </div>
        </div>
      </nav>
    </header>
  );
}