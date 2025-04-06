import { motion } from 'framer-motion';
import { User, Mail, Phone, Edit2 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-8">👤 Your Profile</h1>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
              S
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Subhrajit Sanyal</h2>
              <p className="text-gray-400 text-sm">Health Dashboard User</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg">
              <User size={20} className="text-blue-400" />
              <input
                type="text"
                defaultValue="Subhrajit Sanyal"
                className="bg-transparent w-full outline-none text-white"
              />
              <Edit2 size={16} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg">
              <Mail size={20} className="text-blue-400" />
              <input
                type="email"
                defaultValue="soumyajitsanyal02@gmail.com"
                className="bg-transparent w-full outline-none text-white"
              />
              <Edit2 size={16} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg">
              <Phone size={20} className="text-blue-400" />
              <input
                type="tel"
                defaultValue="+91 9876543210"
                className="bg-transparent w-full outline-none text-white"
              />
              <Edit2 size={16} className="text-gray-400" />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Save Changes
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
