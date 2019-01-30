var file = null;
var raw = null;
function upload(){
    var fileInput = document.getElementById("fileUploader");
    file = fileInput.files[0];
}

function uploadRaw() {
    upload();
        raw = true;
}

function uploadPrep() {
    upload();
    raw = false;
}

function showPercValue(){
    var percents = document.getElementById("perc_val");
    var val = document.getElementById("perc_selector");
    percents.innerText = val.value;
}

function showAnsValue(){
    var quantity = document.getElementById("mostPopularA");
    var val = document.getElementById("AnsVal");
    val.innerText = quantity.value;
}

function checkFile(sender) {
    var validExts = new Array(".xlsx", ".xls", ".spss");
    var fileExt = sender.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    if (validExts.indexOf(fileExt) < 0) {
        alert("Invalid file selected, valid files are of " +
            validExts.toString() + " types.");
        return false;
    }
    else return true;
}

function addCQ() {
    //добавление элементов в двумерный массив
}


















