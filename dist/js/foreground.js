/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./assets/js/foreground.js ***!
  \*********************************/
var neonotesToken = '';
chrome.storage.sync.get(['neonotes-token'], function (res) {
  neonotesToken = res['neonotes-token'];

  if (!neonotesToken) {
    if (location.href !== 'https://neonotes.site/') {
      window.open('https://neonotes.site/');
    }

    neonotesToken = localStorage.getItem('neonotes-token');
    chrome.storage.sync.set({
      'neonotes-token': neonotesToken
    }, function () {});
    window.close();
  }
});
/******/ })()
;