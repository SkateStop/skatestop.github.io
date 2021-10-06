//GLASGOW PARK
let picBtn = document.querySelector("#picBtn");
let clipBtn = document.querySelector("#clipBtn");
let reviewBtn = document.querySelector("#reviewBtn");
let dirBtn = document.querySelector("#dirBtn");
let content = document.querySelector(".navbarDisplay");

picBtn.addEventListener('click', () => {
    content.innerHTML = '<img src="images/glasgow/glasgow1.jpg" class="spotPhoto"><img src="images/glasgow/glasgow2.jpg" class="spotPhoto"><img src="images/glasgow/glasgow3.jpg" class="spotPhoto"><img src="images/glasgow/glasgow5.jpg" class="spotPhoto"><img src="images/glasgow/glasgow4.jpg" class="spotPhoto">';
});

clipBtn.addEventListener('click', () => {
    content.innerHTML = '<video class="spotPhoto" src="images/glasgow/clip1.mp4" controls muted></video><video class="spotPhoto" src="images/glasgow/clip3.mp4" controls muted></video>';
});

reviewBtn.addEventListener('click', () => {
    content.innerHTML = 'no reviews yet...';
});

dirBtn.addEventListener('click', () => {
    content.innerHTML = '<input type="button" value="Open in Google Maps" class="directionButton">';
});

//PHILLIPS PARK
