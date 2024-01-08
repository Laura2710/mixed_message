// index.js
import InspireQuoteApi from "./InspireQuoteApi.js";

const apiUrl = 'https://api.quotable.io/quotes/random';
const quoteFetcher = new InspireQuoteApi(apiUrl);
quoteFetcher.getInspiringQuote();

const button = document.getElementById('generateButton');
button.addEventListener('click', () => {
    quoteFetcher.getInspiringQuote();
})