// Modal functionality
document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.closest('.card').dataset.modal;
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.modal .close').forEach(span => {
    span.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal if clicked outside content
window.addEventListener('click', e => {
    if(e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
