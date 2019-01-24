var vm = new Vue({});

var file = null;
function upload(){
    var fileInput = document.getElementById("fileUploader");
    file = fileInput.files[0];
}

function sendFile() {
    //throw it on server somehow
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

let concrete_questions = [];
function addCQ() {
    //добавление элементов в двумерный массив
}


















