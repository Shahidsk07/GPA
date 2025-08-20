# GPA & CGPA Calculator — Improvement Simulator

This project adds an improvement simulator: you can enter an improved GPA for any subject and instantly see how your overall CGPA changes (old vs new) and the gain.

## Features
- Improved GPA per subject (repeat/regrade scenario)
- Old CGPA vs New CGPA (shows exact gain)
- OCR import from grade-sheet images/PDFs (Tesseract.js)
- Multi-semester management
- Extra subject GPAs (merged)
- Direct CGPA input (merge previous CGPA + credits)
- CSV export & Print to PDF
- Profiles (save/load to localStorage)
- GPA trend chart (Recharts)
- Dark/Light theme

## Setup

```bash
unzip gpa-cgpa-improve.zip
cd gpa-cgpa-improve
npm install
npm run dev
```

Open the dev URL printed in your terminal (usually http://localhost:5173).
