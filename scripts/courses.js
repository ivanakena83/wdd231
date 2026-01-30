const courses = [
  // CSE Courses
  { id: 1, title: "CSE110 - Introduction to Programming", type: "cse", credits: 3, completed: true },
  { id: 2, title: "CSE210 - Programming with Functions", type: "cse", credits: 3, completed: true },
  { id: 3, title: "CSE212 - Programming with Data Structures", type: "cse", credits: 4, completed: true },
  
  // WDD Courses
  { id: 4, title: "WDD130 - Web Fundamentals", type: "wdd", credits: 3, completed: true },
  { id: 5, title: "WDD131 - Dynamic Web Development", type: "wdd", credits: 3, completed: true },
  { id: 6, title: "WDD231 - Front-End Web Development", type: "wdd", credits: 4, completed: true },
];

const coursesContainer = document.getElementById('courses');
const creditsEl = document.getElementById('credits');
const filterBtns = document.querySelectorAll('.filters button');

function displayCourses(filter = 'all') {
  let filtered = courses;
  if (filter !== 'all') {
    filtered = courses.filter(c => c.type === filter);
  }

  coursesContainer.innerHTML = '';
  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = `course-card ${c.completed ? 'completed' : ''}`;
    card.innerHTML = `<h3>${c.title}</h3>
                      <p>Type: ${c.type.toUpperCase()}</p>
                      <p>Credits: ${c.credits}</p>
                      <p>Status: ${c.completed ? 'Completed' : 'Incomplete'}</p>`;
    coursesContainer.appendChild(card);
  });

  const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
  creditsEl.textContent = `Total Credits: ${totalCredits}`;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => displayCourses(btn.dataset.filter));
});

displayCourses();
