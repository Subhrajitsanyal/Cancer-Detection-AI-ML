import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="HealthClinic"
          className="w-8 h-8"
        />
        <span className="text-lg font-bold text-blue-400">HealthClinic</span>
      </div>

      {/* Center - Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
      </div>

      {/* Right - Login */}
      <div>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
        >
          Login
        </Link>
      </div>
    </motion.nav>
  );
}
