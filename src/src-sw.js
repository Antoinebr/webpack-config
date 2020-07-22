importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');


workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);


/**
 * Basic caching for fonts.
 */

workbox.routing.registerRoute(
    /\.(?:woff|woff2|ttf|otf|eot)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts'
    })
  );
  
  
  /**
   * Basic caching for images.
   */
  
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache 60 images.
          maxEntries: 60,
          purgeOnQuotaError: true
        })
      ]
    })
  );
  