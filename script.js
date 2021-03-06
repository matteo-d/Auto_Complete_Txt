const text = "Je suis super nuuuuul     LOL ";

let index = 0;

function writeText () {
    // on vise le body du doc, et on dit que le texte écrit est la constante créer au dessus
    // .slice (0, idx) = on découpe le texte à partir de 0, donc du début jusqu'a l'index a l'instant T ( donc de 0 à 0 ici)
    document.body.innerText = text.slice(0, index);
    // a chaque loop on increment l'index de 1, ce qui changera la portée du slice au dessus eg. .slice(0,1) puis .slice(0,2) etc....
    index ++;
    // Quand index = le nombre de caractere de la string text on retourne à .slice(0,0)
    if(index > text.length - 1) {
        document.body.innerText = text
    }
}

// On appelle la fonction avec un interval 
setInterval(writeText, 200);