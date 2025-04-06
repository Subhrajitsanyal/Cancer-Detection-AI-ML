import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Upload Medical Image', icon: '🩻', path: '/upload' },
    { title: 'Check Reports', icon: '📁', path: '/check-reports' },
    { title: 'Book Appointments', icon: '📅', path: '/appointments' },
    { title: 'Profile', icon: '👤', path: '/profile' },
    { title: 'Nearby Clinics', icon: '🏥', path: '/clinics' },
    { title: 'Health Tips', icon: '💡', path: '/health-tips' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">
          📊 Health Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(card.path)}
              className="bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-2xl p-6 shadow-xl border border-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="text-gray-400 mt-2 text-sm">Click to explore this section</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
