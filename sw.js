// Service worker: guarda o app no aparelho para funcionar offline.
const CACHE='prioriza-5def7e79b9';
const FILES=["./", "index.html", "boot.js", "app.js", "manifest.webmanifest", "inter-latin-400-normal.woff2", "inter-latin-500-normal.woff2", "inter-latin-600-normal.woff2", "inter-latin-700-normal.woff2", "source-serif-4-latin-400-normal.woff2", "source-serif-4-latin-600-normal.woff2", "pdf.min.js", "pdf.worker.min.js", "icon-192.png", "icon-512.png", "maskable-512.png", "apple-touch-icon.png", "favicon.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  if(r.mode==='navigate'){
    // página: tenta a versão nova na rede; sem internet, usa a guardada
    e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put('index.html',c));return res}).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r)));
});
