// Task 1: University Student Management System

// Array of student objects
let students = [
    { name: "Ali", rollNumber: "BSCS-001", department: "Computer Science", semester: 6, cgpa: 3.45 },
    { name: "Ahmed", rollNumber: "BSCS-002", department: "Computer Science", semester: 5, cgpa: 2.80 },
    { name: "Sara", rollNumber: "BSCS-003", department: "Software Engineering", semester: 4, cgpa: 2.10 },
    { name: "Ayesha", rollNumber: "BSCS-004", department: "Information Technology", semester: 2, cgpa: 1.80 },
    { name: "Usman", rollNumber: "BSCS-005", department: "Computer Science", semester: 8, cgpa: 3.90 },
    { name: "Fatima", rollNumber: "BSCS-006", department: "Software Engineering", semester: 6, cgpa: 2.65 }
];

// Function to determine academic status
function getStatus(cgpa) {
    if (cgpa >= 3.00) {
        return "Excellent";
    } else if (cgpa >= 2.50) {
        return "Good";
    } else if (cgpa >= 2.00) {
        return "Satisfactory";
    } else {
        return "Academic Warning";
    }
}

// Arrow function with ternary operator for semester eligibility
const isEligible = (cgpa) => cgpa >= 2.00 ? "Eligible" : "Not Eligible";

// Display all students using forEach()
let output = "";

students.forEach(function(student) {
    // Object destructuring
    const { name, rollNumber, department, semester, cgpa } = student;

    output += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Roll No: ${rollNumber}</p>
                    <p class="card-text">Department: ${department}</p>
                    <p class="card-text">Semester: ${semester}</p>
                    <p class="card-text">CGPA: ${cgpa}</p>
                    <p class="card-text">Status: ${getStatus(cgpa)}</p>
                    <p class="card-text">Eligibility: ${isEligible(cgpa)}</p>
                </div>
            </div>
        </div>
    `;
});

document.getElementById("output").innerHTML = '<div class="row">' + output + '</div>';
