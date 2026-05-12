'use client';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar({ setMobileOpen }) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    switch (pathname) {
      case '/dashboard': return 'Dashboard';
      case '/dashboard/scanner': return 'Scan Medicine Label';
      case '/dashboard/prescription': return 'Scan Prescription';
      case '/dashboard/diary': return 'Symptom Diary';
      case '/dashboard/history': return 'Scan History';
      case '/dashboard/report': return 'Doctor Report';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-text hidden sm:block">{getPageTitle()}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
            A
          </div>
          <span className="text-sm font-medium text-gray-700">ahmed@example.com</span>
        </div>
      </div>
    </header>
  );
}
