"use strict";
function option()
{
var myinit = { 
    method: "GET",
    headers: {
        'Content-Type':'application/json'
    },
    mode:'cors',
    cache:'default'
};
let myRequest = new Request("sample.json",myinit);
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        document.getElementById("a").innerHTML = data[0].children[0].name;
        var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
        window.open(url, '_blank');
        window.focus();
    });
}