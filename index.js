// index.js
import InspireQuoteApi from "./InspireQuoteApi.js";

const apiUrl = 'https://api.quotable.io';
const quoteFetcher = new InspireQuoteApi(apiUrl);
quoteFetcher.initialize();
quoteFetcher.getInspiringQuote();

const button = document.getElementById('generateButton');
button.addEventListener('click', () => {
    quoteFetcher.getInspiringQuote();
})

const authorSelect = document.getElementById('authorSelect');
authorSelect.addEventListener('change', () => {
    const selectedAuthorId = authorSelect.value; // Obtenez la valeur de l'auteur sélectionné
    if (selectedAuthorId) {
        // Si une option est sélectionnée, appelez getInspiringQuoteByAuthor avec l'ID de l'auteur
        quoteFetcher.getInspiringQuoteByAuthor(selectedAuthorId);
    }
});
