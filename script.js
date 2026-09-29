// JavaScript statement
let message = "JavaScript is working correctly";
// Display result on webpage
document.getElementById("syntaxOutput").textContent =
    message;

var studentName = "Ali";
let semester = 5;
const university = "Air University";


// Display variables
document.getElementById("variableOutput").innerHTML =
    "Student Name: " + studentName +
    "<br>Semester: " + semester +
    "<br>University: " + university;

/* =========================================
   3. HOISTING
========================================= */

// var is hoisted
console.log(hoistedVariable);

var hoistedVariable = "var is hoisted";


/*
   let is also hoisted internally,
   but it cannot be accessed before
   its declaration.

   The following code would produce
   a ReferenceError:

   console.log(letVariable);
   let letVariable = 10;
*/


document.getElementById("hoistingOutput").innerHTML =
    "Using var: <strong>" +
    hoistedVariable +
    "</strong>" +
    "<br><br>" +
    "The declaration of var is hoisted, " +
    "so it can be referenced before its declaration." +
    "<br><br>" +
    "let and const cannot be accessed before " +
    "their declaration.";


/* =========================================
   4. JAVASCRIPT OBJECT
========================================= */

// Create a student object

let student = {
    name: "Ahmed",
    age: 21,
    semester: 5,
    cgpa: 3.45,
    program: "BS Computer Science"
};
// Access object properties
document.getElementById("objectOutput").innerHTML =
    "Name: " + student.name +
    "<br>Age: " + student.age +
    "<br>Semester: " + student.semester +
    "<br>CGPA: " + student.cgpa +
    "<br>Program: " + student.program;

/* =========================================
   5. OPERATORS
========================================= */

// Variables

let a = 10;
let b = 3;


// Arithmetic operators

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;


// Comparison operators

let greater = a > b;
let equal = a === b;


// Logical operators

let logicalAnd = (a > 5 && b < 5);
let logicalOr = (a > 20 || b < 5);


document.getElementById("operatorOutput").innerHTML =

    "<strong>Arithmetic Operators</strong>" +

    "<br>" +
    a + " + " + b + " = " + addition +

    "<br>" +
    a + " - " + b + " = " + subtraction +

    "<br>" +
    a + " × " + b + " = " + multiplication +

    "<br>" +
    a + " / " + b + " = " + division +

    "<br>" +
    a + " % " + b + " = " + remainder +

    "<br><br>" +

    "<strong>Comparison Operators</strong>" +

    "<br>" +
    a + " > " + b + " = " + greater +

    "<br>" +
    a + " === " + b + " = " + equal +

    "<br><br>" +

    "<strong>Logical Operators</strong>" +

    "<br>" +
    "(a > 5 && b < 5) = " + logicalAnd +

    "<br>" +
    "(a > 20 || b < 5) = " + logicalOr;


/* =========================================
   6. CONDITIONS
========================================= */

let marks = 78;

let grade;
let status;


// if / else if / else

if (marks >= 80) {

    grade = "A";

}
else if (marks >= 70) {

    grade = "B";

}
else if (marks >= 60) {

    grade = "C";

}
else if (marks >= 50) {

    grade = "D";

}
else {

    grade = "F";

}


// Determine pass/fail

if (marks >= 50) {

    status = "Passed";

}
else {

    status = "Failed";

}


// Display result

document.getElementById("conditionOutput").innerHTML =

    "Student Marks: " + marks +
    "<br>Grade: " + grade +
    "<br>Status: " + status;


/* =========================================
   7. COMBINED STUDENT RESULT
========================================= */

// Student object

let resultStudent = {

    name: "Sara",
    assignment: 18,
    midterm: 22,
    finalExam: 42

};


// Calculate total using arithmetic operator

let total =
    resultStudent.assignment +
    resultStudent.midterm +
    resultStudent.finalExam;


// Determine grade using conditions

let resultGrade;

