'use client';
import { useState } from 'react';
import WarningBanner from '@/components/shared/WarningBanner';
import MedicineCard from '@/components/shared/MedicineCard';

export default function PrescriptionPage() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  // Dummy Data
  const dummyResults = {
    medicines: [
      {
        name: "Amoxicillin",
        name_urdu: "اموکسیسیلن",
        dosage: "500mg",
        frequency: "3 times daily",
        frequency_urdu: "دن میں تین بار",
        duration: "5 days",
        duration_urdu: "پانچ دن",
        instructions: "After food",
        instructions_urdu: "کھانے کے بعد",
        is_dangerous: false
      },
      {
        name: "Omeprazole",
        name_urdu: "اومیپرازول",
        dosage: "20mg",
        frequency: "Once daily",
        frequency_urdu: "دن میں ایک بار",
        duration: "7 days",
        duration_urdu: "سات دن",
        instructions: "Before food",
        instructions_urdu: "کھانے سے پہلے",
        is_dangerous: false
      },
      {
        name: "Metformin",
        name_urdu: "میٹفارمن",
        dosage: "1000mg",
        frequency: "Twice daily",
        frequency_urdu: "دن میں دو بار",
        duration: "30 days",
        duration_urdu: "تیس دن",
        instructions: "With food",
        instructions_urdu: "کھانے کے ساتھ",
        is_dangerous: true
      }
    ],
    interaction_warning: "Drug interaction detected between Metformin and another medication.",
    interaction_warning_urdu: "میٹفارمن اور دوسری دوا کے درمیان خطرناک تعامل"
  };

  const handleUpload = () => {
    setFileUploaded(true);
  };

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResults(dummyResults);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text mb-2">Scan Prescription</h1>
        <p className="text-muted">Upload a photo of your doctor's handwritten or printed prescription.</p>
      </div>

      {/* Upload Area */}
      {!results && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
          {!fileUploaded ? (
            <div 
              onClick={handleUpload}
              className="border-2 border-dashed border-primary bg-blue-50 rounded-xl p-12 text-center cursor-pointer hover:bg-blue-100 transition"
            >
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-lg font-medium text-primary mb-1">Click to upload prescription photo</h3>
              <p className="text-sm text-gray-500">or drag and drop here (JPG, PNG)</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-vector/doctor-hand-writing-medical-prescription-260nw-1049586119.jpg')] bg-cover bg-center opacity-50 blur-[2px]"></div>
                <div className="relative z-10 bg-black/50 text-white px-4 py-2 rounded">
                  prescription_image.jpg
                </div>
              </div>

              {scanning ? (
                <div className="flex flex-col items-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
                  <p className="text-primary font-medium animate-pulse">AI is reading handwriting...</p>
                </div>
              ) : (
                <button 
                  onClick={handleScan}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-md flex justify-center gap-2 items-center"
                >
                  <span>✨</span> Read Prescription
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Results Section */}
      {results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {results.interaction_warning && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">⚠️</span>
                <div>
                  <h3 className="font-bold text-yellow-800">Drug Interaction Detected</h3>
                  <p className="text-yellow-700 text-sm">{results.interaction_warning}</p>
                </div>
              </div>
              <p className="font-serif rtl-text text-lg text-yellow-900 md:text-left text-right">
                {results.interaction_warning_urdu}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text">Medicines Found ({results.medicines.length})</h2>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm">
              Save All to History
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {results.medicines.map((med, index) => (
              <MedicineCard key={index} data={med} isPrescriptionItem={true} />
            ))}
          </div>

          <div className="flex justify-center mt-8 pt-4 border-t">
             <button 
                onClick={() => {
                  setResults(null);
                  setFileUploaded(false);
                }}
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Scan Another Prescription
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
