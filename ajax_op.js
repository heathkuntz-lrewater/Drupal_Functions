var http_request = false;
   function makePOSTRequest(url, parameters) {
      http_request = false;
      if (window.XMLHttpRequest) { // Mozilla, Safari,...
         http_request = new XMLHttpRequest();
         if (http_request.overrideMimeType) {
         	// set type accordingly to anticipated content type
            //http_request.overrideMimeType('text/xml');
            http_request.overrideMimeType('text/html');
         }
      } else if (window.ActiveXObject) { // IE
         try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
            try {
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
         }
      }
      if (!http_request) {
         alert('Cannot create XMLHTTP instance');
         return false;
      }

      http_request.onreadystatechange = alertContents;
      http_request.open('POST', url, true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.setRequestHeader("Content-length", parameters.length);
      http_request.setRequestHeader("Connection", "close");
      http_request.send(parameters);
   }

   function alertContents() {
      if (http_request.readyState == 4) {
         if (http_request.status == 200) {
            //alert(http_request.responseText);
            result = http_request.responseText;
            finishUpdate(result);

            //document.getElementById('myspan').innerHTML = result;
         } else {
            alert('There was a problem with the request.');
         }
      }
   }

   function get(obj) {
      var poststr = "newName=" + encodeURI( document.getElementById("nc").value ) +
          "&oldName=" + encodeURI(document.getElementById("myDiv").innerHTML);
      makePOSTRequest('post.php', poststr);
      //alert(poststr);
   }

function loadXMLDoc(rb) {
var hw = RadioCheck(rb);
    //document.write(hw);

              if (window.XMLHttpRequest) {
                  xmlhttp=new XMLHttpRequest();
              }
              else {
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
              }

      //document.write(phpstr);

           xmlhttp.open("GET", "get.php?q=" + hw, true);
           xmlhttp.send();

          xmlhttp.onreadystatechange=function()  {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)  {
                    var tl = xmlhttp.responseText.length;

                    document.getElementById("txtlen").innerHTML=tl;
                    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

                    document.getElementById("myDiv").style.color="#FF0000";

                    }
                }
}

function RadioCheck(button) {
     for (i=0; i<button.length; i++) {
        if (button[i].checked == true) {
            return (button[i].value);
        }
    }
}

function finishUpdate(result) {
    document.getElementById('myspan').innerHTML =
        "The server has finished the update to now be " + result;
    document.getElementById("myDiv").innerHTML = result;
    document.getElementById("myDiv").style.color="#008000";
}
