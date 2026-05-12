'use client';
import { useState } from 'react';
import Webcam from 'react-webcam';
import WarningBanner from '@/components/shared/WarningBanner';
import MedicineCard from '@/components/shared/MedicineCard';

export default function ScannerPage() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);

  // Dummy Data
  const dummyResult = {
    medicine_name: "Paracetamol",
    medicine_name_urdu: "پیراسیٹامول",
    dosage: "500mg",
    dosage_urdu: "500 ملی گرام",
    frequency: "3 times daily",
    frequency_urdu: "دن میں تین بار",
    instructions: "After food",
    instructions_urdu: "کھانے کے بعد",
    warnings: "Do not exceed 8 tablets per day",
    warnings_urdu: "دن میں 8 سے زیادہ گولیاں نہ لیں",
    is_dangerous: false
  };

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResult(dummyResult);
      setShowWebcam(false);
    }, 2000);
  };

  const resetScanner = () => {
    setResult(null);
    setShowWebcam(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {result?.is_dangerous && (
        <WarningBanner 
          english="HIGH RISK MEDICINE — CONSULT DOCTOR BEFORE TAKING" 
          urdu="خطرناک دوائی — لینے سے پہلے ڈاکٹر سے ملیں" 
        />
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column: Scanner */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-text mb-2">Scan Medicine Label</h1>
            <p className="text-muted">Take a clear photo of the medicine packaging.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
            {showWebcam ? (
              <div className="relative w-full h-[300px] bg-black rounded-lg overflow-hidden flex items-center justify-center">
                <Webcam
                  audio={false}
                  screenshotFormat="image/jpeg"
                  className="absolute inset-0 w-full h-full object-cover"
                  videoConstraints={{ facingMode: "environment" }}
                />
                {/* Simulated crosshair overlay */}
                <div className="absolute inset-0 border-2 border-white/30 pointer-events-none rounded-lg m-4"></div>
              </div>
            ) : (
              <div className="w-full h-[300px] bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-4xl mb-2">✅</span>
                <p className="text-gray-500 font-medium">Image captured</p>
              </div>
            )}

            {scanning ? (
              <div className="flex flex-col items-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
                <p className="text-primary font-medium animate-pulse">Scanning with AI...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mt-2">
                {showWebcam ? (
                  <>
                    <button 
                      onClick={handleScan}
                      className="bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 flex justify-center items-center gap-2 transition"
                    >
                      <span>📸</span> Take Photo
                    </button>
                    <button className="border border-gray-300 bg-white text-text py-3 rounded-lg font-medium hover:bg-gray-50 flex justify-center items-center gap-2 transition">
                      <span>📁</span> Upload Image
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={resetScanner}
                    className="col-span-2 border border-gray-300 bg-white text-text py-3 rounded-lg font-medium hover:bg-gray-50 flex justify-center items-center gap-2 transition"
                  >
                    <span>🔄</span> Scan Another
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="space-y-6">
          {!result && !scanning && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
              <span className="text-5xl text-gray-300 mb-4">💊</span>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Waiting for scan...</h3>
              <p className="text-sm text-gray-400 max-w-xs">Take a photo of a medicine label to see its translated information here.</p>
            </div>
          )}

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <MedicineCard data={result} />
              
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Save to History
                </button>
                <button 
                  onClick={resetScanner}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                  Scan Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
