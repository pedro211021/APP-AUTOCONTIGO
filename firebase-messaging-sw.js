
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyC2s7risKLZ04iVWYXt9B5hI7rTluDrkNO",
  authDomain: "miappnotificaciones-b2b07.firebaseapp.com",
  projectId: "miappnotificaciones-b2b07",
  storageBucket: "miappnotificaciones-b2b07.firebasestorage.app",
  messagingSenderId: "895976948955",
  appId: "1:895976948955:web:9bf716bec7cb579cba78fe"
});

const messaging = firebase.messaging();
