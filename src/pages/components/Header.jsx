import { Link } from "react-router";
import Logo from "../../assets/logo.svg";

export default function Header() {
      return (
            <nav className="bg-green-700 p-4 mb-4">
                  <div className="container mx-auto flex items-center">
                        <Link to="/" className="flex items-center mr-6">
                              <img src={Logo} className="h-8 w-auto" alt="Logo" />
                        </Link>
                        <div className="hidden md:flex space-x-6">
                              <Link to="/" className="text-white hover:text-green-200 transition-colors">
                                    Home
                              </Link>
                              <Link to="/gallery" className="text-white hover:text-green-200 transition-colors">
                                    Gallery
                              </Link>
                              <Link to="/contact" className="text-white hover:text-green-200 transition-colors">
                                    Contact
                              </Link>
                        </div>
                  </div>
            </nav>
      );
}
