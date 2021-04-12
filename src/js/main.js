import css from '@css/app.scss'


  // we verify that the browser is compatible with ServiceWorker fisrt 
  if ("serviceWorker" in navigator) {

    // we register the ServiceWorker 
    navigator.serviceWorker.register("/serviceworker.js").then(function(registration){

      console.log("Service Worker registered with scope:", registration.scope );

    }).catch(function(err) {

      console.log("Service worker registration failed:", err);

    });

  }