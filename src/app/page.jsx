import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-3xl">💊</span> MediSnap
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
          <Link href="/signup" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">
          Snap. Understand. Stay Safe.
        </h1>
        <h2 className="text-3xl text-primary font-bold mb-6 rtl-text">
          اپنی دوائی کو سمجھیں
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          MediSnap translates medicine labels and prescriptions to Urdu instantly using AI. Designed for every Pakistani.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" className="bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition">
            Get Started
          </Link>
          <button className="bg-white text-text border border-gray-300 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition">
            How it works
          </button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Problems We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🔤</div>
              <h3 className="text-xl font-bold mb-3">Language Barrier</h3>
              <p className="text-muted">60% of Pakistanis cannot read English medicine labels</p>
            </div>
            <div className="bg-background p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">Doctor Handwriting</h3>
              <p className="text-muted">Unreadable prescriptions lead to dangerous mistakes</p>
            </div>
            <div className="bg-background p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold mb-3">Drug Interactions</h3>
              <p className="text-muted">Dangerous combinations go undetected daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What MediSnap Does</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="font-bold">Scan Medicine Label</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-bold">Read Prescription</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="font-bold">Voice Symptom Diary</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-bold">Doctor Report PDF</h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">220M+</div>
            <div className="text-blue-100">Pakistanis need this</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">60%</div>
            <div className="text-blue-100">Cannot read English labels</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">7000+</div>
            <div className="text-blue-100">Prescription errors yearly</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-8 border-t">
        <p className="text-muted mb-2">MediSnap © 2026</p>
        <p className="text-sm font-medium">Built for Pakistan 🇵🇰</p>
      </footer>
    </div>
  );
}
