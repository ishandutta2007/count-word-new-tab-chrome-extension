const re = new RegExp("ishan");//, 'gi')
const matches = document.documentElement.innerHTML.toLowerCase().match(re) || 0
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
});