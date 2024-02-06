let img = document.createElement("img");
img.src = "./img/img-small.jpg";
let src = document.getElementById("img-example");
img.id = "Image";
document.body.appendChild(img)
src.appendChild(img);


function ChangeFilter(event) {
    Image = document.getElementById("Image");
    Filter = document.getElementById("Filter").value;
    
    Image.style.WebkitFilter = "grayscale(" + Filter * 10 + "%)"
}
