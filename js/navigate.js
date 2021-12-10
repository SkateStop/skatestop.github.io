//GLASGOW PARK
let picBtn = document.querySelector("#picBtn");
let clipBtn = document.querySelector("#clipBtn");
let reviewBtn = document.querySelector("#reviewBtn");
let dirBtn = document.querySelector("#dirBtn");
let content = document.querySelector(".navbarDisplay");


/*
reviewBtn.addEventListener('click', () => {
    content.innerHTML = 'no reviews yet...';
});

*/

dirBtn.addEventListener('click', () => {
    content.innerHTML = '<input type="button" value="Open in Google Maps" class="directionButton">';
});

//PHILLIPS PARK
