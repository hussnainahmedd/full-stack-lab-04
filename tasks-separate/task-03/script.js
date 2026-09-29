// Task 3: Student Examination and Result Processing System

// Array of student objects
let students = [
    { name: "Sara", rollNumber: "BSCS-023", assignment: 18, midterm: 22, finalExam: 42 },
    { name: "Ali", rollNumber: "BSCS-024", assignment: 15, midterm: 20, finalExam: 35 },
    { name: "Ahmed", rollNumber: "BSCS-025", assignment: 10, midterm: 15, finalExam: 20 },
    { name: "Ayesha", rollNumber: "BSCS-026", assignment: 20, midterm: 25, finalExam: 45 },
    { name: "Usman", rollNumber: "BSCS-027", assignment: 12, midterm: 18, finalExam: 30 }
];

// Calculate total marks using a function
function calculateTotal(assignment, midterm, finalExam) {
    return assignment + midterm + finalExam;
}

// Calculate average using an arrow function
const calculateAverage = (total) => (total / 3).toFixed(2);

// Determine grade using a function
function getGrade(total) {
    if (total >= 80) {
        return "A";
    } else if (total >= 70) {
        return "B";
    } else if (total >= 60) {
        return "C";
    } else if (total >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Process every student using forEach()
let output = "";

students.forEach(function(student) {
    // Object destructuring
    const { name, rollNumber, assignment, midterm, finalExam } = student;

    let total = calculateTotal(assignment, midterm, finalExam);
    let average = calculateAverage(total);
    let grade = getGrade(total);

    // Pass/Fail using ternary operator
    let status = total >= 50 ? "Passed" : "Failed";

    output += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Student: ${name}</h5>
                    <p class="card-text">Roll No: ${rollNumber}</p>
                    <p class="card-text">Assignment: ${assignment}</p>
                    <p class="card-text">Midterm: ${midterm}</p>
                    <p class="card-text">Final Exam: ${finalExam}</p>
                    <p class="card-text"><strong>Total: ${total}</strong></p>
                    <p class="card-text">Average: ${average}</p>
                    <p class="card-text">Grade: ${grade}</p>
                    <p class="card-text">Status: ${status}</p>
                </div>
            </div>
        </div>
    `;
});

// Additional challenge: count passed/failed students using a for loop
let passed = 0;
let failed = 0;

for (let i = 0; i < students.length; i++) {
    let t = calculateTotal(students[i].assignment, students[i].midterm, students[i].finalExam);
    if (t >= 50) {
        passed++;
    } else {
        failed++;
    }
}

output += `
    <div class="col-12">
        <div class="alert alert-info">
            <strong>Total Students:</strong> ${students.length} |
            <strong>Passed Students:</strong> ${passed} |
            <strong>Failed Students:</strong> ${failed}
        </div>
    </div>
`;

document.getElementById("output").innerHTML = '<div class="row">' + output + '</div>';
