export default function WarningBanner({ english, urdu }) {
  return (
    <div className="bg-red-600 text-white w-full p-4 flex flex-col items-center justify-center text-center shadow-md mb-6 rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">⚠️</span>
        <h2 className="text-lg font-bold uppercase tracking-wider">{english}</h2>
      </div>
      <p className="text-lg font-serif rtl-text">{urdu}</p>
    </div>
  );
}
