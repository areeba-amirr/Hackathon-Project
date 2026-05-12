'use client';
import { useState } from 'react';
import MedicineCard from '@/components/shared/MedicineCard';

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedScan, setSelectedScan] = useState(null);

  // Dummy Data
  const scans = [
    { id:1, name:"Paracetamol", name_urdu:"پیراسیٹامول", date:"May 10, 2026", type:"label" },
    { id:2, name:"Amoxicillin", name_urdu:"اموکسیسیلن", date:"May 8, 2026", type:"prescription" },
    { id:3, name:"Omeprazole", name_urdu:"اومیپرازول", date:"May 5, 2026", type:"label" },
    { id:4, name:"Metformin", name_urdu:"میٹفارمن", date:"May 3, 2026", type:"prescription" },
    { id:5, name:"Aspirin", name_urdu:"اسپرین", date:"May 1, 2026", type:"label" }
  ];

  // Dummy Full Detail
  const dummyDetail = {
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

  const filteredScans = scans.filter(scan => {
    const matchesSearch = scan.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' ? true : scan.type === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text mb-1">Scan History</h1>
          <p className="text-muted">12 scans total</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          >
            <option value="All">All</option>
            <option value="Label">Labels</option>
            <option value="Prescription">Prescriptions</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y">
          {filteredScans.map(scan => (
            <div key={scan.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="text-3xl bg-gray-100 p-3 rounded-xl">
                  {scan.type === 'label' ? '💊' : '📋'}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text">{scan.name}</h3>
                  <p className="font-serif rtl-text text-lg text-gray-700">{scan.name_urdu}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted">
                    <span className="flex items-center gap-1">📅 {scan.date}</span>
                    <span className="capitalize px-2 py-0.5 bg-gray-200 rounded-full text-xs text-gray-600">
                      {scan.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setSelectedScan({...dummyDetail, medicine_name: scan.name, medicine_name_urdu: scan.name_urdu})}
                  className="px-4 py-2 text-sm font-medium text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  View
                </button>
                <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t flex justify-between items-center bg-gray-50 text-sm">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 font-medium cursor-not-allowed opacity-50">
            Previous
          </button>
          <span className="text-muted">Page 1 of 3</span>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>

      {/* Modal for viewing detail */}
      {selectedScan && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-lg">Scan Details</h2>
              <button 
                onClick={() => setSelectedScan(null)}
                className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto p-4 bg-gray-50">
              <MedicineCard data={selectedScan} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
