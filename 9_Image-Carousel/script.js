let index = 0;

show_image(index);

function show_image(i) {
   index += i;

   const images = document.getElementsByClassName("image");
   const dots = document.getElementsByClassName("dot");

   for(let i = 0; i < images.length; i++){
    images[i].style.display = "none";
   }

   for(let i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
   }

   if(index >= images.length){
    index = 0; 
   }

   if(index < 0) {
    index = images.length - 1;
   }

   images[index].style.display = "block";
   dots[index].className += " active"; //giving space before active in "" is essential


}