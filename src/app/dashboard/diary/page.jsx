'use client';
import { useState } from 'react';

export default function DiaryPage() {
  const [isListening, setIsListening] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const [formData, setFormData] = useState({
    pain_level: 5,
    sleep_hours: 7,
    mood: 'okay',
    notes: '',
    notes_urdu: ''
  });

  const [saved, setSaved] = useState(false);

  const handleMicClick = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      // Simulate listening and extracting
      setTimeout(() => {
        setIsListening(false);
        setTranscript("میرا سر درد ہے، درد 7 ہے (My head hurts, pain is 7)");
        setIsExtracting(true);
        
        setTimeout(() => {
          setIsExtracting(false);
          setFormData({
            pain_level: 7,
            sleep_hours: 5,
            mood: 'okay',
            notes: "Headache and mild fever",
            notes_urdu: "سر درد اور ہلکا بخار"
          });
        }, 2000);
      }, 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text mb-2">Log Today's Symptoms</h1>
        <p className="text-muted">Speak in English or Urdu to auto-fill the form.</p>
      </div>

      {/* Voice Input Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
        <button 
          onClick={handleMicClick}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-lg transition-all ${
            isListening 
              ? 'bg-red-500 text-white animate-pulse scale-110' 
              : 'bg-primary text-white hover:bg-blue-700'
          }`}
        >
          🎤
        </button>
        
        <p className="mt-4 text-sm font-medium text-gray-500">
          {isListening ? 'Listening... Tap to stop' : 'Tap to start speaking'}
        </p>

        {transcript && (
          <div className="mt-6 w-full text-left bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Transcript</p>
            <p className="italic text-gray-700 font-serif rtl-text text-lg">{transcript}</p>
          </div>
        )}

        {isExtracting && (
          <div className="mt-4 flex items-center gap-2 text-primary font-medium">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            AI is extracting symptoms...
          </div>
        )}
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-bold text-text">Pain Level: {formData.pain_level}/10</label>
            <span className="text-muted text-sm">0 = No Pain, 10 = Worst</span>
          </div>
          <input 
            type="range" 
            min="1" max="10" 
            value={formData.pain_level}
            onChange={(e) => setFormData({...formData, pain_level: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold text-text mb-2">Sleep Hours Last Night</label>
            <input 
              type="number" 
              value={formData.sleep_hours}
              onChange={(e) => setFormData({...formData, sleep_hours: parseInt(e.target.value)})}
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
            />
          </div>

          <div>
            <label className="block font-bold text-text mb-2">How are you feeling?</label>
            <div className="flex justify-between gap-2">
              {[
                { val: 'happy', emoji: '😊', bg: 'bg-green-100 border-green-500 text-green-700' },
                { val: 'okay', emoji: '😐', bg: 'bg-yellow-100 border-yellow-500 text-yellow-700' },
                { val: 'sad', emoji: '😢', bg: 'bg-red-100 border-red-500 text-red-700' }
              ].map(m => (
                <button
                  key={m.val}
                  type="button"
                  onClick={() => setFormData({...formData, mood: m.val})}
                  className={`flex-1 py-2 text-2xl rounded-lg border-2 transition ${
                    formData.mood === m.val ? m.bg : 'border-transparent bg-gray-100 grayscale hover:grayscale-0'
                  }`}
                >
                  {m.emoji}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div>
            <label className="block font-bold text-text mb-2">Notes (English)</label>
            <textarea 
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full rounded-lg border p-3 h-24 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
              placeholder="Any additional symptoms or notes..."
            ></textarea>
          </div>

          <div>
            <label className="block font-bold text-text mb-2 text-right">نوٹس (Urdu)</label>
            <textarea 
              value={formData.notes_urdu}
              onChange={(e) => setFormData({...formData, notes_urdu: e.target.value})}
              className="w-full rounded-lg border p-3 h-24 focus:outline-none focus:ring-2 focus:ring-primary font-serif rtl-text text-lg bg-gray-50"
              placeholder="کوئی اور علامات..."
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
        >
          Save Entry
        </button>

        {saved && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-medium animate-in fade-in zoom-in duration-300">
            ✅ Symptoms logged successfully!
          </div>
        )}
      </form>
    </div>
  );
}
