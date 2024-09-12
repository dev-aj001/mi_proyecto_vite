// Elementos img del html
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

fetch('imagenes/img1.png')
.then(resp => resp.blob())
.then(image => {
    console.log(image);
    let imgPath = URL.createObjectURL(image);
    img1.src = imgPath;
});

fetch('imagenes/img2.png')
.then(resp => {
    return resp.blob();
})
.then(image => {
    console.log(image);
    let imgPath = URL.createObjectURL(image);
    img2.src = imgPath;
});



