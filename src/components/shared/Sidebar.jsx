'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ScanLine, FileText, Mic, CalendarDays, FileBarChart, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/scanner', label: 'Scan Medicine', icon: ScanLine },
  { href: '/dashboard/prescription', label: 'Prescription', icon: FileText },
  { href: '/dashboard/diary', label: 'Symptom Diary', icon: Mic },
  { href: '/dashboard/history', label: 'History', icon: CalendarDays },
  { href: '/dashboard/report', label: 'Report', icon: FileBarChart },
];

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out flex flex-col
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 flex items-center justify-between border-b">
          <div className="text-2xl text-primary font-bold flex items-center gap-2">
            <span>💊</span> MediSnap
          </div>
          <button className="md:hidden text-gray-500" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition ${
                  isActive ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-primary' : 'text-gray-500'} />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t">
          <Link href="/login" className="flex items-center gap-3 px-3 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition">
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}
