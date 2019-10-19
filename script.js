window.addEventListener('load', function () {
  fireContentLoadedEvent("span");
  fireContentLoadedEvent("p");
  fireContentLoadedEvent("strong");
  fireContentLoadedEvent("div");
})

function fireContentLoadedEvent (type) {
    var url = document.URL;
    url = url.split("//")[1];
    url = url.split("/")[0];
    //alert(url);

    var y = document.getElementsByTagName(type);

    //alert(y.length);
    var i;
    var cont= 0;
    for (i = 0; i < y.length; i++) {
      if(y[i].innerHTML.indexOf("$") >= 0 && y[i].innerHTML.indexOf("R$") == -1 && y[i].innerHTML.indexOf("<span") == -1 && y[i].innerHTML.indexOf("<p") == -1){
        console.log(y[i].outerHTML);

        cont++;
        var number = y[i].innerHTML.replace(/[^0-9\.]+/g, "");
        if(number.endsWith(".")){
          number=number.substring(0, number.length - 1);
        }

        var numberP = number.replace(",","");


        var numberF = parseFloat(numberP).toFixed(2);
        var reais = (numberF*4.11).toFixed(2);

        y[i].innerHTML = y[i].innerHTML.replace(number, reais);
        y[i].innerHTML = y[i].innerHTML.replace("$","R$ ");
        y[i].innerHTML = y[i].innerHTML.replace("USD","BRL");
        y[i].innerHTML = y[i].innerHTML.replace("US","");


        var old = y[i].outerHTML;
        y[i].outerHTML = old.replace("<"+type, "<"+type+" title=\"Original: $"+number+"\" ")

        console.log(number + " -> " + reais);


      }
    }
    //alert(cont);
}
