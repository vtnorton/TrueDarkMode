var actualCode = ['console.log("oi");'].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

//var s = document.createElement('script');

//s.src = chrome.extension.getURL('/js/www2/github.com.js');
//s.onload = function() {
  //  this.remove();
//};
//(document.head || document.documentElement).appendChild(s);