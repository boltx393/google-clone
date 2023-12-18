function search() {
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value;

    // You can perform an API request or any other logic with the searchQuery

    // For now, let's just display the search query in the search results
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = `<p>Search results for: ${searchQuery}</p>`;
}
