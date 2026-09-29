# Full Stack Lab 04 — JavaScript Advanced Concepts

A university lab project demonstrating **arrays, loops, functions, and ES6 features** in JavaScript, with four assignment tasks rendered as a modern dashboard UI.

## Tech Stack

- HTML5
- CSS3 (custom design system in `tasks.css`)
- Bootstrap 5.3 (CDN)
- Vanilla JavaScript (ES6+)

## Assignment Tasks

### Task 1 — University Student Management System
Manages 6 student records (name, roll number, department, semester, CGPA).
Uses an array of objects, `forEach()`, object destructuring, a status function
(Excellent / Good / Satisfactory / Academic Warning), and an arrow function with
a ternary operator for semester eligibility. Rendered as Bootstrap-style student
cards with avatars, CGPA badges, and color-coded status pills.

### Task 2 — Online Course Registration System
Course list managed with `push()`, `pop()`, and `includes()`. Courses displayed
with `for...of`; the array-method operations log uses `forEach()`. A function
counts total courses, and an arrow function + ternary decides Full-Time vs
Part-Time status. Final output: 5 courses, AI available, Full-Time.

### Task 3 — Student Examination & Result Processing System
Processes 5 students' assignment, midterm, and final exam marks. Total via a
function, average via an arrow function (`toFixed(2)`), grades A–F via a
function, Pass/Fail via ternary, all processed with `forEach()` and object
destructuring. A plain `for` loop counts passed (4) vs failed (1) students.

### Task 4 — University Student Performance Dashboard
Six student records created from an ES6 `Student` class. Demonstrates every
required concept: arrays, objects, array methods (`includes`/`push`), `for`
loop, `for...of`, `for...in` (object inspector), `forEach()`, functions, arrow
functions, destructuring, ternary operators, and DOM manipulation. Dashboard
shows stat tiles (Total 6 / Passed 5 / Failed 1), department chips, and
student cards with grades and eligibility status.

## Project Structure

```
full-stack-lab-04/
├── index.html      # Page structure (Lab 02 CSS demos + Lab 04 tasks)
├── style.css       # Base styling (Lab 02: flexbox, positioning, effects)
├── tasks.css       # Lab 04 tasks design system (cards, pills, dashboard)
├── script.js       # All JavaScript (Lab 02 demos + Lab 04 tasks 1–4)
├── QUIZ_PREP.md    # Quiz study guide covering every concept used
└── README.md
```

## How to Run

No build step needed — just open `index.html` in a browser (internet required
for the Bootstrap CDN).

## Author

Hussnain Ahmad — BSCS, Air University, Islamabad
