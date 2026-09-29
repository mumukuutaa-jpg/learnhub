// --- DATA STORES ---

// 1. Coding Courses Data
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

// 2. Public Domain Audiobooks & Books Data
const libraryData = [
    {
        id: 1,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
        audioUrl: "https://ia800203.us.archive.org/11/items/pride_and_prejudice_librivox/prideandprejudice_01_austen_64kb.mp3",
        gutenbergId: 1342
    },
    {
        id: 2,
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        cover: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
        audioUrl: "https://ia800202.us.archive.org/12/items/adventures_sherlock_holmes_0711_librivox/sherlockholmes_01_doyle_64kb.mp3",
        gutenbergId: 1661
    },
    {
        id: 3,
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        cover: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
        audioUrl: "https://ia802607.us.archive.org/21/items/alices_adventures_1005_librivox/alicesadventuresinwonderland_01_carroll_64kb.mp3",
        gutenbergId: 11
    }
];

// --- APP STATE ---
let userPoints = parseInt(localStorage.getItem('user_points')) || 0;
let currentTrack = "SQL";
let watchTimer = null;
let secondsWatched = 0;
let activeBook = null;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updatePointsDisplay();
    renderTrackButtons();
    renderLessons();
    renderBooks();
});

// Tab Switcher
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    if (tabName === 'coding') {
        document.getElementById('coding-tab').classList.add('active');
        document.getElementById('btn-coding').classList.add('active');
    } else if (tabName === 'library') {
        document.getElementById('library-tab').classList.add('active');
        document.getElementById('btn-library').classList.add('active');
    }
}

// Points Logic
function addPoints(pts) {
    userPoints += pts;
    localStorage.setItem('user_points', userPoints);
    updatePointsDisplay();
}

function updatePointsDisplay() {
    document.getElementById('points-display').innerText = userPoints;
}

// --- CODING SECTION ---
function renderTrackButtons() {
    const container = document.getElementById('lang-buttons');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(codingTracks).forEach(track => {
        const btn = document.createElement('button');
        btn.className = `lang-btn ${track === currentTrack ? 'active' : ''}`;
        btn.innerText = track;
        btn.onclick = () => {
            currentTrack = track;
            renderTrackButtons();
            renderLessons();
        };
        container.appendChild(btn);
    });
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
    document.getElementById('video-player').src = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    startLessonTimer();
}

function startLessonTimer() {
    clearInterval(watchTimer);
    secondsWatched = 0;
    const claimBtn = document.getElementById('claim-btn');
    const status = document.getElementById('timer-status');
    
    claimBtn.disabled = true;
    status.innerText = `⏱ Watch Timer: 0s / 30s`;

    watchTimer = setInterval(() => {
        secondsWatched++;
        status.innerText = `⏱ Watch Timer: ${secondsWatched}s / 30s`;
        
        if (secondsWatched >= 30) {
            clearInterval(watchTimer);
            claimBtn.disabled = false;
            status.innerText = `✅ 30 seconds reached! Claim your points below.`;
        }
    }, 1000);
}

function claimLessonPoints() {
    addPoints(20);
    document.getElementById('claim-btn').disabled = true;
    alert("🎉 +20 PTS added to your account!");
}

// --- BOOKS & AUDIO SECTION ---
function renderBooks() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;
    grid.innerHTML = '';

    libraryData.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book-card';
        div.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" />
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <button class="action-btn" onclick="openBookReader(${book.id})">📖 Read & Listen</button>
        `;
        grid.appendChild(div);
    });
}

function openBookReader(bookId) {
    activeBook = libraryData.find(b => b.id === bookId);
    if (!activeBook) return;

    document.getElementById('reader-view').classList.remove('hidden');
    document.getElementById('current-book-title').innerText = `${activeBook.title} - by ${activeBook.author}`;
    
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = activeBook.audioUrl;
    audioPlayer.play().catch(err => console.log("User interaction required for autoplay"));

    document.getElementById('book-pages').innerText = 'Click "Fetch Pages from Gutenberg API" to load full book pages...';
}

async function loadBookPages() {
    if (!activeBook) return;
    const pagesDisplay = document.getElementById('book-pages');
    pagesDisplay.innerText = "⏳ Loading pages from Project Gutenberg API...";

    try {
        const response = await fetch(`https://gn.gutenberg.org/cache/epub/${activeBook.gutenbergId}/pg${activeBook.gutenbergId}.txt`);
        if (!response.ok) throw new Error("Could not fetch book text");
        
        const fullText = await response.text();
        pagesDisplay.innerText = fullText.substring(0, 4000) + "\n\n[... Continuation in full Gutenberg archive ...]";
    } catch (err) {
        pagesDisplay.innerText = "⚠️ Unable to load text directly. Please check internet connection.";
    }
}

function closeReader() {
    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('audio-player').pause();
          }
