const courses = [
  { code: "CSE 110", credits: 2, completed: true },
  { code: "WDD 130", credits: 3, completed: true },
  { code: "CSE 111", credits: 2, completed: false },
  { code: "WDD 131", credits: 3, completed: true },
  { code: "WDD 231", credits: 3, completed: false }
];

const list = document.getElementById("course-list");
const totalCredits = document.getElementById("credit-total");

function displayCourses(filtered) {
  list.innerHTML = "";
  filtered.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.code} (${course.credits} credits)`;
    if (course.completed) li.classList.add("completed");
    list.appendChild(li);
  });

  const credits = filtered.reduce((sum, c) => sum + c.credits, 0);
  totalCredits.textContent = credits;
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.filter;
    const filtered =
      type === "all"
        ? courses
        : courses.filter(c => c.code.toLowerCase().includes(type));
    displayCourses(filtered);
  });
});
