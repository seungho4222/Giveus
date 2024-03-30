importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
)
importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js',
)

self.addEventListener('install', function (e) {
  // self.skipWaiting()
  console.log('[Service Worker] installed')
})

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim())
  console.log('fcm service worker가 실행되었습니다.')
})

self.addEventListener('fetch', e => {
  console.log('[Service Worker] fetched resource ' + e.request.url)
})

const firebaseConfig = {
  apiKey: 'AIzaSyDYateUNVpKGxzX6cDWZMFNpgvL88F5X4w',
  authDomain: 'give-us-7b772.firebaseapp.com',
  projectId: 'give-us-7b772',
  storageBucket: 'give-us-7b772.appspot.com',
  messagingSenderId: '275937553728',
  appId: '1:275937553728:web:d36e5c4d883d18ffb91ea5',
  measurementId: 'G-DMS5D5QMFN',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notificationbody,
    icon: payload.icon,
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})

// self.addEventListener('push', function (e) {
//   console.log('push: ', e.data.json())
//   const notification = e.data.json().notification

//   const notificationTitle = notification.title
//   const notificationOptions = {
//     body: notification.body,
//     // icon: resultData.image,
//     icon: '/icon1.png',
//     tag: notification.tag,
//   }
//   self.registration.showNotification(notificationTitle, notificationOptions)
// })