if (total >= 80) {

    resultGrade = "A";

}
else if (total >= 70) {

    resultGrade = "B";

}
else if (total >= 60) {

    resultGrade = "C";

}
else if (total >= 50) {

    resultGrade = "D";

}
else {

    resultGrade = "F";

}


// Display complete result

document.getElementById("resultOutput").innerHTML =

    "Student: " + resultStudent.name +

    "<br>Assignment: " +
    resultStudent.assignment +

    "<br>Midterm: " +
    resultStudent.midterm +

    "<br>Final Exam: " +
    resultStudent.finalExam +

    "<br><strong>Total Marks: " +
    total +
    "</strong>" +

    "<br><strong>Grade: " +
    resultGrade +
    "</strong>";



/* =====================================================
   LAB 04
   1. ARRAYS
===================================================== */

let lab04Students = [
    "Ali",
    "Ahmed",
    "Sara",
    "Ayesha"
];

document.getElementById("arrayOutput").innerHTML =

    "Students: " +
    lab04Students.join(", ") +

    "<br><br>" +

    "First Student: " +
    lab04Students[0] +

    "<br>" +

    "Second Student: " +
    lab04Students[1] +

    "<br>" +

    "Total Students: " +
    lab04Students.length;




   /* =====================================================
   2. ARRAY METHODS
===================================================== */

let lab04Courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence"
];


// Add an item
lab04Courses.push("Computer Vision");


// Check whether an item exists
let lab04HasAI =
    lab04Courses.includes(
        "Artificial Intelligence"
    );


// Display result
document.getElementById(
    "arrayMethodsOutput"
).innerHTML =

    "Courses: " +
    lab04Courses.join(", ") +

    "<br><br>" +

    "Total Courses: " +
    lab04Courses.length +

    "<br><br>" +

    "Artificial Intelligence exists: " +
    lab04HasAI;

/* =====================================================
   3. FOR LOOP
===================================================== */

let lab04ForLoopResult = "";

for (
    let i = 0;
    i < lab04Students.length;
    i++
) {

    lab04ForLoopResult +=

        "Student " +
        (i + 1) +
        ": " +
        lab04Students[i] +
        "<br>";
}


document.getElementById(
    "forLoopOutput"
).innerHTML =
    lab04ForLoopResult;


/* =====================================================
   4. FOR...OF LOOP
===================================================== */

let lab04ForOfResult = "";

for (
    let lab04Student of lab04Students
) {

    lab04ForOfResult +=
        lab04Student +
        "<br>";
}


document.getElementById(
    "forOfOutput"
).innerHTML =
    lab04ForOfResult;



/* =====================================================
   5. FOR...IN LOOP
===================================================== */

let lab04StudentInfo = {

    name: "Ahmed",
    age: 21,
    department: "Computer Science",
    semester: 6

};


let lab04ForInResult = "";


for (
    let lab04Key in lab04StudentInfo
) {

    lab04ForInResult +=

        lab04Key +
        ": " +
        lab04StudentInfo[lab04Key] +
        "<br>";
}


document.getElementById(
    "forInOutput"
).innerHTML =
    lab04ForInResult;





/* =====================================================
   6. FOREACH
===================================================== */

let lab04ForEachResult = "";


lab04Students.forEach(
    function(student, index) {

        lab04ForEachResult +=

            (index + 1) +
            ". " +
            student +
            "<br>";

    }
);


document.getElementById(
    "forEachOutput"
).innerHTML =
    lab04ForEachResult;



/* =====================================================
   7. FUNCTIONS
===================================================== */

function lab04CalculateTotal(
    assignment,
    midterm,
    finalExam
) {

    let total =
        assignment +
        midterm +
        finalExam;

    return total;
}


let lab04StudentTotal =
    lab04CalculateTotal(
        18,
        22,
        42
    );


