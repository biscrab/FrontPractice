function change(){

    var colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16)

    document.getElementById('t').value = colorCode;

    console.log(colorCode);

    document.body.style.backgroundColor = colorCode;
}