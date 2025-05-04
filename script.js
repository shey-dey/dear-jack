// Updated script.js to show the most recent entry instead of only today's

let currentIndex = 0;
let entries = [];

async function fetchEntries() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/shey-dey/dear-jack/main/posts.json');
        entries = await response.json();

        // Sort entries by date (newest first)
        entries.sort((a, b) => new Date(b.date) - new Date(a.date));

        showEntry(currentIndex);
    } catch (error) {
        console.error('Error fetching entries:', error);
        document.getElementById('entry').innerHTML = 'Failed to load entries.';
    }
}

function showEntry(index) {
    const entry = entries[index];
    const entryDiv = document.getElementById('entry');
    if (entry) {
        entryDiv.innerHTML = `
            <h2>${formatDate(entry.date)}</h2>
            <p>${entry.entry.replace(/\n/g, '<br>')}</p>
        `;
    } else {
        entryDiv.innerHTML = '<p>No entry available.</p>';
    }

    // Disable/enable navigation buttons
    document.getElementById('prev').disabled = index >= entries.length - 1;
    document.getElementById('next').disabled = index <= 0;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex < entries.length - 1) {
        currentIndex++;
        showEntry(currentIndex);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showEntry(currentIndex);
    }
});

fetchEntries();
