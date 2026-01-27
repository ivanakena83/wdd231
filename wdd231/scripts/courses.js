// course.js - dynamic course cards
document.addEventListener('DOMContentLoaded', () => {

    const courses = [
        // WDD Courses
        { name: "WDD 130 - Introduction to Web Development", credits: 3, completed: true, category: "WDD" },
        { name: "WDD 131 - HTML & CSS", credits: 3, completed: true, category: "WDD" },
        { name: "WDD 231 - Advanced Web Development", credits: 3, completed: false, category: "WDD" },

        // CSE Courses
        { name: "CSE 110 - Introduction to Computer Science", credits: 4, completed: true, category: "CSE" },
        { name: "CSE 210 - Data Structures & Algorithms", credits: 4, completed: false, category: "CSE" },
        { name: "CSE 231 - Software Development Principles", credits: 3, completed: false, category: "CSE" },
    ];

    const courseCards = document.getElementById('course-cards');
    const totalCredits = document.getElementById('total-credits');

    function displayCourses(filter = "All") {
        courseCards.innerHTML = '';
        let filtered = courses;
        if (filter !== "All") {
            filtered = courses.filter(c => c.category === filter);
        }

        // Calculate total credits
        const total = filtered.reduce((sum, course) => sum + course.credits, 0);
        totalCredits.textContent = total;

        // Generate course cards
        filtered.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('course-card');
            card.textContent = `${course.name} (${course.credits} credits)`;

            if (course.completed) {
                card.style.backgroundColor = "#d4edda"; // green
                card.style.border = "1px solid #28a745";
            } else {
                card.style.backgroundColor = "#f8d7da"; // red
                card.style.border = "1px solid #dc3545";
            }

            courseCards.appendChild(card);
        });
    }

    document.getElementById('allBtn').addEventListener('click', () => displayCourses("All"));
    document.getElementById('wddBtn').addEventListener('click', () => displayCourses("WDD"));
    document.getElementById('cseBtn').addEventListener('click', () => displayCourses("CSE"));

    // Initial load
    displayCourses();
});
