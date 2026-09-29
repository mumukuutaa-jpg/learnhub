// ALL BOOKS DATA
const booksData = [
    // Psychology
    { id: 1, title: "Thinking, Fast and Slow", category: "psychology", author: "Daniel Kahneman", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300", summary: "Explores System 1 (fast, intuitive, emotional) and System 2 (slow, deliberative, logical) thinking styles." },
    { id: 2, title: "The Psychology of Money", category: "psychology", author: "Morgan Housel", cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300", summary: "Timeless lessons on wealth, greed, and happiness, proving that behavior matters more than technical formulas." },
    { id: 3, title: "Influence: The Psychology of Persuasion", category: "psychology", author: "Robert Cialdini", cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300", summary: "Breaks down the core psychological principles that influence people to say yes." },
    { id: 4, title: "Man's Search for Meaning", category: "psychology", author: "Viktor Frankl", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300", summary: "A psychiatrist's memoir on finding purpose and psychological resilience in extreme hardship." },
    { id: 5, title: "Atomic Habits", category: "psychology", author: "James Clear", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300", summary: "An easy and proven guide to building good habits and breaking bad ones." },

    // Math & History (Foundational Knowledge)
    { id: 6, title: "How Not to Be Wrong", category: "math", author: "Jordan Ellenberg", cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300", summary: "Demonstrates how mathematical thinking underlies daily life, politics, and decision making." },
    { id: 7, title: "The Joy of x", category: "math", author: "Steven Strogatz", cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300", summary: "A clear, engaging introduction to essential math concepts from basic arithmetic to infinity." },
    { id: 8, title: "Sapiens: A Brief History of Humankind", category: "history", author: "Yuval Noah Harari", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300", summary: "A sweeping narrative of how Homo sapiens dominated Earth through language, money, and shared fiction." },
    { id: 9, title: "Guns, Germs, and Steel", category: "history", author: "Jared Diamond", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300", summary: "Explains how geographical and environmental factors shaped global history and inequalities." },
    { id: 10, title: "A Brief History of Time", category: "history", author: "Stephen Hawking", cover: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=300", summary: "Explores modern cosmology, black holes, time travel, and the origin of the universe." },
    { id: 11, title: "Calculus & Algebra Essentials", category: "school", author: "Academic Press", cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300", summary: "Comprehensive study material for fundamental algebra, derivatives, and integrations." },

    // Fiction / Story Books
    { id: 12, title: "To Kill a Mockingbird", category: "fiction", author: "Harper Lee", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300", summary: "A timeless novel examining racial injustice, moral courage, and empathy through a young girl's eyes." },
    { id: 13, title: "The Alchemist", category: "fiction", author: "Paulo Coelho", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300", summary: "An inspiring story of an Andalusian shepherd boy following his personal legend and dreams." },
    { id: 14, title: "1984", category: "fiction", author: "George Orwell", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300", summary: "A classic dystopian masterpiece exploring surveillance, government overreach, and truth control." },
    { id: 15, title: "The Count of Monte Cristo", category: "fiction", author: "Alexandre Dumas", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300", summary: "An epic adventure of wrongful imprisonment, justice, strategy, and ultimate redemption." }
];

// CODING SUB-PLAYLISTS
const codingLanguages = {
    Python: [
        { title: "Python Basics for Beginners", vid: "rfscVS0vtbw" },
        { title: "Python Data Structures", vid: "HGOBQPFzWKo" },
        { title: "Python OOP & Projects", vid: "Jeznw_J26KE" }
    ],
    "C#": [
        { title: "C# Essentials in 10 Minutes", vid: "gfkTfcpWqAY" },
        { title: "C# Object Oriented Programming", vid: "GhQdlIFylWY" }
    ],
    "C++": [
        { title: "C++ Basics Crash Course", vid: "vLnPwxZdW4Y" },
        { title: "C++ Pointers and Memory", vid: "2YBld6_2gKM" }
    ],
    HTML: [
        { title: "HTML Crash Course for Beginners", vid: "UB1O30fR-EE" },
        { title: "HTML5 Semantic Tags & Forms", vid: "kUMe1FH4CHE" }
    ],
    CSS: [
        { title: "CSS Styling Quickstart", vid: "yfoY53QXEnI" },
        { title: "CSS Flexbox & Grid Layouts", vid: "3YW65K6LcIA" }
    ],
    Java: [
        { title: "Java Programming Basics", vid: "eIrMbAQSU34" },
        { title: "Java OOP Principles", vid: "A74TOX803D0" }
    ],
    JavaScript: [
        { title: "JavaScript Fundamentals", vid: "hdI2bkO55l8" },
        { title: "DOM Manipulation & Events", vid: "y17RuWkWdn8" }
    ],
    TypeScript: [
        { title: "TypeScript Crash Course", vid: "BCg4U1FzODs" },
        { title: "TypeScript Interfaces & Types", vid: "zQnBQ4tB3ZA" }
    ]
};

// ALL SKILLS DATA
const skillsData = [
    {
        id: "coding",
        title: "Coding & Software Development",
        desc: "Pick a language below to master: Python, C#, C++, HTML, CSS, Java, JavaScript, or TypeScript.",
        badge: "💻 Fullstack Dev",
        isCoding: true
    },
    {
        id: "critical_thinking",
        title: "Critical Thinking & Problem Solving",
        desc: "Evaluate information objectively, spot logical fallacies, and break complex problems into steps.",
        badge: "🧠 Master Thinker",
        playlist: [
            { title: "5 Tips to Improve Critical Thinking", vid: "dItUGF8TeE0" },
            { title: "Logical Fallacies Explained", vid: "8qb-h02X_ls" },
            { title: "Problem Solving Frameworks", vid: "Q4v_f0S0QxE" }
        ]
    },
    {
        id: "financial_literacy",
        title: "Financial Literacy & Money Management",
        desc: "Master budgeting, compounding interest, investing basics, debt management, and tax basics.",
        badge: "💰 Financial Wizard",
        playlist: [
            { title: "Personal Finance Essentials for Beginners", vid: "P1k43_5yJ-s" },
            { title: "Understanding Compound Interest", vid: "gE0U-1R4Vag" },
            { title: "Investing 101: Stocks & Index Funds", vid: "WEdK8O4C5E0" }
        ]
    },
    {
        id: "effective_communication",
        title: "Effective Communication & Listening",
        desc: "Express ideas clearly through writing and speaking with empathy and active listening.",
        badge: "🗣️ Master Communicator",
        playlist: [
            { title: "Speak With Confidence in Any Situation", vid: "tShavGuo00E" },
            { title: "Active Listening Skills", vid: "z_-rNd7hDAU" },
            { title: "How to Write Clear & Concise Emails", vid: "49zK21XwN5I" }
        ]
    },
    {
        id: "time_management",
        title: "Time & Focus Management",
        desc: "Prioritize high-impact tasks using time blocking & Eisenhower Matrix while avoiding distractions.",
        badge: "⏱️ Focus Master",
        playlist: [
            { title: "The Eisenhower Matrix Explained", vid: "suG39Ior3gM" },
            { title: "Time Blocking Strategy", vid: "f34-118-sK4" },
            { title: "Overcoming Digital Distractions", vid: "20m_5p1X-Cg" }
        ]
    },
    {
        id: "first_aid_health",
        title: "Basic First Aid & Physical Health",
        desc: "Know CPR, wound care, basic nutrition, and daily joint/cardiovascular health routines.",
        badge: "🏥 Health & Safety Hero",
        playlist: [
            { title: "Basic First Aid & CPR Essentials", vid: "c82x2Xb5E0g" },
            { title: "Nutrition Basics Made Simple", vid: "c06dTj0v0sM" },
            { title: "Daily Joint Mobility Routine", vid: "g_tea8ZNk5A" }
        ]
    },
    {
        id: "adaptability",
        title: "Adaptability & Continuous Learning",
        desc: "Develop a growth mindset to unlearn outdated habits and rapidly learn new digital tools.",
        badge: "🌱 Rapid Learner",
        playlist: [
            { title: "Developing a Growth Mindset", vid: "M1CHPnZfFmU" },
            { title: "How to Learn Anything Fast", vid: "5MgBikgcWnY" }
        ]
    },
    {
        id: "handwriting",
        title: "Handwriting Improvement",
        desc: "Transform sloppy writing into clean, fast, and beautiful penmanship.",
        badge: "✍️ Script Master",
        playlist: [
            { title: "Lesson 1: Grip & Posture", vid: "s3336Q4iS1o" },
            { title: "Lesson 2: Letter Formation", vid: "OKI8I2SOnsc" },
            { title: "Lesson 3: Drills & Speed", vid: "S10A13Cg-uE" }
        ]
    },
    {
        id: "penspinning",
        title: "Pen Spinning Fundamentals",
        desc: "Master finger dexterity tricks with pens.",
        badge: "🖊️ Spinner Boss",
        playlist: [
            { title: "Trick 1: The ThumbAround", vid: "vEvP2q0P97s" },
            { title: "Trick 2: The Sonic", vid: "aJ-Jm2T38gI" },
            { title: "Trick 3: The Charge", vid: "4A0m168aTf0" }
        ]
    },
    {
        id: "cardspinning",
        title: "Card Flourishes & Spinning",
        desc: "Learn impressive card manipulation skills and spins.",
        badge: "🃏 Card Wizard",
        playlist: [
            { title: "Lesson 1: Pirate Shuffle & Spin", vid: "w0S-84-45Jk" },
            { title: "Lesson 2: The Pirouette", vid: "7oK2q6W4Qc8" }
        ]
    }
];

// STATE MANAGEMENT WITH LOCALSTORAGE
let userState = JSON.parse(localStorage.getItem('learnhub_user_v3')) || {
    recentBooks: [],
    watchedVideos: {}, // { skillOrLangKey: [vid1, vid2] }
    badges: [],
    recentSkills: []
};

function saveState() {
    localStorage.setItem('learnhub_user_v3', JSON.stringify(userState));
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderBooks('all');
    renderSkillsList();
    renderLeaderboard();
    updateDashboard();
});

// NAVIGATION LOGIC
function setupNavigation() {
    const navItems = document.querySelectorAll('.sidebar li');
    const tabs = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            item.classList.add('active');
            document.getElementById(item.getAttribute('data-tab')).classList.add('active');
        });
    });
}

// BOOKS LOGIC
function renderBooks(category) {
    const grid = document.getElementById('books-grid');
    grid.innerHTML = '';

    const filtered = category === 'all' 
        ? booksData 
        : booksData.filter(b => b.category === category);

    filtered.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h4>${book.title}</h4>
            <p>By ${book.author}</p>
            <button onclick="openBook(${book.id})">Read / Listen</button>
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderBooks(e.target.getAttribute('data-category'));
        });
    });
}

function openBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('modal-book-title').innerText = book.title;
    document.getElementById('modal-book-author').innerText = `By ${book.author}`;
    document.getElementById('modal-book-content').innerText = book.summary;
    document.getElementById('book-modal').style.display = 'flex';

    if (!userState.recentBooks.includes(book.title)) {
        userState.recentBooks.unshift(book.title);
        if (userState.recentBooks.length > 5) userState.recentBooks.pop();
        saveState();
        updateDashboard();
    }
}

document.getElementById('close-book-modal').onclick = () => {
    document.getElementById('book-modal').style.display = 'none';
};

// SKILLS & VIDEO PLAYER LOGIC
let currentSkill = null;
let currentCodingLang = "Python";

function renderSkillsList() {
    const list = document.getElementById('skills-list');
    list.innerHTML = '';

    skillsData.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill.title;
        li.onclick = () => selectSkill(skill, li);
        list.appendChild(li);
    });

    if (skillsData.length > 0) {
        selectSkill(skillsData[0], list.children[0]);
    }
}

function selectSkill(skill, element) {
    currentSkill = skill;

    document.querySelectorAll('#skills-list li').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');

    document.getElementById('active-skill-title').innerText = skill.title;
    document.getElementById('active-skill-desc').innerText = skill.desc;

    const langSelectorContainer = document.getElementById('coding-language-selector');

    if (skill.isCoding) {
        langSelectorContainer.style.display = 'block';
        renderLanguageButtons();
    } else {
        langSelectorContainer.style.display = 'none';
    }

    if (!userState.recentSkills.includes(skill.title)) {
        userState.recentSkills.unshift(skill.title);
        if (userState.recentSkills.length > 5) userState.recentSkills.pop();
        saveState();
        updateDashboard();
    }

    renderPlaylist();
    updateProgress();
}

function renderLanguageButtons() {
    const container = document.getElementById('lang-buttons-container');
    container.innerHTML = '';

    Object.keys(codingLanguages).forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `lang-btn ${lang === currentCodingLang ? 'active' : ''}`;
        btn.innerText = lang;
        btn.onclick = () => {
            currentCodingLang = lang;
            renderLanguageButtons();
            renderPlaylist();
            updateProgress();
        };
        container.appendChild(btn);
    });
}

function getActivePlaylist() {
    if (currentSkill && currentSkill.isCoding) {
        return codingLanguages[currentCodingLang] || [];
    }
    return currentSkill ? currentSkill.playlist || [] : [];
}

function getActiveKey() {
    if (currentSkill && currentSkill.isCoding) {
        return `coding_${currentCodingLang}`;
    }
    return currentSkill ? currentSkill.id : '';
}

function renderPlaylist() {
    const playlistContainer = document.getElementById('playlist-items');
    playlistContainer.innerHTML = '';

    const playlist = getActivePlaylist();
    const activeKey = getActiveKey();
    const watchedList = userState.watchedVideos[activeKey] || [];

    playlist.forEach((item) => {
        const isWatched = watchedList.includes(item.vid);
        const div = document.createElement('div');
        div.className = `playlist-item ${isWatched ? 'watched' : ''}`;
        div.innerHTML = `
            <span>${item.title}</span>
            <button onclick="playVideo('${item.vid}')">${isWatched ? 'Re-watch' : 'Play & Complete'}</button>
        `;
        playlistContainer.appendChild(div);
    });

    if (playlist.length > 0) {
        playVideo(playlist[0].vid, false);
    }
}

function playVideo(vid, markWatched = true) {
    document.getElementById('yt-player').src = `https://www.youtube.com/embed/${vid}?autoplay=1`;

    if (markWatched && currentSkill) {
        const activeKey = getActiveKey();

        if (!userState.watchedVideos[activeKey]) {
            userState.watchedVideos[activeKey] = [];
        }

        if (!userState.watchedVideos[activeKey].includes(vid)) {
            userState.watchedVideos[activeKey].push(vid);
            saveState();
            renderPlaylist();
            updateProgress();
        }
    }
}

function updateProgress() {
    if (!currentSkill) return;

    const playlist = getActivePlaylist();
    const activeKey = getActiveKey();
    const total = playlist.length;
    const watched = (userState.watchedVideos[activeKey] || []).length;
    const percentage = total > 0 ? Math.round((watched / total) * 100) : 0;

    const progressBar = document.getElementById('skill-progress-bar');
    const progressText = document.getElementById('skill-progress-text');

    progressBar.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}% Mastered`;

    const badgeName = currentSkill.isCoding ? `💻 ${currentCodingLang} Dev` : currentSkill.badge;

    if (percentage === 100 && !userState.badges.includes(badgeName)) {
        userState.badges.push(badgeName);
        saveState();
        showMasteryModal(currentSkill.isCoding ? `${currentCodingLang} Coding` : currentSkill.title, badgeName);
        updateDashboard();
        renderLeaderboard();
    }
}

function showMasteryModal(skillTitle, badgeName) {
    document.getElementById('mastered-skill-name').innerText = skillTitle;
    document.getElementById('unlocked-badge-display').innerText = badgeName;
    document.getElementById('mastery-modal').style.display = 'flex';
}

document.getElementById('close-mastery-modal').onclick = () => {
    document.getElementById('mastery-modal').style.display = 'none';
};

// DASHBOARD UPDATES
function updateDashboard() {
    const booksList = document.getElementById('recent-books-list');
    if (userState.recentBooks.length > 0) {
        booksList.innerHTML = userState.recentBooks.map(b => `<li>📖 ${b}</li>`).join('');
    }

    const skillsList = document.getElementById('recent-skills-list');
    if (userState.recentSkills.length > 0) {
        skillsList.innerHTML = userState.recentSkills.map(s => `<p>⚡ ${s}</p>`).join('');
    }

    const badgeContainer = document.getElementById('dashboard-badges');
    document.getElementById('user-badges-count').innerText = `Badges: ${userState.badges.length}`;

    if (userState.badges.length > 0) {
        badgeContainer.innerHTML = userState.badges.map(b => `<div class="badge-item">${b}</div>`).join('');
    }
}

// LEADERBOARD DATA
function renderLeaderboard() {
    const mockUsers = [
        { rank: 1, name: "Alex_Dev", skills: 8, badges: "🧠 💰 🗣️ 💻 Python 💻 JavaScript", points: 4000 },
        { rank: 2, name: "Sarah_Books", skills: 6, badges: "🧠 🗣️ 🏥 🌱 💻 HTML", points: 3000 },
        { rank: 3, name: "You (Learner)", skills: userState.badges.length, badges: userState.badges.join(" ") || "None", points: userState.badges.length * 500 },
        { rank: 4, name: "John_Doe", skills: 2, badges: "✍️ 🖊️", points: 1000 }
    ];

    const body = document.getElementById('leaderboard-body');
    body.innerHTML = mockUsers.map(user => `
        <tr>
            <td>#${user.rank}</td>
            <td><strong>${user.name}</strong></td>
            <td>${user.skills} Mastered</td>
            <td>${user.badges}</td>
            <td>${user.points} pts</td>
        </tr>
    `).join('');
  }
      
