# MediSnap 💊
### Snap. Understand. Stay Safe.
### اپنی دوائی کو سمجھیں

![MediSnap Banner](https://img.shields.io/badge/MediSnap-Healthcare%20AI-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Claude AI](https://img.shields.io/badge/Claude-AI-orange?style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

## 🇵🇰 The Problem

In Pakistan, **60%+ of the population cannot read English**. Yet every medicine label, every doctor prescription, and every medical instruction is written in English. This leads to:

- 💊 **Wrong dosages** taken by patients who cannot read instructions
- 📝 **Unreadable prescriptions** with medical abbreviations no one understands
- ⚠️ **Dangerous drug combinations** that go undetected
- 🏥 **7,000+ prescription errors** annually in Pakistan
- 👴 **Elderly patients** alone at home with no one to help them understand their medicines

**MediSnap solves all of this in 5 seconds.**

---

## ✨ What is MediSnap?

MediSnap is an AI-powered healthcare web application that:

- 📸 **Snaps medicine labels** and instantly translates them to Urdu
- 📋 **Reads doctor prescriptions** — even handwritten ones
- 🎤 **Records symptoms by voice** in English or Urdu
- 📊 **Tracks health trends** with visual calendars and charts
- 📄 **Generates doctor reports** as downloadable PDFs

---

## 🎯 Features

### 💊 Medicine Label Scanner
- Open camera or upload image of medicine box/bottle
- Claude AI reads the label and extracts all information
- Instant bilingual output (English + Urdu)
- Red warning banner for high-risk medications
- Food and drug interaction warnings
- Save scan to personal history

### 📋 Prescription Scanner
- Upload photo of doctor prescription (handwritten or printed)
- AI decodes medical abbreviations automatically:
  - `TDS` → دن میں تین بار (3 times daily)
  - `BD` → دن میں دو بار (twice daily)
  - `PC` → کھانے کے بعد (after food)
  - `AC` → کھانے سے پہلے (before food)
- Lists all medicines with complete Urdu translations
- Detects dangerous drug interactions

### 🎤 Voice Symptom Diary
- Speak symptoms in English OR Urdu
- Web Speech API converts voice to text instantly
- Claude AI extracts structured health data automatically:
  - Pain level (1-10)
  - Sleep hours
  - Mood tracking
  - Notes in English and Urdu
- Form auto-fills from voice — zero typing needed
- Color-coded health calendar (Green / Yellow / Red)
- Symptom trend charts powered by Chart.js

### 📄 Doctor Report PDF
- One-click professional PDF generation
- Includes complete medicine history with dates
- Symptom summary and trend analysis
- Pain level charts
- Best and worst health days
- Share directly with your doctor

### 🔍 Drug Interaction Checker
- Select any two medicines from history
- AI checks for dangerous combinations
- Clear warning in English and Urdu
- Explanation of why medicines interact

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| AI Brain | Claude API (Anthropic) |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Charts | Chart.js |
| PDF Export | jsPDF |
| Camera | react-webcam |
| Voice Input | Web Speech API (Browser built-in) |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (free)
- Anthropic Claude API key (free trial)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/medisnap.git

# Navigate to project
cd medisnap

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
ANTHROPIC_API_KEY=your_claude_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

Run this SQL in your Supabase SQL editor:

```sql
-- Medicine scans table
CREATE TABLE scans (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid references auth.users,
  medicine_name text,
  medicine_name_urdu text,
  dosage text,
  dosage_urdu text,
  frequency text,
  frequency_urdu text,
  warnings text,
  warnings_urdu text,
  is_dangerous boolean,
  created_at timestamp DEFAULT now()
);

-- Symptom diary table
CREATE TABLE symptoms (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid references auth.users,
  pain_level int,
  sleep_hours int,
  mood text,
  notes text,
  notes_urdu text,
  created_at timestamp DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE symptoms ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access own scans"
ON scans FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only access own symptoms"
ON symptoms FOR ALL USING (auth.uid() = user_id);
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
medisnap/
│
├── app/
│   ├── (auth)/
│   │   ├── login/page.jsx
│   │   └── signup/page.jsx
│   │
│   ├── (dashboard)/
│   │   ├── layout.jsx
│   │   ├── scanner/page.jsx
│   │   ├── prescription/page.jsx
│   │   ├── diary/page.jsx
│   │   ├── history/page.jsx
│   │   └── report/page.jsx
│   │
│   ├── api/
│   │   ├── scan/route.js
│   │   ├── prescription/route.js
│   │   ├── extract-symptoms/route.js
│   │   └── interaction/route.js
│   │
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
│
├── components/
│   ├── auth/
│   ├── scanner/
│   ├── diary/
│   ├── report/
│   └── shared/
│
├── lib/
│   ├── supabase.js
│   ├── claude.js
│   └── pdf.js
│
├── hooks/
├── utils/
└── public/
```

---

## 🔌 API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/scan` | POST | Scan medicine label with Claude AI |
| `/api/prescription` | POST | Read doctor prescription |
| `/api/extract-symptoms` | POST | Extract symptoms from voice transcript |
| `/api/interaction` | POST | Check drug interactions |

---

## 📊 How It Works

```
User Opens MediSnap
        ↓
Login / Signup (Supabase Auth)
        ↓
        ┌─────────────────────────────┐
        │                             │
        ▼           ▼           ▼     ▼
   Scan Label   Scan Rx    Log Sx   History
        │           │           │
        ▼           ▼           ▼
   Claude AI   Claude AI   Voice API
   reads img   reads img   → text
        │           │           │
        ▼           ▼           ▼
   Urdu Card  Urdu List  Claude AI
                        extracts data
        │           │           │
        └───────────┴───────────┘
                    │
                    ▼
             Save to Supabase
                    │
                    ▼
          Calendar + Charts + PDF ✅
```

---

## 🌍 Why MediSnap Matters

| Statistic | Impact |
|---|---|
| 220M+ population in Pakistan | Massive scale |
| 60%+ cannot read English | Core problem |
| 7,000+ prescription errors/year | Life or death |
| 70% rural areas lack pharmacists | No alternative |
| Zero similar apps in Pakistan | Unique solution |

---

## 🔮 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Wearable device integration
- [ ] Doctor dashboard portal
- [ ] WhatsApp bot integration
- [ ] Support for Sindhi and Punjabi
- [ ] Offline mode support
- [ ] Medicine reminder notifications
- [ ] Integration with pharmacy systems
- [ ] Telemedicine consultation feature

---

## 🏆 Hackathon

This project was built for a **6-hour hackathon** to solve the real healthcare communication problem in Pakistan.

**Built with:**
- 6 hours of focused development
- Vibe coding with AI assistance
- Real passion for solving Pakistan's healthcare problem

---



<div align="center">

**Built with ❤️ for Pakistan 🇵🇰**

*"Every Pakistani deserves to understand their medicine"*

</div>
