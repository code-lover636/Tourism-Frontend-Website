
const dots = document.querySelectorAll(".dot");
const bg = document.querySelector(".bg")
const place = document.querySelector(".place")
let Index=0;

dots[0].style.backgroundColor="white"

function moveSlide(slideIndex){
    Index = slideIndex
    setTimeout(()=>{
        Index ++
        Index = Index < dots.length ? Index: 0
        moveSlide(Index);
    }, 10000);

    for (var i = 0; i < dots.length; i++){
        dots[i].style.backgroundColor="black"
        if (i==slideIndex){
            dots[i].style.backgroundColor="white";
            bg.src="./assets/background"+(slideIndex+1)+".png";
            place.innerHTML= ["INDONESIA","JAPAN","PARIS","INDIA"][slideIndex];

        }      
    }
}

moveSlide(Index);


