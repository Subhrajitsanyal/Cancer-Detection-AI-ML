import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Stethoscope } from 'lucide-react';

const clinics = [
  {
    name: 'CityCare Clinic',
    location: 'Barrackpore Main Rd, Kolkata',
    phone: '+91 98765 43210',
  },
  {
    name: 'Wellness Point',
    location: 'MG Road, Kolkata',
    phone: '+91 91234 56789',
  },
  {
    name: 'HealthFirst Diagnostics',
    location: 'BT Road, Kolkata',
    phone: '+91 99887 77665',
  },
];

export default function NearbyClinics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Stethoscope className="text-blue-400" size={28} />
          Nearby Clinics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{clinic.name}</h2>
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <MapPin size={16} />
                <span>{clinic.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <PhoneCall size={16} />
                <span>{clinic.phone}</span>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md text-sm font-medium transition">
                Contact Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
