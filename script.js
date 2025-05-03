// Function to fetch the current day's entry
function loadEntry() {
  fetch('https://raw.githubusercontent.com/yourusername/dear-jack/main/posts.json')
    .then(response => response.json())
    .then(data => {
      const entryDate = new Date().toISOString().split('T')[0];
      const entry = data[entryDate];
      if (entry) {
        document.getElementById('entry').innerHTML = `<h2>${entry.date}</h2><p>${entry.entry}</p>`;
      } else {
        document.getElementById('entry').innerHTML = "<p>No entry for today.</p>";
      }
    });
}

// Function to go to the previous entry
function goToPrevious() {
  // Implement fetching the previous entry logic here
}

// Function to go to the next entry
function goToNext() {
  // Implement fetching the next entry logic here
}

window.onload = loadEntry;
