
chrome.browserAction.onClicked.addListener(function(tab){
console.log("Dsxyliea")
chrome.tabs.executeScript(null, {
  file: "index.js"

});
});
