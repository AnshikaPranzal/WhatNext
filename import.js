

function sendXHR(type, url, data, callback) {
    var newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
    newXHR.open(type, url, true);
    newXHR.send(data);
    newXHR.onreadystatechange = function() {
      if (this.status === 200 && this.readyState === 4) {
        callback(this.response);
      }
    };
  }
function option2()
{
    
sendXHR("GET", "/sample.json", null, function(response) { // response contains the content of the description.txt file.
    document.getElementById("a").innerHTML = response[0].children[0].name; // Use innerHTML to get or set the html content.
  });
  


}