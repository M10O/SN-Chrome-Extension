// SN Quick Launch - popup.js

document.addEventListener('DOMContentLoaded', () => {
  const buttonList = document.getElementById('button-list');

  buttonList.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON') {
      const modulePath = event.target.getAttribute('data-path');
      // Get the current active tab
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.url) return;
      // Extract the base URL (protocol + domain)
      const url = new URL(tab.url);
      const baseUrl = url.origin;
      // Open the module in a new tab
      chrome.tabs.create({ url: baseUrl + modulePath });
    }
  });

  // Optional: Implement search/filter functionality for modules
  // const searchInput = document.getElementById('search');
  // searchInput.addEventListener('input', (e) => {
  //   // Filter button list based on input value
  // });

  // Optional: Load and save custom shortcuts using localStorage
  // function loadCustomShortcuts() {}
  // function saveCustomShortcuts() {}

  // Optional: Dark/Light mode toggle
  // document.getElementById('toggle-theme').addEventListener('click', () => {
  //   // Toggle theme
  // });
});


