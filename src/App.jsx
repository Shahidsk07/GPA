import React, { useState } from "react";

export default function App() {
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);
  const [cgpa, setCgpa] = useState(0);

  // Inputs for adding new subjects
  const [subjectGpa, setSubjectGpa] = useState("");
  const [subjectCredits, setSubjectCredits] = useState("");

  // Inputs for GPA improvement
  const [prevGpa, setPrevGpa] = useState("");
  const [newGpa, setNewGpa] = useState("");
  const [improvedCredits, setImprovedCredits] = useState("");

  // Inputs for adding SGPA (whole semester)
  const [semesterGpa, setSemesterGpa] = useState("");
  const [semesterCredits, setSemesterCredits] = useState("");

  // Add new subject GPA
  const handleAddSubject = () => {
    const gpa = parseFloat(subjectGpa);
    const credits = parseFloat(subjectCredits);

    if (isNaN(gpa) || isNaN(credits) || gpa < 0 || gpa > 4 || credits <= 0) {
      alert("Please enter valid GPA (0-4) and credits (>0).");
      return;
    }

    const newTotalGradePoints = totalGradePoints + gpa * credits;
    const newTotalCredits = totalCredits + credits;

    setTotalGradePoints(newTotalGradePoints);
    setTotalCredits(newTotalCredits);
    setCgpa(newTotalGradePoints / newTotalCredits);

    setSubjectGpa("");
    setSubjectCredits("");
  };

  // Apply GPA improvement
  const handleImproveGpa = () => {
    const oldGpa = parseFloat(prevGpa);
    const improvedGpa = parseFloat(newGpa);
    const credits = parseFloat(improvedCredits);

    if (
      isNaN(oldGpa) ||
      isNaN(improvedGpa) ||
      isNaN(credits) ||
      oldGpa < 0 ||
      improvedGpa < 0 ||
      improvedGpa > 4 ||
      credits <= 0
    ) {
      alert("Enter valid previous GPA, improved GPA (0-4), and credits (>0).");
      return;
    }

    // Remove old contribution and add new one
    const updatedGradePoints =
      totalGradePoints - oldGpa * credits + improvedGpa * credits;

    setTotalGradePoints(updatedGradePoints);
    setCgpa(updatedGradePoints / totalCredits);

    setPrevGpa("");
    setNewGpa("");
    setImprovedCredits("");
  };

  // Add SGPA (whole semester)
  const handleAddSemester = () => {
    const sgpa = parseFloat(semesterGpa);
    const credits = parseFloat(semesterCredits);

    if (isNaN(sgpa) || isNaN(credits) || sgpa < 0 || sgpa > 4 || credits <= 0) {
      alert("Please enter valid SGPA (0-4) and credits (>0).");
      return;
    }

    const newTotalGradePoints = totalGradePoints + sgpa * credits;
    const newTotalCredits = totalCredits + credits;

    setTotalGradePoints(newTotalGradePoints);
    setTotalCredits(newTotalCredits);
    setCgpa(newTotalGradePoints / newTotalCredits);

    setSemesterGpa("");
    setSemesterCredits("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          GPA & CGPA Calculator
        </h1>

        {/* Current Stats */}
        <div className="p-4 bg-gray-50 rounded-xl shadow">
          <p className="text-lg">
            <strong>Total Credits:</strong> {totalCredits}
          </p>
          <p className="text-lg">
            <strong>CGPA:</strong>{" "}
            {cgpa ? cgpa.toFixed(2) : "No GPA calculated yet"}
          </p>
        </div>

        {/* Add Subject GPA */}
        <div className="p-4 bg-gray-50 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">
            Add Subject GPA
          </h2>
          <input
            type="number"
            step="0.01"
            placeholder="Enter GPA (0-4)"
            value={subjectGpa}
            onChange={(e) => setSubjectGpa(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Enter Credit Hours"
            value={subjectCredits}
            onChange={(e) => setSubjectCredits(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddSubject}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Subject GPA
          </button>
        </div>

        {/* Add SGPA (Whole Semester) */}
        <div className="p-4 bg-green-50 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold text-green-700">
            Add Semester SGPA
          </h2>
          <input
            type="number"
            step="0.01"
            placeholder="Enter SGPA (0-4)"
            value={semesterGpa}
            onChange={(e) => setSemesterGpa(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Enter Total Semester Credits"
            value={semesterCredits}
            onChange={(e) => setSemesterCredits(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddSemester}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Semester SGPA
          </button>
        </div>

        {/* Improve GPA */}
        <div className="p-4 bg-yellow-50 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold text-yellow-700">
            GPA Improvement
          </h2>
          <input
            type="number"
            step="0.01"
            placeholder="Previous GPA"
            value={prevGpa}
            onChange={(e) => setPrevGpa(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            step="0.01"
            placeholder="Improved GPA"
            value={newGpa}
            onChange={(e) => setNewGpa(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Credit Hours"
            value={improvedCredits}
            onChange={(e) => setImprovedCredits(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleImproveGpa}
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          >
            Apply Improvement
          </button>
        </div>
      </div>
    </div>
  );
}
