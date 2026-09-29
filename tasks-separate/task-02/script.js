// Task 2: Online Course Registration System

// Store courses in an array
let courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering"
];

// Add a new course using push()
courses.push("Data Structures");

// Remove the last course using pop()
courses.pop();

// Check if "Artificial Intelligence" is available using includes()
let aiAvailable = courses.includes("Artificial Intelligence");

// Function to calculate total number of registered courses
function totalCourses() {
    return courses.length;
}

// Arrow function with ternary operator for Full-Time / Part-Time
const checkStatus = (total) => total >= 4 ? "Full-Time" : "Part-Time";

// Display all courses using for...of loop
let courseList = "";
for (let course of courses) {
    courseList += `<li class="list-group-item">${course}</li>`;
}

// Using forEach() to build a comma-separated list of courses
let allCourses = "";
courses.forEach(function(course, index) {
    allCourses += course;
    if (index < courses.length - 1) {
        allCourses += ", ";
    }
});

let total = totalCourses();

document.getElementById("output").innerHTML = `
    <h4>Available Courses</h4>
    <ol class="list-group list-group-numbered mb-3">
        ${courseList}
    </ol>
    <p><strong>All Courses:</strong> ${allCourses}</p>
    <p><strong>Total Registered Courses:</strong> ${total}</p>
    <p><strong>Artificial Intelligence Available:</strong> ${aiAvailable ? "Yes" : "No"}</p>
    <p><strong>Student Status:</strong> ${checkStatus(total)}</p>
`;
