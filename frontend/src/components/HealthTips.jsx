// components/HealthTips.jsx
import { motion } from 'framer-motion';
import { HeartPulse, Dumbbell, Salad, Smile } from 'lucide-react';

export default function HealthTips() {
  const tips = [
    {
      icon: <HeartPulse size={28} className="text-red-400" />, 
      title: 'Stay Active',
      description: 'Engage in at least 30 minutes of moderate physical activity daily.'
    },
    {
      icon: <Dumbbell size={28} className="text-blue-400" />,
      title: 'Strength Training',
      description: 'Include muscle-strengthening activities twice a week.'
    },
    {
      icon: <Salad size={28} className="text-green-400" />,
      title: 'Eat Healthy',
      description: 'Maintain a balanced diet with fruits, veggies, and lean proteins.'
    },
    {
      icon: <Smile size={28} className="text-yellow-400" />,
      title: 'Mental Wellness',
      description: 'Take breaks, meditate, and ensure proper sleep to stay mentally fit.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">💡 Health Tips</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md"
            >
              <div className="flex items-center gap-4 mb-3">
                {tip.icon}
                <h2 className="text-xl font-semibold">{tip.title}</h2>
              </div>
              <p className="text-gray-400 text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
