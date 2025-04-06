import { motion } from 'framer-motion';
import { FileText, DownloadCloud } from 'lucide-react';

const dummyReports = [
  {
    name: 'Lung X-Ray Report',
    date: '2025-03-18',
    type: 'PDF',
  },
  {
    name: 'Blood Test Result',
    date: '2025-03-01',
    type: 'PDF',
  },
  {
    name: 'MRI Brain Scan',
    date: '2025-02-10',
    type: 'Image',
  },
];

export default function CheckReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-6">📁 Your Medical Reports</h1>

        <div className="space-y-4">
          {dummyReports.map((report, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-xl shadow border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <FileText size={28} className="text-blue-400" />
                <div>
                  <p className="font-semibold text-lg">{report.name}</p>
                  <p className="text-gray-400 text-sm">{report.date} • {report.type}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                <DownloadCloud size={20} />
                <span>Download</span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
