import Link from 'next/link';

export default function DashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text">Good Morning, Ahmed 👋</h1>
        <p className="text-muted">May 12, 2026</p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-muted mb-1">Total Scans</p>
          <p className="text-2xl font-bold text-text">12</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-muted mb-1">Day Streak</p>
          <p className="text-2xl font-bold text-orange-500">5 🔥</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-muted mb-1">Last Scan</p>
          <p className="text-xl font-bold text-text truncate">Paracetamol</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-muted mb-1">Avg Pain</p>
          <p className="text-2xl font-bold text-text">5/10</p>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/dashboard/scanner" className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl shadow-sm transition flex items-center justify-between group">
          <div>
            <h2 className="text-xl font-bold mb-1">Scan Medicine Label</h2>
            <p className="text-blue-100">Translate medicine bottles instantly</p>
          </div>
          <div className="text-4xl group-hover:scale-110 transition-transform">💊</div>
        </Link>
        
        <Link href="/dashboard/prescription" className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-xl shadow-sm transition flex items-center justify-between group">
          <div>
            <h2 className="text-xl font-bold mb-1">Scan Prescription</h2>
            <p className="text-purple-100">Read doctor handwriting</p>
          </div>
          <div className="text-4xl group-hover:scale-110 transition-transform">📋</div>
        </Link>
        
        <Link href="/dashboard/diary" className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl shadow-sm transition flex items-center justify-between group">
          <div>
            <h2 className="text-xl font-bold mb-1">Log Symptoms</h2>
            <p className="text-green-100">Voice-powered health diary</p>
          </div>
          <div className="text-4xl group-hover:scale-110 transition-transform">🎤</div>
        </Link>
        
        <Link href="/dashboard/report" className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-xl shadow-sm transition flex items-center justify-between group">
          <div>
            <h2 className="text-xl font-bold mb-1">Generate Report</h2>
            <p className="text-orange-100">Create PDF for your doctor</p>
          </div>
          <div className="text-4xl group-hover:scale-110 transition-transform">📄</div>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Recent Scans */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text">Recent Scans</h2>
            <Link href="/dashboard/history" className="text-primary text-sm font-medium hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { id:1, name:"Paracetamol", name_urdu:"پیراسیٹامول", date:"May 10, 2026", type:"label", icon: "💊" },
              { id:2, name:"Amoxicillin", name_urdu:"اموکسیسیلن", date:"May 8, 2026", type:"prescription", icon: "📋" },
              { id:3, name:"Omeprazole", name_urdu:"اومیپرازول", date:"May 5, 2026", type:"label", icon: "💊" },
            ].map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-bold text-text">{item.name}</p>
                    <p className="text-sm text-muted">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg rtl-text text-gray-700">{item.name_urdu}</p>
                  <p className="text-xs text-gray-400 capitalize">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Summary (Mini Calendar) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-text mb-6">This Week</h2>
          <div className="flex justify-between items-end mb-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
              // Dummy data: Mix of green, yellow, red, null (gray)
              const colors = ['bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-gray-200', 'bg-gray-200', 'bg-gray-200'];
              return (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs text-white ${colors[i]}`}>
                    {colors[i] !== 'bg-gray-200' ? (colors[i].includes('green') ? '😊' : colors[i].includes('yellow') ? '😐' : '😢') : ''}
                  </div>
                  <span className="text-xs text-muted font-medium">{day}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wider">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500"></div> Good (Pain 1-3)
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div> Okay (Pain 4-6)
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-500"></div> Bad (Pain 7-10)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
