import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-sw.js";

// Конфігурація твого Firebase проекту
const firebaseConfig = {
  apiKey: "AIzaSyA...", // Тут Firebase підставить твій ключ автоматично, або ми використовуємо стандартний для FCM
  authDomain: "unicorn-42391.firebaseapp.com",
  projectId: "unicorn-42391",
  storageBucket: "unicorn-42391.appspot.com",
  messagingSenderId: "489547314308", // Твій Sender ID зі скріншоту!
  appId: "1:489547314308:web:..." // Твій App ID
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Ловимо сповіщення, коли додаток закритий або у фоні
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Отримано фонове повідомлення: ', payload);
  
  const title = payload.notification.title || "Нове повідомлення!";
  const options = {
    body: payload.notification.body || "Тобі хтось написав у чат",
    icon: "/icon.png" // Можеш замінити на іконку свого додатка, якщо є
  };

  self.registration.showNotification(title, options);
});
