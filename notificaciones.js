
const firebaseConfig = {
  apiKey: "AIzaSyC2s7risKLZ04iVWYXt9B5hI7rTluDrkNO",
  authDomain: "miappnotificaciones-b2b07.firebaseapp.com",
  projectId: "miappnotificaciones-b2b07",
  storageBucket: "miappnotificaciones-b2b07.firebasestorage.app",
  messagingSenderId: "895976948955",
  appId: "1:895976948955:web:9bf716bec7cb579cba78fe"
};


const VAPID_KEY = "BNccqRbUCmkO_SDSpoNdZY4CNOk0J2k-uE2M8mc3-8EIF0XkciX4FGdFhaZV9a-meEMcp3TtS-GztiaEOkdDhfQ";


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

async function activarNotificaciones() {
  try {
    if (!("Notification" in window) ||
        !("serviceWorker" in navigator)) {
      alert("Este navegador no admite notificaciones web.");
      return;
    }

    const permiso = await Notification.requestPermission();

    if (permiso !== "granted") {
      alert("No se concedió permiso para las notificaciones.");
      return;
    }

    const registro = await navigator.serviceWorker.register(
      new URL("firebase-messaging-sw.js", document.baseURI).href
    );

    const token = await messaging.getToken({
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registro
    });

    if (!token) {
      alert("No se pudo generar el registro de notificaciones.");
      return;
    }

    console.log("Token FCM:", token);
    alert("¡Notificaciones activadas correctamente!");

  } catch (error) {
    console.error("Error al activar notificaciones:", error);
    alert("No se pudieron activar. Revisa la consola del navegador.");
  }
}

document
  .getElementById("activar-notificaciones")
  ?.addEventListener("click", activarNotificaciones);

messaging.onMessage((payload) => {
  const titulo =
    payload.notification?.title || "Nueva notificación";

  const cuerpo =
    payload.notification?.body || "Tienes un nuevo aviso.";

  alert(`${titulo}\n${cuerpo}`);
});
