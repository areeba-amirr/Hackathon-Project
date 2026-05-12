export default function MedicineCard({ data, isPrescriptionItem = false }) {
  if (!data) return null;

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${data.is_dangerous ? 'border-2 border-red-500' : 'border border-gray-200'}`}>
      <div className={`p-4 text-center ${data.is_dangerous ? 'bg-red-50' : 'bg-blue-50'} border-b`}>
        <h3 className={`text-2xl font-bold ${data.is_dangerous ? 'text-red-700' : 'text-primary'}`}>
          {data.medicine_name || data.name}
        </h3>
        <p className="text-2xl font-serif rtl-text mt-2 text-gray-800">
          {data.medicine_name_urdu || data.name_urdu}
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Dosage */}
        <div className="grid grid-cols-2 gap-4 items-center py-2 border-b border-gray-100">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider font-bold">Dosage</p>
            <p className="font-medium text-text">{data.dosage}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider font-bold">خوراک</p>
            <p className="font-serif rtl-text text-lg">{data.dosage_urdu}</p>
          </div>
        </div>

        {/* Frequency */}
        <div className="grid grid-cols-2 gap-4 items-center py-2 border-b border-gray-100">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider font-bold">Frequency</p>
            <p className="font-medium text-text">{data.frequency}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider font-bold">وقت</p>
            <p className="font-serif rtl-text text-lg">{data.frequency_urdu}</p>
          </div>
        </div>

        {/* Duration (Prescription only) */}
        {(data.duration || data.duration_urdu) && (
          <div className="grid grid-cols-2 gap-4 items-center py-2 border-b border-gray-100">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-bold">Duration</p>
              <p className="font-medium text-text">{data.duration}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted uppercase tracking-wider font-bold">مدت</p>
              <p className="font-serif rtl-text text-lg">{data.duration_urdu}</p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="grid grid-cols-2 gap-4 items-center py-2 border-b border-gray-100">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider font-bold">Instructions</p>
            <p className="font-medium text-text">{data.instructions}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider font-bold">ہدایت</p>
            <p className="font-serif rtl-text text-lg">{data.instructions_urdu}</p>
          </div>
        </div>

        {/* Warnings (Label only) */}
        {(data.warnings || data.warnings_urdu) && (
          <div className="grid grid-cols-2 gap-4 items-center py-2 bg-yellow-50 p-3 rounded-lg">
            <div>
              <p className="text-xs text-yellow-800 uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <span>⚠️</span> Warnings
              </p>
              <p className="font-medium text-yellow-900 text-sm">{data.warnings}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-yellow-800 uppercase tracking-wider font-bold mb-1 flex items-center justify-end gap-1">
                احتیاط <span>⚠️</span>
              </p>
              <p className="font-serif rtl-text text-lg text-yellow-900">{data.warnings_urdu}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
