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
            const response = await fetch(this.apiUrl);
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
}