document.getElementById(
    "functionOutput"
).innerHTML =

    "Assignment Marks: 18" +

    "<br>" +

    "Midterm Marks: 22" +

    "<br>" +

    "Final Exam Marks: 42" +

    "<br><br>" +

    "<strong>Total Marks: " +
    lab04StudentTotal +
    "</strong>";



/* =====================================================
   8. ARROW FUNCTIONS
===================================================== */

const lab04CalculateAverage =
    (mark1, mark2, mark3) => {

        return (
            mark1 +
            mark2 +
            mark3
        ) / 3;

    };


let lab04Average =
    lab04CalculateAverage(
        18,
        22,
        42
    );


document.getElementById(
    "arrowOutput"
).innerHTML =

    "Marks: 18, 22, 42" +

    "<br>" +

    "Average: " +

    lab04Average.toFixed(2);




/* =====================================================
   9. ES6 CLASS
===================================================== */

class Lab04Student {

    constructor(
        name,
        semester,
        cgpa
    ) {

        this.name = name;
        this.semester = semester;
        this.cgpa = cgpa;

    }


    getStatus() {

        if (this.cgpa >= 2.0) {

            return "Active";

        }
        else {

            return "Academic Warning";

        }

    }

}


let lab04StudentRecord =
    new Lab04Student(
        "Ahmed",
        6,
        3.45
    );


document.getElementById(
    "classOutput"
).innerHTML =

    "Name: " +
    lab04StudentRecord.name +

    "<br>" +

    "Semester: " +
    lab04StudentRecord.semester +

    "<br>" +

    "CGPA: " +
    lab04StudentRecord.cgpa +

    "<br>" +

    "Status: " +
    lab04StudentRecord.getStatus();

/* =====================================================
   10. OBJECT DESTRUCTURING
===================================================== */

const lab04StudentData = {

    name: "Sara",
    semester: 6,
    cgpa: 3.75

};


const {
    name: lab04Name,
    semester: lab04Semester,
    cgpa: lab04CGPA
} = lab04StudentData;


document.getElementById(
    "destructuringOutput"
).innerHTML =

    "Name: " +
    lab04Name +

    "<br>" +

    "Semester: " +
    lab04Semester +

    "<br>" +

    "CGPA: " +
    lab04CGPA;




/* =====================================================
   11. TERNARY OPERATOR
===================================================== */

const lab04Marks = 78;


const lab04Status =
    lab04Marks >= 50
        ? "Passed"
        : "Failed";


document.getElementById(
    "ternaryOutput"
).innerHTML =

    "Marks: " +
    lab04Marks +

    "<br>" +

    "Status: " +
    lab04Status;



/* =====================================================
   12. MAP(), FILTER() AND FIND()
===================================================== */

const lab04MarksList = [
    45,
    55,
    72,
    81,
    38
];

const lab04UpdatedMarks =
    lab04MarksList.map(
        mark => mark + 5
    );

const lab04PassedMarks =
    lab04MarksList.filter(
        mark => mark >= 50
    );

const lab04FirstHighMark =
    lab04MarksList.find(
        mark => mark >= 70
    );


document.getElementById(
    "advancedArrayOutput"
).innerHTML =

    "Original Marks: " +
    lab04MarksList.join(", ") +

    "<br><br>" +

    "After map() (+5): " +
    lab04UpdatedMarks.join(", ") +

    "<br><br>" +

    "Passed Marks using filter(): " +
    lab04PassedMarks.join(", ") +

    "<br><br>" +

    "First Mark >= 70 using find(): " +
    lab04FirstHighMark;



/* =====================================================
   12. FINAL STUDENT PERFORMANCE DASHBOARD
===================================================== */

const lab04StudentRecords = [

    {
        name: "Ali",
        semester: 6,
        marks: 82
    },

    {
        name: "Ahmed",
        semester: 5,
        marks: 67
    },

    {
        name: "Sara",
        semester: 6,
        marks: 91
    },

    {
        name: "Ayesha",
        semester: 4,
        marks: 48
    }

];


