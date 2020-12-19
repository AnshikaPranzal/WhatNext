
var counter=0;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var a =new Array(10);
for(i=0;i<10;i++){
    a[i]=0;
}
//usage:
function question(j){
    hide('o1'); hide('o2'); hide('o3'); hide('o4'); hide('o5');hide('y');
    a[counter]=j;
    counter=counter+1;
readTextFile("/sample.json", function(text){
    var data = JSON.parse(text);
console.log(counter);
    if(counter==1)
    {
        t=data[j].children[0].name;
        oc=data[j].children[0].oc;
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[j].children[0].op[k].value;
        }
        
    }
    if(counter==2){
        t=data[a[0]].children[0].children[j].name;
        oc=data[a[0]].children[0].children[j].oc;
        if(oc==0)
        {
            rep= data[a[0]].children[0].children[j].report;
            solution(t,rep);
        }
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[j].op[k].value;
        }
    }
    if(counter==3){
        t=data[a[0]].children[0].children[a[1]].children[j].name;
        oc=data[a[0]].children[0].children[a[1]].children[j].oc;
        if(oc==0)
        {
            rep= data[a[0]].children[0].children[a[1]].children[j].report;
            solution(t,rep);
        }

        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[a[1]].children[j].op[k].value;
        }
    }
    if(counter==4){
        t=data[a[0]].children[0].children[a[1]].children[a[2]].children[j].name;
        oc=data[a[0]].children[0].children[a[1]].children[a[2]].children[j].oc;
        if(oc==0)
        {rep= data[a[0]].children[0].children[a[1]].children[a[2]].children[j].report;
            solution(t,rep);}
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[a[1]].children[a[2]].children[j].op[k].value;
        }
    }
    if(counter==5){
        t=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[j].name;
        oc=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[j].oc;
        if(oc==0)
        {rep= data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[j].report;
            solution(t,rep);}
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[j].op[k].value;
        }
    }
    if(counter==6){
        t=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[j].name;
        oc=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[j].oc;
        if(oc==0)
        {rep= data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[j].report;
            solution(t,rep);}
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[j].op[k].value;
        }
    }
    if(counter==7){
        t=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[a[5]].children[j].name;
        oc=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[a[5]].children[j].oc;
        if(oc==0)
        {rep= data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[a[5]].children[j].report;
            solution(t,rep);}
        var o =new Array(oc);
        for(k=0;k<oc;k++)
        {
            o[k]=data[a[0]].children[0].children[a[1]].children[a[2]].children[a[3]].children[a[4]].children[a[5]].children[j].op[k].value;
        }
    }


if(oc>0)
{
    open('y');
    document.getElementById("y").innerHTML=t;
    if(oc>=1)
    {
        document.getElementById("o1").innerHTML=o[0];
        show1('o1');
    }
    if(oc>=2)
    {
        document.getElementById("o2").innerHTML=o[1];
        show1('o2');
    }
    if(oc>=3)
    {
        document.getElementById("o3").innerHTML=o[2];
        show1('o3');
    }
    if(oc>=4)
    {
        document.getElementById("o4").innerHTML=o[3];
        show1('o4');
    }
    if(oc==5)
    {
        document.getElementById("o5").innerHTML=o[4];
        show1('o5');
    }
}
    
});
}






function solution(k,r){
hide('q');
scr();
document.getElementById("s").innerHTML=k;
open('s');
document.getElementById("link").innerHTML="Click here to go to the report to be mailed";
document.getElementById("temp").innerHTML=r;

}

function sendr(){
    document.getElementById("rtemp").innerHTML=document.getElementById("temp").innerHTML;
}