// Task 4: University Student Performance Dashboard

// ES6 Class
class Student {
    constructor(name, rollNumber, department, semester, cgpa, marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.semester = semester;
        this.cgpa = cgpa;
        this.marks = marks;
    }
}

// Create 6 student objects using the class
let students = [
    new Student("Ali", "BSCS-001", "Computer Science", 6, 3.45, 82),
    new Student("Ahmed", "BSCS-002", "Computer Science", 5, 2.80, 67),
    new Student("Sara", "BSCS-003", "Software Engineering", 4, 3.90, 91),
    new Student("Ayesha", "BSCS-004", "IT", 2, 1.80, 48),
    new Student("Usman", "BSCS-005", "Computer Science", 8, 3.10, 75),
    new Student("Fatima", "BSCS-006", "Software Engineering", 6, 2.50, 60)
];

// Function to calculate grade
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Arrow function with ternary operator for academic status
const getStatus = (cgpa) => cgpa >= 2.0 ? "Eligible" : "Academic Warning";

// for...in: display properties of one student object
let info = "<h4>Student Object (using for...in)</h4><ul class='list-group mb-4'>";
for (let key in students[0]) {
    info += `<li class="list-group-item"><strong>${key}:</strong> ${students[0][key]}</li>`;
}
info += "</ul>";

// Array methods: collect unique departments using includes() and push()
let departments = [];
for (let s of students) {
    if (!departments.includes(s.department)) {
        departments.push(s.department);
    }
}
info += `<p><strong>Departments:</strong> ${departments.join(", ")}</p>`;

// forEach() to display all students as cards
let cards = "";

students.forEach(function(student) {
    // Object destructuring
    const { name, rollNumber, department, semester, cgpa, marks } = student;

    cards += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Student: ${name}</h5>
                    <p class="card-text">Roll No: ${rollNumber}</p>
                    <p class="card-text">Department: ${department}</p>
                    <p class="card-text">Semester: ${semester}</p>
                    <p class="card-text">CGPA: ${cgpa}</p>
                    <p class="card-text">Marks: ${marks}</p>
                    <p class="card-text">Grade: ${getGrade(marks)}</p>
                    <p class="card-text">Status: ${getStatus(cgpa)}</p>
                </div>
            </div>
        </div>
    `;
});

// for loop to count passed and failed students
let passed = 0;
let failed = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
        passed++;
    } else {
        failed++;
    }
}

// DOM manipulation: display everything on the page
document.getElementById("output").innerHTML = info +
    '<div class="row">' + cards + '</div>' +
    `<div class="alert alert-dark">
        <h4>Final Dashboard Statistics</h4>
        <p><strong>Total Students:</strong> ${students.length}</p>
        <p><strong>Passed Students:</strong> ${passed}</p>
        <p><strong>Failed Students:</strong> ${failed}</p>
    </div>`;
