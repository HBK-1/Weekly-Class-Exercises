function myClickEvent() {
    var element = document.getElementById('circle');
 element.style.backgroundColor = 'blue';
    alert('The button was pressed');
}
function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);

