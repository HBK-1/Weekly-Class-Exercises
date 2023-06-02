function myClickEvent() {
    var element = document.getElementById('circle');
 element.style.backgroundColor = 'blue';
    alert('The button was pressed');
}
function myLoadFunction() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;
}
document.addEventListener('DOMContentLoaded', myLoadFunction);

