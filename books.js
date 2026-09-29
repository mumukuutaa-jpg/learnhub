// External public domain audiobooks (LibriVox audio streams) & Project Gutenberg texts
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

let activeBook = null;

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
            <button class="action-btn" onclick="openBookReader(${book.id})">🎧 Listen & Read</button>
        `;
        grid.appendChild(div);
    });
}

function openBookReader(bookId) {
    activeBook = libraryData.find(b => b.id === bookId);
    if (!activeBook) return;

    const readerView = document.getElementById('reader-view');
    readerView.classList.remove('hidden');

    document.getElementById('current-book-title').innerText = `${activeBook.title} - by ${activeBook.author}`;
    
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = activeBook.audioUrl;
    audioPlayer.play();

    document.getElementById('book-pages').innerText = 'Click "Fetch Pages from Gutenberg API" to load text...';
}

async function loadBookPages() {
    if (!activeBook) return;
    const pagesDisplay = document.getElementById('book-pages');
    pagesDisplay.innerText = "⏳ Connecting to Project Gutenberg Library API...";

    try {
        // Fetch public book text directly from Gutenberg CDN
        const response = await fetch(`https://gn.gutenberg.org/cache/epub/${activeBook.gutenbergId}/pg${activeBook.gutenbergId}.txt`);
        if (!response.ok) throw new Error("Network error fetching book");
        
        const fullText = await response.text();
        // Display the first 4,000 characters of the book
        pagesDisplay.innerText = fullText.substring(0, 4000) + "\n\n[... Continue reading in full volume ...]";
    } catch (err) {
        pagesDisplay.innerText = "⚠️ Unable to load text directly. Please check internet connection.";
    }
}

function closeReader() {
    const readerView = document.getElementById('reader-view');
    readerView.classList.add('hidden');
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
}
