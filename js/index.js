let banners = ["" ,"imagens\icons8-instagram-24.png"];
let cont = 0;

function trocaBanner() {
    cont = (cont+1)%2;
    document.querySelector("#gitbanner").src = banners(cont)
}

setInterval(trocaBanner, 1000);
