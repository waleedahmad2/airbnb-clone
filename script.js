const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");
const scrollContent = document.querySelector(".scroll-content");

scrollLeftButton.addEventListener("click", () => {
  scrollContent.scrollBy({ left: -400, behavior: "smooth" }); 
});

scrollRightButton.addEventListener("click", () => {
  scrollContent.scrollBy({ left: 300, behavior: "smooth" }); 
});


// Toggle Menue Card

function toggleMenu() {
    const menuCard = document.getElementById("menu-card");

    if (window.innerWidth <= 720) {
        menuCard.style.display = "none"; 
    } else {
        if (menuCard.style.display === "none" || menuCard.style.display === "") {
            menuCard.style.display = "block"; 
        } else {
            menuCard.style.display = "none"; 
        }
    }
}



// Web Model 

function toggleWebModel() {
    const webModel = document.getElementById("web-model");

    if (webModel.style.display === "none" || webModel.style.display === "") {
        webModel.style.display = "block"; 
    document.querySelector('.overlay').style.display = 'block';

    } else {
        webModel.style.display = "none"; 
    }



}


window.addEventListener('resize', function() {
    if (window.innerWidth <= 720) {
        document.getElementById("menu-card").style.display = "none";
        document.getElementById("web-model").style.display = "none";
    document.querySelector('.overlay').style.display = 'none';



    }
});


function closeWebModel(){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.web-model').style.display = 'none';

}


// Scrolling Effect

const lastScrollTop = 0;

const divA = document.getElementById("div-a");
const divB = document.getElementById("div-b");
const divC = document.getElementById("div-c");

window.addEventListener("scroll", function () {
    const currentScrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        divA.classList.remove("hidden");
        divB.classList.add("hidden");
        divC.classList.add("hidden");
    } else {
        divA.classList.add("hidden");
        divB.classList.remove("hidden");
        divC.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
});


