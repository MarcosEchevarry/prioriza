window.PDFJS_BASE='./';window.PRIORIZA_PWA=true;
if('serviceWorker' in navigator){
  // quando sai uma versão nova, o service worker novo assume e a página recarrega uma vez sozinha
  const had=!!navigator.serviceWorker.controller;let rl=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(had&&!rl){rl=true;location.reload()}});
  addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
