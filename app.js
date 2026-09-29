let userPoints = parseInt(localStorage.getItem('user_points')) || 0;

document.addEventListener('DOMContentLoaded', () => {
    updatePointsDisplay();
    renderTrackButtons();
    renderLessons();
    renderBooks();
});

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    if (tabName === 'coding') {
        document.getElementById('coding-tab').classList.add('active');
        event.target.classList.add('active');
    } else if (tabName === 'library') {
        document.getElementById('library-tab').classList.add('active');
        event.target.classList.add('active');
    }
}

function addPoints(pts) {
    userPoints += pts;
    localStorage.setItem('user_points', userPoints);
    updatePointsDisplay();
}

function updatePointsDisplay() {
    document.getElementById('points-display').innerText = userPoints;
}
