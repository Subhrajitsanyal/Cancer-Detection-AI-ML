import { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudUpload } from 'lucide-react';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    // Add upload logic here (API call or similar)
    alert(`Uploaded: ${selectedFile.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-800 border border-gray-700 p-10 rounded-3xl shadow-2xl max-w-xl w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Upload Medical Image</h2>

        <div className="flex flex-col items-center justify-center gap-4">
          <label className="cursor-pointer w-full border-dashed border-2 border-gray-600 p-6 rounded-2xl text-center hover:border-blue-500 transition">
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <CloudUpload className="mx-auto mb-3 h-10 w-10 text-blue-400" />
            <span className="text-gray-300">Click to select image (jpeg/png)</span>
          </label>

          {preview && (
            <motion.img
              src={preview}
              alt="Preview"
              className="w-full h-60 object-contain rounded-xl border border-gray-600 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          <motion.button
            onClick={handleUpload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!selectedFile}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-50"
          >
            Generate Result
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
