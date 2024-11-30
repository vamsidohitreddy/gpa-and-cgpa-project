function createSemesterFields() {
    const numSemesters = document.getElementById("numSemesters").value;
    const form = document.getElementById("cgpaForm");
    form.innerHTML = "";

    for (let i = 1; i <= numSemesters; i++) {
        form.innerHTML += `
            <div>
                <label>Semester ${i} Credits:</label>
                <input type="number" id="credits-${i}" min="1" step="0.5" required>
                <label>GPA:</label>
                <input type="number" id="gpa-${i}" min="0" max="10" step="0.01" required>
            </div>
        `;
    }
}

function calculateCGPA() {
    const numSemesters = document.getElementById("numSemesters").value;
    let totalCredits = 0;
    let weightedSum = 0;

    for (let i = 1; i <= numSemesters; i++) {
        const credits = parseFloat(document.getElementById(`credits-${i}`).value);
        const gpa = parseFloat(document.getElementById(`gpa-${i}`).value);

        if (!credits || gpa < 0 || gpa > 10) {
            document.getElementById("cgpaResult").textContent = "Please fill in all fields correctly.";
            return;
        }

        totalCredits += credits;
        weightedSum += credits * gpa;
    }

    const cgpa = (weightedSum / totalCredits).toFixed(2);
    document.getElementById("cgpaResult").textContent = `Your CGPA is: ${cgpa}`;
}