/* =====================================================
   GRADE CALCULATION FUNCTION
===================================================== */

function lab04CalculateGrade(marks) {

    if (marks >= 80) {

        return "A";

    }
    else if (marks >= 70) {

        return "B";

    }
    else if (marks >= 60) {

        return "C";

    }
    else if (marks >= 50) {

        return "D";

    }
    else {

        return "F";

    }

}

/* =====================================================
   STATUS USING ARROW FUNCTION + TERNARY
===================================================== */

const lab04GetStatus =
    marks =>
        marks >= 50
            ? "Passed"
            : "Failed";





/* =====================================================
   CREATE DASHBOARD
===================================================== */

let lab04DashboardOutput = "";

lab04StudentRecords.forEach(
    student => {

        const {
            name: lab04Name,
            semester: lab04Semester,
            marks: lab04StudentMarks
        } = student;


        const lab04Grade =
            lab04CalculateGrade(
                lab04StudentMarks
            );


        const lab04StudentStatus =
            lab04GetStatus(
                lab04StudentMarks
            );


        lab04DashboardOutput +=

            "<div class='border rounded p-3 mb-3'>" +

                "<h5>" +
                    lab04Name +
                "</h5>" +

                "<p>" +

                    "<strong>Semester:</strong> " +
                    lab04Semester +

                    "<br>" +

                    "<strong>Marks:</strong> " +
                    lab04StudentMarks +

                    "<br>" +

                    "<strong>Grade:</strong> " +
                    lab04Grade +

                    "<br>" +

                    "<strong>Status:</strong> " +
                    lab04StudentStatus +

                "</p>" +

            "</div>";

    }
);



/* =====================================================
   DISPLAY DASHBOARD
===================================================== */

document.getElementById(
    "studentDashboardOutput"
).innerHTML =
    lab04DashboardOutput;


/* =====================================================
   ASSIGNMENT TASKS (1 - 4)
===================================================== */

// -----------------------------------------------------
// TASK 1: University Student Management System
// -----------------------------------------------------

// Create an array of 6 student objects
const task1Students = [
    { name: "Ali",    rollNumber: "BSCS-001", department: "Computer Science",      semester: 6, cgpa: 3.45 },
    { name: "Ahmed",  rollNumber: "BSCS-002", department: "Computer Science",      semester: 5, cgpa: 2.80 },
    { name: "Sara",   rollNumber: "BSCS-003", department: "Software Engineering",  semester: 4, cgpa: 2.10 },
    { name: "Ayesha", rollNumber: "BSCS-004", department: "Information Technology", semester: 2, cgpa: 1.80 },
    { name: "Usman",  rollNumber: "BSCS-005", department: "Computer Science",      semester: 8, cgpa: 3.90 },
    { name: "Fatima", rollNumber: "BSCS-006", department: "Software Engineering",  semester: 6, cgpa: 2.65 }
];

// Function: determine the student's academic status
function getTask1Status(cgpa) {
    if (cgpa >= 3.00) return "Excellent";
    if (cgpa >= 2.50) return "Good";
    if (cgpa >= 2.00) return "Satisfactory";
    return "Academic Warning";
}

// Arrow function + ternary operator: eligibility for next semester
const getTask1Eligibility =
    cgpa => cgpa >= 2.00 ? "Eligible" : "Not Eligible";

// Avatar gradient colors
const task1Gradients = [
    "linear-gradient(135deg, #4f46e5, #7c3aed)",
    "linear-gradient(135deg, #0284c7, #2563eb)",
    "linear-gradient(135deg, #047857, #10b981)",
    "linear-gradient(135deg, #b45309, #f59e0b)",
    "linear-gradient(135deg, #be185d, #f472b6)",
    "linear-gradient(135deg, #0d9488, #2dd4bf)"
];

const task1StatusPill = {
    "Excellent": "pill-green",
    "Good": "pill-blue",
    "Satisfactory": "pill-amber",
    "Academic Warning": "pill-red"
};

