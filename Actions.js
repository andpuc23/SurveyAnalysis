var file = null;
function upload(){
    var fileInput = document.getElementById("fileUploader");
    file = fileInput.files[0];
}

function sendFile() {
    //throw it on server somehow
}