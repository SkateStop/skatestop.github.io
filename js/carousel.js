var index = 1;
showSlide(index);

function plusSlide(n){
    showSlide(index += n);
}

function showSlide(n){
    var slides = document.getElementsByClassName("photoSlides");
    if(n > slides.length){
        index = 1;
    }else if(n < 1){
        index = slides.length;
    }

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[index-1].style.display = "block";
}