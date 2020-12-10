var allPhotos = ["images/c.jpg", "images/e.jpg", "images/f.jpg", "images/g.jpg", "images/h.jpg"];
var imgTaG = document.querySelector(".imageTag");

var count = 0;

function next() {
    count++;
    if (count >= allPhotos.length) {
        count=0;
        imgTaG.src = allPhotos[count];
    }
    else{
        imgTaG.src = allPhotos[count];
    }

    
}
function previous() {

    count--;
    if (count < 0 ) {
        count=allPhotos.length-1;
        imgTaG.src = allPhotos[count];
    }
    else{
        imgTaG.src = allPhotos[count];
    }
}



