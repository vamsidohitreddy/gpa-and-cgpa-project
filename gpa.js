// Grade points mapping
const gradePoints = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0,
};

function createSubjectFields() {
    const numSubjects = document.getElementById("numSubjects").value;
    const form = document.getElementById("gpaForm");
    form.innerHTML = "";

    for (let i = 1; i <= numSubjects; i++) {
        form.innerHTML += `
            <div>
                <label>Subject ${i} Credits:</label>
                <input type="number" id="credits-${i}" min="1" step="0.5" required>
                <label>Grade:</label>
                <select id="grade-${i}" required>
                    <option value="" disabled selected>Select Grade</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
            </div>
        `;
    }
}

function calculateGPA() {
    const numSubjects = document.getElementById("numSubjects").value;
    let totalCredits = 0;
    let weightedSum = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const credits = parseFloat(document.getElementById(`credits-${i}`).value);
        const grade = document.getElementById(`grade-${i}`).value;

        if (!credits || !gradePoints[grade]) {
            document.getElementById("gpaResult").textContent = "Please fill in all fields correctly.";
            return;
        }

        totalCredits += credits;
        weightedSum += credits * gradePoints[grade];
    }

    const gpa = (weightedSum / totalCredits).toFixed(2);
    document.getElementById("gpaResult").textContent = `Your GPA is: ${gpa}`;
}
