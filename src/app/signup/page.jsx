import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl text-primary font-bold mb-2 flex items-center justify-center gap-2">
            <span>💊</span> MediSnap
          </div>
          <h1 className="text-2xl font-bold text-text">Create Account</h1>
          <p className="text-muted">Join MediSnap today</p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Link href="/dashboard" className="block w-full bg-primary text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted">Already have an account? </span>
          <Link href="/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
