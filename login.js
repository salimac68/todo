function logi(callback){
    var n = document.getElementById("name").value;
    var p = document.getElementById("password").value;

    if(n=="admin"&&p=="12345"){   
        callback();
        }
    else {
        alert("not valid ");
        }
}
function page(){
    location.assign("todo.html");
}
function login(){
    logi(page);
}

    