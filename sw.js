// Service worker do Obrativa: permite instalar o atalho e abrir o app sem
// internet. A página vem sempre da rede quando há conexão (para receber as
// atualizações); sem conexão, usa a última cópia guardada.
const CACHE = 'obrativa-v1'
const BASE = ['./', './index.html', './manifest.webmanifest', './icones/icon-192.png', './icones/icon-512.png', './icones/apple-touch-icon.png']

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  // Só arquivos do próprio app; a nuvem (Supabase) passa direto, sem cache
  if (url.origin !== self.location.origin) return
  e.respondWith(
    fetch(req)
      .then((resp) => {
        if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then((c) => c.put(req, copia)) }
        return resp
      })
      .catch(() => caches.match(req).then((r) => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))),
  )
})
