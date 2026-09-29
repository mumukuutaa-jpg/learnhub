// --- SKILLS DATABASE ---
const coursesData = {
    Coding: {
        "SQL": [
            { title: "SQL Queries & Database Basics", vid: "HXV3zeQKqGY" },
            { title: "Joins, Grouping & Aggregations", vid: "7S_tz1z_5bA" }
        ],
        "Python": [
            { title: "Python Beginners Crash Course", vid: "kqtD5dpn9C8" },
            { title: "Data Structures & Loops", vid: "rfscVS0vtbw" }
        ],
        "JavaScript": [
            { title: "JavaScript ES6 Core Concepts", vid: "W6NZfCO5SIk" },
            { title: "Async/Await & Fetch API", vid: "PoRJizFvM7s" }
        ]
    },
    PenSpinning: {
        "Fundamental Tricks": [
            { title: "Double Charge Trick Tutorial", vid: "6B4M5K-iY7g" },
            { title: "Infinity Trick Tutorial", vid: "20mGThwI1oM" },
            { title: "Thumb Around Tutorial", vid: "vEvP_A03A8c" },
            { title: "Sonic Trick Tutorial", vid: "0433E7GvLIs" }
        ],
        "Combo Links": [
            { title: "Top 5 Easy Pen Spinning Combos", vid: "kZ7BIn_P7O0" }
        ]
    },
    Handwriting: {
        "Cursive Basics": [
            { title: "How to Improve Handwriting Fast", vid: "1Y1e90l40Y8" },
            { title: "Cursive Alphabet Practice & Drills", vid: "49a17O-Jj98" }
        ],
        "Calligraphy": [
            { title: "Beginner Calligraphy & Lettering", vid: "sBoVGqiSzrE" }
        ]
    },
    Design: {
        "Figma UI/UX": [
            { title: "Figma Fundamentals for Beginners", vid: "FTFaQWZBqQ8" },
            { title: "Designing Responsive Interfaces", vid: "c9Wg6Cb_YlU" }
        ]
    },
    Marketing: {
        "Digital Marketing": [
            { title: "Digital Marketing Strategy Guide", vid: "nU-IIXBWlS4" }
        ]
    },
    Cybersecurity: {
        "Ethical Hacking": [
            { title: "Ethical Hacking & Security Fundamentals", vid: "3Kq1MIfTWCE" }
        ]
    },
    ScamLearning: null // Trigger for Coming Soon State
};

// --- MOCK LEADERBOARD DATA ---
let mockUsers = [
    { name: "Alex Rover", points: 240, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Alex" },
    { name: "Sarah Connor", points: 180, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sarah" },
    { name: "David Tech", points: 120, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=David" }
];

// --- APP STATE ---
let profile = JSON.parse(localStorage.getItem('user_profile')) || {
    name: "Learner",
    points: 0,
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Learner"
};

let currentCategory = "Coding";
let currentTrack = "SQL";
let timer = null;
let secondsWatched = 0;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadProfileUI();
    renderSubtracks();
    renderLeaderboard();
});

// Tab Navigation
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.getElementById(`btn-${tabName}`).classList.add('active');

    if (tabName === 'leaderboard') renderLeaderboard();
}

