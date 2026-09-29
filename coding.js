const codingTracks = {
    SQL: [
        { title: "SQL Queries & Database Fundamentals", vid: "HXV3zeQKqGY" },
        { title: "Joins, Grouping & Aggregations", vid: "7S_tz1z_5bA" },
        { title: "Indexes & Query Optimization", vid: "BHwF824pA24" }
    ],
    Python: [
        { title: "Python Basics for Beginners", vid: "kqtD5dpn9C8" },
        { title: "Data Structures & Control Flow", vid: "rfscVS0vtbw" }
    ],
    "C#": [
        { title: "C# Fundamentals & Syntax", vid: "GhQdlIFylWY" },
        { title: "C# Object-Oriented Programming", vid: "gfkTfcpWqAY" }
    ],
    JavaScript: [
        { title: "JavaScript ES6 Core Concepts", vid: "W6NZfCO5SIk" },
        { title: "Async/Await & Fetch API", vid: "PoRJizFvM7s" }
    ],
    TypeScript: [
        { title: "TypeScript Beginner Crash Course", vid: "BCg4U1FzODs" }
    ],
    "HTML & CSS": [
        { title: "HTML5 Layouts & Elements", vid: "UB1O30fR-EE" },
        { title: "CSS Flexbox & Grid Mastery", vid: "1Rs2ND1ryYc" }
    ]
};

let currentTrack = "SQL";
let currentVid = null;
let timer = null;
let secondsWatched = 0;

function renderTrackButtons() {
    const container = document.getElementById('lang-buttons');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(codingTracks).forEach(track => {
        const btn = document.createElement('button');
        btn.className = `lang-btn ${track === currentTrack ? 'active' : ''}`;
        btn.innerText = track;
        btn.onclick = () => selectTrack(track);
        container.appendChild(btn);
    });
}

function selectTrack(track) {
    currentTrack = track;
    renderTrackButtons();
    renderLessons();
}

function renderLessons() {
    const list = document.getElementById('lesson-list');
    if (!list) return;
    list.innerHTML = '';

    const lessons = codingTracks[currentTrack] || [];
    lessons.forEach(lesson => {
        const item = document.createElement('div');
        item.className = 'lesson-item';
        item.innerText = lesson.title;
        item.onclick = () => playLesson(lesson.vid);
        list.appendChild(item);
    });

    if (lessons.length > 0) playLesson(lessons[0].vid);
}

function playLesson(vid) {
    currentVid = vid;
    document.getElementById('video-player').src = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    startLessonTimer();
}

function startLessonTimer() {
    clearInterval(timer);
    secondsWatched = 0;
    const claimBtn = document.getElementById('claim-btn');
    const status = document.getElementById('timer-status');
    
    claimBtn.disabled = true;
    status.innerText = `⏱ Active Watch Timer: 0s / 30s`;

    timer = setInterval(() => {
        secondsWatched++;
        status.innerText = `⏱ Active Watch Timer: ${secondsWatched}s / 30s`;
        
        if (secondsWatched >= 30) {
            clearInterval(timer);
            claimBtn.disabled = false;
            status.innerText = `✅ Requirements met! You can now claim points.`;
        }
    }, 1000);
}

function claimLessonPoints() {
    addPoints(20);
    document.getElementById('claim-btn').disabled = true;
    alert("🎉 +20 PTS added to your account!");
}
