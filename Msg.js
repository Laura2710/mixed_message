/**
 * Classe pour afficher une citation inspirante dans un élément HTML.
 */
export default class Msg {
    constructor(id, content, author) {
        this.msg = document.getElementById(id);
        this.content = content;
        this.author = author;
    }

    render() {
        const messageHTML = `${this.content}<br><em>${this.author}</em>`;
        this.msg.innerHTML = messageHTML;
    }
}