// Category & Subtrack Logic
function filterCategory(cat, btnElement) {
    currentCategory = cat;
    document.querySelectorAll('.category-bar .cat-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    
    const courseContentArea = document.getElementById('course-content-area');
    const comingSoonCard = document.getElementById('coming-soon-card');
    const subtrackButtons = document.getElementById('subtrack-buttons');

    if (cat === 'ScamLearning') {
        courseContentArea.classList.add('hidden');
        subtrackButtons.style.display = 'none';
        comingSoonCard.classList.remove('hidden');
        return;
    } else {
        courseContentArea.classList.remove('hidden');
        subtrackButtons.style.display = 'flex';
        comingSoonCard.classList.add('hidden');
    }

    currentTrack = Object.keys(coursesData[cat])[0];
    renderSubtracks();
}

function renderSubtracks() {
    const container = document.getElementById('subtrack-buttons');
    container.innerHTML = '';

    if (!coursesData[currentCategory]) return;

    const tracks = Object.keys(coursesData[currentCategory]);
    tracks.forEach(track => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${track === currentTrack ? 'active' : ''}`;
        btn.innerText = track;
        btn.onclick = () => {
            currentTrack = track;
            renderSubtracks();
        };
        container.appendChild(btn);
    });

    renderLessons();
}

function renderLessons() {
    const container = document.getElementById('lesson-list');
    container.innerHTML = '';
    
    document.getElementById('current-track-title').innerText = `${currentTrack} Lessons`;
    const lessons = coursesData[currentCategory][currentTrack] || [];

    lessons.forEach((lesson, index) => {
        const item = document.createElement('div');
        item.className = 'lesson-item';
        item.innerText = `${index + 1}. ${lesson.title}`;
        item.onclick = () => playLesson(lesson.vid, item);
        container.appendChild(item);
    });

    if (lessons.length > 0) {
        const firstLesson = container.querySelector('.lesson-item');
        if (firstLesson) playLesson(lessons[0].vid, firstLesson);
    }
}

function playLesson(vid, element) {
    document.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
    if (element) element.classList.add('active');

    document.getElementById('video-player').src = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    startTimer();
}

// Watch Timer & Points
function startTimer() {
    clearInterval(timer);
    secondsWatched = 0;
    const claimBtn = document.getElementById('claim-btn');
    const status = document.getElementById('timer-status');
    const progressFill = document.getElementById('progress-fill');

    claimBtn.disabled = true;
    progressFill.style.width = '0%';
    status.innerText = `⏱ Watch Timer: 0s / 30s`;

    timer = setInterval(() => {
        secondsWatched++;
        let pct = (secondsWatched / 30) * 100;
        progressFill.style.width = `${Math.min(pct, 100)}%`;
        status.innerText = `⏱ Watch Timer: ${secondsWatched}s / 30s`;

        if (secondsWatched >= 30) {
            clearInterval(timer);
            claimBtn.disabled = false;
            status.innerText = `✅ Requirements met! Claim points.`;
        }
    }, 1000);
}

function claimLessonPoints() {
    profile.points += 20;
    saveAndSyncProfile();
    document.getElementById('claim-btn').disabled = true;
    alert("🎉 +20 PTS added!");
}

// Profile Management
function selectPresetAvatar(src) {
    document.getElementById('avatar-url-input').value = src;
    document.getElementById('profile-avatar-preview').src = src;
}

function saveProfile(event) {
    event.preventDefault();
    const newName = document.getElementById('username-input').value.trim();
    const newAvatar = document.getElementById('avatar-url-input').value.trim();

    if (newName) profile.name = newName;
    if (newAvatar) profile.avatar = newAvatar;

    saveAndSyncProfile();
    alert("✅ Profile updated successfully!");
}

function saveAndSyncProfile() {
    localStorage.setItem('user_profile', JSON.stringify(profile));
    loadProfileUI();
}

function loadProfileUI() {
    document.getElementById('nav-username').innerText = profile.name;
    document.getElementById('points-display').innerText = profile.points;
    document.getElementById('nav-avatar').src = profile.avatar;

    document.getElementById('profile-name-display').innerText = profile.name;
    document.getElementById('profile-pts-display').innerText = profile.points;
    document.getElementById('profile-avatar-preview').src = profile.avatar;
    document.getElementById('username-input').value = profile.name;
    document.getElementById('avatar-url-input').value = profile.avatar;
}

// Leaderboard Logic
function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    let allUsers = [...mockUsers, { name: profile.name, points: profile.points, avatar: profile.avatar, isUser: true }];
    allUsers.sort((a, b) => b.points - a.points);

    allUsers.forEach((u, index) => {
        const item = document.createElement('div');
        item.className = `leaderboard-item ${u.isUser ? 'is-user' : ''}`;
        item.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <img src="${u.avatar}" alt="Avatar">
            <div class="user-info">
                <strong>${u.name} ${u.isUser ? '(You)' : ''}</strong>
            </div>
            <span class="pts-badge">${u.points} PTS</span>
        `;
        list.appendChild(item);
    });
    }
