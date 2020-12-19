function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 function sleep1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
+ async function(){
    var words =["powerful","beautiful","intelligent", "enlightened", "ethical", "credible", "meritorious" ,"harmonious", "artistic" ,"devoted", "astute", "resolute", "thoughtful","women." ];
    for(var i=0;i<words.length;i++){
       
        document.getElementById("whatever").innerHTML=words[i];
         
         if(i==(words.length-1))
        { await sleep(2000);
            i=0;}
            else
            await sleep(330);  
    }
 }();

 + async function(){
    var words =["die","cry","burn","die"];
    for(var i=0;i<words.length;i++){
    if(i!=words.length-1)
        {
        document.getElementById("whateve").innerHTML=words[i];
         await sleep(630);
        }
        else
        {
            document.getElementById("whateve").innerHTML=words[i];
             await sleep(630);
             i=0;
        }
    }
 }();


 + async function(){
    var words =["Girls shouldn't go out after 8.","Girls shouldn't speak much.","Girls shouldn't drive.", "Girls shouldn't wear clothes up from knees." ];
    for(var i=0;i<words.length;i++){
       
        document.getElementById("sn").innerHTML=words[i];
         
         if(i==(words.length-1))
        { await sleep(500);
            i=0;}
            else
            await sleep(500);  
    }
 }();


function pro(){
    var l1 = document.getElementById('o1');
    var l2 = document.getElementById('o2');
    open("q");show1("o1");show1("o2");
   
}
function open(a){
    var div = document.getElementById(a);

div.style.visibility = 'visible';
}

function show1(a){
    var div = document.getElementById(a);
div.style.visibility = 'visible';
div.classList.add("fancy-btn2");
}
function hide(a){
    var div = document.getElementById(a);

div.style.visibility = 'hidden';

}


