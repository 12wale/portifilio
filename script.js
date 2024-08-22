
let skills = document.querySelector("#skills");
let spans = document.querySelectorAll("#skills div span");
let div = document.querySelector("#skills div");
let des = document.querySelector("#home .des");
let socailti = document.querySelector("#home .des .socailti");
let photo = document.querySelector("#home img");
let about = document.querySelector("#about");
let education = document.querySelector(".ttt");
let timeline = document.querySelector(".timeline");
let skill = document.querySelector("#skills h1");
let outer = document.querySelector("#skills .pross");
let projects = document.querySelector("#projects h1");
let cards = document.querySelector("#projects .cards");
let contact = document.querySelector("#contact h1");

window.onscroll = function(){
    if(window.scrollY >= 2901.60009765625 ){
        console.log("d;sdl;sdl");
        spans.forEach((span) =>{
            span.style.width = span.dataset.width;
        })
    }
    else{
        span.style.width = '0';
    }
    
}
ScrollReveal({ 
    reset: true ,
    distance : '60px',
    duration : 2500,
    delay: 400
});
ScrollReveal().reveal(des, 
    {
        delay: 500,
        origin: 'left'
    });
ScrollReveal().reveal(photo, 
    {
        delay: 500,
        origin: 'right',
        distance : '30px'
    });
ScrollReveal().reveal(socailti, 
    {
        delay: 500,
        origin: 'bottom',
        interval: 200
    });
ScrollReveal().reveal(about, 
    {
        delay: 500,
        origin: 'bottom',
    });
ScrollReveal().reveal(education, 
    {
        delay: 500,
        origin: 'left',
    });
ScrollReveal().reveal(timeline, 
    {
        delay: 700,
        origin: 'top',
    });
ScrollReveal().reveal(timeline, 
    {
        delay: 700,
        origin: 'top',
    });
ScrollReveal().reveal(skill, 
    {
        delay: 500,
        origin: 'left',
    });
ScrollReveal().reveal(outer, 
    {
        delay: 200,
        origin: 'left'
    });
ScrollReveal().reveal(projects, 
    {
        delay: 500,
        origin: 'left'
    });
ScrollReveal().reveal(cards, 
    {
        delay: 500,
        origin: 'bottom'
    });
ScrollReveal().reveal(contact, 
    {
        delay: 500,
        origin: 'right'
    });