let task1HTML = "";

// Use forEach() to display all students
task1Students.forEach((student, index) => {
    // Object destructuring
    const { name, rollNumber, department, semester, cgpa } = student;

    const status = getTask1Status(cgpa);
    const eligibility = getTask1Eligibility(cgpa);

    task1HTML += `
        <div class="stu-card">
            <div class="stu-top">
                <div class="stu-avatar" style="background: ${task1Gradients[index % task1Gradients.length]}">
                    ${name.charAt(0)}
                </div>
                <div class="stu-name">
                    <h5>${name}</h5>
                    <span class="stu-roll">Roll No: ${rollNumber}</span>
                </div>
                <div class="cgpa-badge">${cgpa.toFixed(2)}</div>
            </div>
            <div class="stu-row"><span>Department</span><strong>${department}</strong></div>
            <div class="stu-row"><span>Semester</span><strong>${semester}</strong></div>
            <div class="stu-foot">
                <span class="pill ${task1StatusPill[status]}">Status: ${status}</span>
                <span class="pill ${eligibility === "Eligible" ? "pill-green-o" : "pill-red-o"}">Eligibility: ${eligibility}</span>
            </div>
        </div>
    `;
});

document.getElementById("task1Output").innerHTML = task1HTML;


// -----------------------------------------------------
// TASK 2: Online Course Registration System
// -----------------------------------------------------

// Store the courses in an array
let task2Courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering"
];

// Add a new course using push()
task2Courses.push("Data Structures");

// Remove the last course using pop()
const removedCourse = task2Courses.pop();

// Check whether "Artificial Intelligence" is available using includes()
const aiAvailable = task2Courses.includes("Artificial Intelligence");

// Function: calculate the total number of registered courses
function getTotalCourses(coursesArray) {
    return coursesArray.length;
}

// Arrow function + ternary operator: Full-Time / Part-Time student
const getStudentCourseStatus =
    total => total >= 4 ? "Full-Time" : "Part-Time";

// ---- Render: available courses using for...of ----
let task2CourseList = "";
let courseNumber = 1;
for (const course of task2Courses) {
    task2CourseList += `
        <div class="course-row">
            <span class="course-idx">${courseNumber}</span>
            ${course}
        </div>
    `;
    courseNumber++;
}

// ---- Render: array-method operations using forEach() ----
const task2Operations = [
    { icon: "&#10133;", code: "push('Data Structures')", text: "new course added" },
    { icon: "&#10134;", code: "pop()", text: `removed '${removedCourse}' from the end` },
    { icon: "&#128269;", code: "includes('Artificial Intelligence')", text: `result = ${aiAvailable}` }
];

let task2OpsHTML = "";
task2Operations.forEach(op => {
    task2OpsHTML += `
        <div class="op-row">
            <span class="op-icon">${op.icon}</span>
            <code>${op.code}</code>
            <span>${op.text}</span>
        </div>
    `;
});

const task2Total = getTotalCourses(task2Courses);
const task2Status = getStudentCourseStatus(task2Total);

document.getElementById("task2Output").innerHTML = `
    <h4 class="sub-heading">Available Courses</h4>
    ${task2CourseList}
    <h4 class="sub-heading">Array Methods Used</h4>
    ${task2OpsHTML}
    <div class="summary-panel">
        <div class="sum-line"><span>Total Registered Courses</span><strong>${task2Total}</strong></div>
        <div class="sum-line"><span>Artificial Intelligence Available</span><strong>${aiAvailable ? "Yes" : "No"}</strong></div>
        <div class="sum-line"><span>Student Status</span><strong><span class="pill pill-blue">${task2Status}</span></strong></div>
    </div>
`;


// -----------------------------------------------------
// TASK 3: Student Examination & Result Processing System
// -----------------------------------------------------

