import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-blue-700 text-xl">
          <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Rehoboth Technologies"
    className="h-32 w-auto"
  />

  <span className="font-bold text-blue-700 text-xl">
    Rehoboth Technologies Company Limited
  </span>
</div>
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}