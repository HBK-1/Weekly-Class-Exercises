function clickFunction() {
    var element = document.getElementById('myinput');
    console.log(element.value);
}
function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);