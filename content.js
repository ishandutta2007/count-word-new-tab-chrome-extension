let matches = document.documentElement.innerHTML.toLowerCase().matchAll("ishan")
let count = 0
let n =  false
let indexes = []
do{
    n = matches.next()
    if(!n.done){
        indexes.push(n.value.index)
        count++;
    }
}while(!n.done)

chrome.runtime.sendMessage({
  url: window.location.href,
  count: count
});