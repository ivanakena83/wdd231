const courses = [
  { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: false },
  { code: "WDD 231", name: "Frontend Web Development I", credits: 3, completed: false }
];

const container = document.getElementById("courses");
const creditSpan = document.getElementById("totalCredits");
const buttons = document.querySelectorAll(".filters button");

function displayCourses(list) {
  container.innerHTML = "";
  let total = 0;

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = "course" + (course.completed ? " completed" : "");
    div.textContent = `${course.code} – ${course.name} (${course.credits} credits)`;
    container.appendChild(div);
    total += course.credits;
  });

  creditSpan.textContent = total;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    if (filter === "all") displayCourses(courses);
    else displayCourses(courses.filter(c => c.code.startsWith(filter.toUpperCase())));
  });
});

displayCourses(courses);
