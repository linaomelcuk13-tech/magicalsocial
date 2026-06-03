importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Твої точні конфіги з Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCtqNAADT2KXQG2k3T1X3YRCK7peOxFhTE",
    authDomain: "unicorn-42391.firebaseapp.com",
    projectId: "unicorn-42391",
    storageBucket: "unicorn-42391.firebasestorage.app",
    messagingSenderId: "489547314308",
    appId: "1:489547314308:web:7b9eb3e3852a8ce143fed1",
    measurementId: "G-QJW03PD2PT"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Ловимо сповіщення, коли додаток закритий або згорнутий
messaging.onBackgroundMessage((payload) => {
    console.log("Отримано фонове сповіщення:", payload);
    
    const notificationTitle = payload.notification?.title || "Нове повідомлення! 🦄";
    const notificationOptions = {
        body: payload.notification?.body || "Тобі щось написали у чарівному чаті...",
        icon: "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27><text y=%270.9em%27 font-size=%2790%27>🦄</text></svg>"
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
