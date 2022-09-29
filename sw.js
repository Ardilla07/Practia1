self.addEventListener('install',(event) =>{
    console.log("SW: Instalado");


    caches.open("cache1").then((cache) => {
        //unCache.add("/index.html");
        const respCache = caches.open('cache-v1').then((cache)=>{
            //apshell
            return cache.addAll(
                [
                    '/',
                    '/index.html',
                    '/js/app.js',
                    'https://reqres.in/api/users?page=2',
                    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                    "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                ]
            );
        });
       event.waitUntil(respCache);
      
    });
    

});
//only cache
self.addEventListener('fetch',(event)=>{
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
})