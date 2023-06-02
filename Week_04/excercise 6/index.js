function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
}
function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
}
function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);