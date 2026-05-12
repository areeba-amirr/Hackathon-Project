'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ReportPage() {
  const [downloading, setDownloading] = useState(false);

  // Chart data
  const chartData = {
    labels: ['May 1', 'May 3', 'May 5', 'May 7', 'May 9', 'May 11'],
    datasets: [
      {
        label: 'Pain Level (1-10)',
        data: [3, 4, 2, 8, 1, 5],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Dummy PDF downloaded successfully!");
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text mb-2">Doctor Report</h1>
        <p className="text-muted">Generate a professional report to share with your doctor</p>
      </div>

      <div className="bg-white border shadow-lg max-w-2xl mx-auto rounded-none">
        {/* Report Header */}
        <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between">
          <div className="text-3xl font-bold flex items-center gap-2">
            <span>💊</span> MediSnap
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase tracking-widest opacity-90">Medical Report</h2>
            <p className="text-blue-100 text-sm mt-1">Date: May 12, 2026</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8 text-text">
          {/* Patient Info */}
          <div className="flex justify-between border-b-2 border-gray-100 pb-6">
            <div>
              <p className="text-sm text-muted uppercase font-bold tracking-wider mb-1">Patient Name</p>
              <p className="text-xl font-medium">Ahmed Khan</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted uppercase font-bold tracking-wider mb-1">Email</p>
              <p className="text-lg">ahmed@example.com</p>
            </div>
          </div>

          {/* Medicines Scanned */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-primary">Medicines Scanned (5)</h3>
            <ul className="space-y-3">
              {[
                { name: 'Paracetamol', date: 'May 10' },
                { name: 'Amoxicillin', date: 'May 8' },
                { name: 'Omeprazole', date: 'May 5' },
                { name: 'Metformin', date: 'May 3' },
                { name: 'Aspirin', date: 'May 1' }
              ].map((m, i) => (
                <li key={i} className="flex justify-between">
                  <span className="font-medium">• {m.name}</span>
                  <span className="text-muted text-sm">{m.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Summary */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-primary">Health Summary (30 Days)</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between">
                <span className="text-muted">Average Pain:</span>
                <span className="font-bold">5/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Average Sleep:</span>
                <span className="font-bold">6 hrs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Best Day:</span>
                <span className="font-bold text-green-600">May 9</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Worst Day:</span>
                <span className="font-bold text-red-600">May 7</span>
              </div>
              <div className="flex justify-between col-span-2 pt-2 border-t border-gray-200">
                <span className="text-muted">Total Entries logged:</span>
                <span className="font-bold">12</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-primary">Pain Trend</h3>
            <div className="h-48 w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg flex items-start gap-3 mt-8 text-sm">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-bold mb-1">Disclaimer</p>
              <p>This report is AI-generated based on user input and automated scans. It is not professional medical advice. Always consult your doctor before making medical decisions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <button 
          onClick={handleDownload}
          className="flex-1 bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
        >
          {downloading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <><span>📄</span> Download PDF</>
          )}
        </button>
        <button className="flex-1 border border-gray-300 bg-white text-text py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition flex justify-center items-center gap-2">
          <span>🔗</span> Share with Doctor
        </button>
      </div>
    </div>
  );
}