const task3Students = [
    { name: "Sara",   rollNumber: "BSCS-023", assignment: 18, midterm: 22, finalExam: 42 },
    { name: "Ali",    rollNumber: "BSCS-024", assignment: 15, midterm: 20, finalExam: 35 },
    { name: "Ahmed",  rollNumber: "BSCS-025", assignment: 10, midterm: 15, finalExam: 20 },
    { name: "Ayesha", rollNumber: "BSCS-026", assignment: 20, midterm: 25, finalExam: 45 },
    { name: "Usman",  rollNumber: "BSCS-027", assignment: 12, midterm: 18, finalExam: 30 }
];

// Calculate total marks using a function
function calculateTask3Total(assignment, midterm, finalExam) {
    return assignment + midterm + finalExam;
}

// Calculate the average using an arrow function
const calculateTask3Average = total => (total / 3).toFixed(2);

// Determine the grade using a function
function getTask3Grade(total) {
    if (total >= 80) return "A";
    if (total >= 70) return "B";
    if (total >= 60) return "C";
    if (total >= 50) return "D";
    return "F";
}

let task3Cards = "";

// Use forEach() to process every student
task3Students.forEach((student, index) => {
    // Use object destructuring to extract the student's marks
    const { name, rollNumber, assignment, midterm, finalExam } = student;

    const total = calculateTask3Total(assignment, midterm, finalExam);
    const avg = calculateTask3Average(total);
    const grade = getTask3Grade(total);

    // Determine Pass/Fail using the ternary operator
    const status = total >= 50 ? "Passed" : "Failed";
    const statusPill = status === "Passed" ? "pill-green" : "pill-red";

    task3Cards += `
        <div class="stu-card">
            <div class="stu-top">
                <div class="stu-avatar" style="background: ${task1Gradients[index % task1Gradients.length]}">
                    ${name.charAt(0)}
                </div>
                <div class="stu-name">
                    <h5>Student: ${name}</h5>
                    <span class="stu-roll">Roll No: ${rollNumber}</span>
                </div>
                <div class="grade-circle grade-${grade}">${grade}</div>
            </div>
            <div class="marks-line"><span>Assignment</span><strong>${assignment}</strong></div>
            <div class="marks-line"><span>Midterm</span><strong>${midterm}</strong></div>
            <div class="marks-line"><span>Final Exam</span><strong>${finalExam}</strong></div>
            <div class="marks-total">
                <span>Total: ${total} &nbsp;&middot;&nbsp; Average: ${avg}</span>
            </div>
            <div class="stu-foot">
                <span class="pill ${statusPill}">Status: ${status}</span>
            </div>
        </div>
    `;
});

// Additional Challenge: use a for loop to calculate passed / failed students
let task3Passed = 0;
let task3Failed = 0;
for (let i = 0; i < task3Students.length; i++) {
    const s = task3Students[i];
    const tot = calculateTask3Total(s.assignment, s.midterm, s.finalExam);
    if (tot >= 50) {
        task3Passed++;
    } else {
        task3Failed++;
    }
}

const task3Summary = `
    <div class="summary-panel">
        <div class="sum-line"><span>Total Students</span><strong>${task3Students.length}</strong></div>
        <div class="sum-line"><span>Passed Students</span><strong><span class="pill pill-green">${task3Passed}</span></strong></div>
        <div class="sum-line"><span>Failed Students</span><strong><span class="pill pill-red">${task3Failed}</span></strong></div>
    </div>
`;

document.getElementById("task3Output").innerHTML =
    `<div class="task-grid">${task3Cards}</div>` + task3Summary;


// -----------------------------------------------------
// TASK 4: University Student Performance Dashboard
// -----------------------------------------------------

