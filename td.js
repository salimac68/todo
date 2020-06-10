$(document).ready(function(){
var xhr=new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var pp=JSON.parse(this.responseText);
        
        var output="";
        pp.forEach(function(i) {
            var s=`${i.completed}`
            
            if(s=="true"){
                output+=`<input type="checkbox"checked disabled>${i.title}<br>`
            }
            else{
                output+=`<input type="checkbox">${i.title}<br>`
            }
        });
        document.getElementById("demo").innerHTML=output;
        var count=0;
        var promise=new Promise((resolve,reject)=>{
            $(`input[type="checkbox"]`).click(function(){
                if($(this).is(":checked")==true){
                    count=count+1;

                    if(count===5){
                        resolve();
                    }
                }
                else if($(this).is("checked")==false){
                    count=count-1;
                    reject();

                }
            }).change();
        })
        promise.then(function(){
            alert("congrats!!!. 5 tasks successfully completed");
        })
        .catch(function(){
            alert("one task selection failed");
        })
    }
}
xhr.open("GET","list.json",true);
xhr.send();
})

