/**
 * Classe pour récupérer et afficher une citation inspirante depuis une API.
 */
import Msg from "./Msg.js";

export default class InspireQuoteApi {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getInspiringQuote() {
        try {
            const response = await fetch(this.apiUrl + '/quotes/random');
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }

            const data = await response.json();
            const quoteText = data[0].content;
            const quoteAuthor = data[0].author;

            // Crée une instance de la classe Msg et affiche la citation
            try {
                const msg = new Msg('msg', quoteText, quoteAuthor);
                msg.render();
            } catch (e) {
                console.error(e);
            }
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }

    async getAuthors() {
        try {
            const response = await fetch(this.apiUrl + "/authors");
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }

            const data = await response.json();
            const authorSelect = document.getElementById('authorSelect');

            // Ajoutez les auteurs en tant qu'options à l'élément <select>
            data.results.forEach(author => {
                const option = document.createElement('option');
                option.value = author.slug;
                option.textContent = author.name;
                authorSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }



    async getInspiringQuoteByAuthor(authorSlug) {
        try {
            const response = await fetch(this.apiUrl + "/quotes/random?author=" + encodeURIComponent(authorSlug));
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }

            const data = await response.json();
            console.log(data)
            const quoteText = data[0].content;
            const quoteAuthor = data[0].author;

            // Crée une instance de la classe Msg et affiche la citation
            try {
                const msg = new Msg('msg', quoteText, quoteAuthor);
                msg.render();
            } catch (e) {
                console.error(e);
            }
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }

    async initialize() {
        await this.getAuthors();
        // Vous pouvez également appeler getInspiringQuote() pour afficher une citation initiale au chargement de la page.
    }
}
