# Lab 04 — Quiz Prep Guide

Covers the 4 assignment tasks. Your teacher will likely ask you to **explain the
concepts used in your code**, not just show the output. Learn the one-liners
below, then read the "Explain this code" snippets out loud.

---

## Task 1 — University Student Management System

**Q: What is an array of objects?**
An array that stores multiple objects, e.g. `[{ name: "Ali", cgpa: 3.45 }, ...]`.
Each student is one object; the array holds all of them.

**Q: What does `forEach()` do?**
Runs a callback function once for **every element** of the array.
Signature: `array.forEach((element, index) => { ... })`. It does not return a
new array (unlike `map()`), and you cannot `break` out of it.

**Q: What is object destructuring?**
A shortcut to pull properties out of an object into variables:
```js
const { name, rollNumber, cgpa } = student;
// same as: const name = student.name; const cgpa = student.cgpa;
```

**Q: Function declaration vs arrow function?**
```js
function getTask1Status(cgpa) { ... }        // declaration (hoisted)
const getTask1Eligibility = cgpa => cgpa >= 2.00 ? "Eligible" : "Not Eligible"; // arrow
```
Arrows are shorter; with one parameter the `()` can be dropped, and with a
single expression the `return` and `{}` can be dropped.

**Q: What is the ternary operator?**
A one-line if/else: `condition ? valueIfTrue : valueIfFalse`.
Example: `cgpa >= 2.00 ? "Eligible" : "Not Eligible"`.

**Q: What are template literals?**
Strings in backticks `` ` `` that allow `${variable}` interpolation and
multi-line HTML, used to build each student card.

**Q: Explain the status logic.**
`>= 3.00 → Excellent`, `>= 2.50 → Good`, `>= 2.00 → Satisfactory`,
`< 2.00 → Academic Warning`. Order matters: check from highest to lowest.

---

## Task 2 — Online Course Registration System

**Q: What do `push()`, `pop()`, `includes()` do?**
- `push(x)` — adds `x` to the **end** of the array, returns the new length.
- `pop()` — removes the **last** element, returns the removed element.
- `includes(x)` — returns `true`/`false` depending on whether `x` exists.

**Q: `for...of` vs `forEach()` — both are used, why?**
- `for...of` loops directly over **values**: `for (const course of task2Courses)`.
- `forEach()` calls a **function** per element: `task2Courses.forEach(c => ...)`.
The assignment required both, so the course list uses `for...of` and the
operations log uses `forEach()`.

**Q: What is a "Full-Time" student here?**
An arrow function with a ternary: `total => total >= 4 ? "Full-Time" : "Part-Time"`.
With 5 registered courses the result is "Full-Time".

**Q: Trace the array through the program.**
Start: 5 courses → `push("Data Structures")` makes 6 → `pop()` removes it,
back to 5. `includes("Artificial Intelligence")` → `true`. Final total = 5.

---

## Task 3 — Student Examination & Result Processing

**Q: How are total and average calculated?**
- Total: a normal function `calculateTask3Total(a, m, f) { return a + m + f; }`
- Average: an arrow function `(total) => (total / 3).toFixed(2)` — `toFixed(2)`
  rounds to 2 decimal places and returns a **string**.

**Q: Grade boundaries?**
`>= 80 → A`, `>= 70 → B`, `>= 60 → C`, `>= 50 → D`, else `F`.
Example: Sara = 18 + 22 + 42 = 82 → grade A, average 27.33.

**Q: How is Pass/Fail decided?**
Ternary: `total >= 50 ? "Passed" : "Failed"`.

**Q: Why is there also a plain `for` loop?**
The "additional challenge": count passed/failed students with an indexed loop:
```js
for (let i = 0; i < task3Students.length; i++) {
    const tot = calculateTask3Total(...);
    if (tot >= 50) task3Passed++; else task3Failed++;
}
```
Result: Total 5, Passed 4, Failed 1.

---

## Task 4 — Student Performance Dashboard

**Q: What is an ES6 class?**
A blueprint for creating objects:
```js
class Student {
    constructor(name, rollNumber, department, semester, cgpa, marks) {
        this.name = name;   // `this` = the new object being built
        ...
    }
}
const s1 = new Student("Ali", "BSCS-001", "Computer Science", 6, 3.45, 82);
```
`new` creates the object and runs `constructor`.

**Q: `for...in` vs `for...of`?**
- `for...in` iterates over **property names (keys)** of an object:
  `for (const prop in student) { student[prop] }` — used for the object inspector.
- `for...of` iterates over **values** of an iterable (like an array):
  `for (const student of task4Students)` — used to render the dashboard cards.
Mnemonic: **in** = **in**dex/key, **of** = value.

**Q: How are departments managed with array methods?**
```js
if (!departments.includes(st.department)) departments.push(st.department);
```
`includes` avoids duplicates, `push` adds only new departments.

**Q: What does the dashboard show?**
Six student cards (from the `Student` class), each with grade (from marks) and
status (`cgpa >= 2.0 ? "Eligible" : "Academic Warning"` via arrow + ternary),
plus stat tiles: Total 6, Passed 5, Failed 1 (counted with a `for` loop).

**Q: What is DOM manipulation?**
Changing the page from JavaScript: `document.getElementById("task4Output")`
finds the element, and setting its `.innerHTML` injects the generated cards.

---

## Rapid-fire one-liners (memorize these)

| Concept | One line |
|---|---|
| `forEach()` | runs a function for each array element, returns nothing |
| `for...of` | loops over array **values** |
| `for...in` | loops over object **keys** |
| `push` / `pop` | add to / remove from the **end** of an array |
| `includes` | checks existence, returns boolean |
| destructuring | `const {a, b} = obj` unpacks properties |
| arrow function | short syntax, `x => x * 2` |
| ternary | `cond ? a : b`, one-line if/else |
| class | blueprint; `constructor` + `new` make objects |
| `innerHTML` | replaces an element's HTML content |
| `toFixed(2)` | rounds a number to 2 decimals (returns string) |

Good luck — you've got this.
