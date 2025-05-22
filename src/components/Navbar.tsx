import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {signInWithGitHub, signOut, user} = useAuth()

  const displayName = user?.user_metadata?.user_name
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to={"/"} className="font-mono text-xl font-bold text-white">
            $ocial<span className="text-purple-500">.mania</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to={"/create"} className="text-gray-300 hover:text-white transition-colors">Create Post</Link>
            <Link to={"/communities"} className="text-gray-300 hover:text-white transition-colors">Communities</Link>
            <Link to={"/community/create"} className="text-gray-300 hover:text-white transition-colors">Create Community</Link>
          </div>

          {/* Desktop Auth */}
      <div className="hidden md:flex justify-end items-center max-w-5xl mx-auto px-4">
        {user ? (
          <div className="hidden md:flex items-center space-x-4">
            {user.user_metadata?.avatar_url && (
              <img src={user?.user_metadata?.avatar_url} alt="avatar" className="w-8 h-8 rounded-full"/>
            )}
            <span className="text-gray-300">{displayName}</span>
            <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded-md">Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGitHub} className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md">Sign In With GitHub</button>
        )}
      </div>

          {/* Mobile Menu Button*/}
          <div className="md:hidden">
            <button onClick={()=>setIsMobileMenuOpen((prev)=>!prev)} className="text-gray-300 focus:outline-none"><svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg></button>
          </div>
        </div>
      </div>

      
      
      {/* Mobile Menu */}
          {isMobileMenuOpen &&(<div className="md:hidden bg-[rgba(10,10,10,0.9)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to={"/"} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
              <Link to={"/create"}className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Create Post</Link>
              <Link to={"/communities"}className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Communities</Link>
              <Link to={"/community/create"}className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Create Community</Link>
            </div>
          </div>)}
    </nav>
  );
};

export default Navbar;
