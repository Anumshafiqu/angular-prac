// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';

import { App } from './app/app';
import { User } from './app/pages/user/user';
import { routes } from './app/app.routes';



bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideRouter(routes)  // ✅ Add this line to enable routing
  ]
}).catch(err => console.error(err));

