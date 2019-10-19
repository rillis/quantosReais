var contextMenuItem = {
    "id": "quantosReais",
    "title": "Converter para reais",
    "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem);

function makeBold(){
        var range = document.getSelection().toString();
        alert (range);
}

chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == "quantosReais" && clickData.selectionText){
    makeBold();

  }


});