// 1. ES6 Class
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
const task4Students = [
    new Student("Ali",    "BSCS-001", "Computer Science",     6, 3.45, 82),
    new Student("Ahmed",  "BSCS-002", "Computer Science",     5, 2.80, 67),
    new Student("Sara",   "BSCS-003", "Software Engineering", 4, 3.90, 91),
    new Student("Ayesha", "BSCS-004", "IT",                   2, 1.80, 48),
    new Student("Usman",  "BSCS-005", "Computer Science",     8, 3.10, 75),
    new Student("Fatima", "BSCS-006", "Software Engineering", 6, 2.50, 60)
];

// 2. Grade Calculation Function
function calculateTask4Grade(marks) {
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
}

// 3. Academic Status (arrow function + ternary operator)
const getTask4AcademicStatus =
    cgpa => cgpa >= 2.0 ? "Eligible" : "Academic Warning";

// 4. Object Information: use for...in to display the properties of one student object
let task4Inspector = "";
for (const prop in task4Students[0]) {
    task4Inspector += `
        <div class="insp-row">
            <span class="k">${prop}</span>
            <span class="v">${task4Students[0][prop]}</span>
        </div>
    `;
}

// 6. Course/Department Information: array methods push() and includes()
const departments = [];
for (const st of task4Students) {
    if (!departments.includes(st.department)) {
        departments.push(st.department);
    }
}

let deptChips = "";
departments.forEach(dept => {
    deptChips += `<span class="dept-chip">${dept}</span>`;
});

// Count passed / failed using a plain for loop
let task4Passed = 0;
let task4Failed = 0;
for (let i = 0; i < task4Students.length; i++) {
    if (task4Students[i].marks >= 50) {
        task4Passed++;
    } else {
        task4Failed++;
    }
}

// 5 & 7. Student List + Dashboard: use for...of to display all students as cards
let task4Cards = "";
let t4Index = 0;
for (const student of task4Students) {
    // Object destructuring
    const { name, rollNumber, department, semester, cgpa, marks } = student;

    const grade = calculateTask4Grade(marks);
    const status = getTask4AcademicStatus(cgpa);
    const statusPill = status === "Eligible" ? "pill-green-o" : "pill-red-o";

    task4Cards += `
        <div class="stu-card">
            <div class="stu-top">
                <div class="stu-avatar" style="background: ${task1Gradients[t4Index % task1Gradients.length]}">
                    ${name.charAt(0)}
                </div>
                <div class="stu-name">
                    <h5>Student: ${name}</h5>
                    <span class="stu-roll">Roll No: ${rollNumber}</span>
                </div>
                <div class="grade-circle grade-${grade}">${grade}</div>
            </div>
            <div class="stu-row"><span>Department</span><strong>${department}</strong></div>
            <div class="stu-row"><span>Semester</span><strong>${semester}</strong></div>
            <div class="stu-row"><span>CGPA</span><strong>${cgpa.toFixed(2)}</strong></div>
            <div class="stu-row"><span>Marks</span><strong>${marks}</strong></div>
            <div class="stu-foot">
                <span class="pill ${statusPill}">Status: ${status}</span>
            </div>
        </div>
    `;
    t4Index++;
}

document.getElementById("task4Output").innerHTML = `
    <div class="stat-tiles">
        <div class="stat-tile stat-total">
            <div class="num">${task4Students.length}</div>
            <div class="lbl">Total Students</div>
        </div>
        <div class="stat-tile stat-pass">
            <div class="num">${task4Passed}</div>
            <div class="lbl">Passed Students</div>
        </div>
        <div class="stat-tile stat-fail">
            <div class="num">${task4Failed}</div>
            <div class="lbl">Failed Students</div>
        </div>
    </div>
    <h4 class="sub-heading">Object Information — for...in on a Student object</h4>
    <div class="insp-box">
        <div class="insp-title">student = task4Students[0]</div>
        ${task4Inspector}
    </div>
    <h4 class="sub-heading">Departments — managed with push() and includes()</h4>
    <div class="chip-row">${deptChips}</div>
    <h4 class="sub-heading">Student Dashboard — for...of + destructuring</h4>
    <div class="task-grid">${task4Cards}</div>
`;
