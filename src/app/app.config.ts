import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "dabubble-45298", appId: "1:313254431890:web:5259b5a1b479a3e35faa4b", storageBucket: "dabubble-45298.firebasestorage.app", apiKey: "AIzaSyBP6dPalFMzExvxYYWcUqS-wqOn7dK1Hcg", authDomain: "dabubble-45298.firebaseapp.com", messagingSenderId: "313254431890" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
