import { motion } from 'framer-motion';
import { CalendarDays, Clock, UserPlus } from 'lucide-react';

export default function BookAppointments() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-6">📅 Book an Appointment</h1>

        <motion.form
          whileHover={{ scale: 1.01 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-5"
        >
          <div>
            <label className="block mb-1 text-gray-300">Full Name</label>
            <div className="flex items-center gap-2 bg-gray-900 rounded-md p-2">
              <UserPlus size={20} className="text-blue-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Appointment Date</label>
            <div className="flex items-center gap-2 bg-gray-900 rounded-md p-2">
              <CalendarDays size={20} className="text-blue-400" />
              <input
                type="date"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Time Slot</label>
            <div className="flex items-center gap-2 bg-gray-900 rounded-md p-2">
              <Clock size={20} className="text-blue-400" />
              <input
                type="time"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Confirm Appointment
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
