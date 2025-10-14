import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router)
//   const isLoggedIn = localStorage.getItem("angular20token");
//   if(isLoggedIn != null){
// return true;
//   }else {
//     router.navigateByUrl("/loginpage")
//     return false

//   }
//   console.log("authGuard");
//   return true;
  const router = inject(Router);
  const token = localStorage.getItem('angular20token'); // exact key

  if (token) {
    console.log('[AuthGuard] token present -> allow');
    return true;
  }

  console.warn('[AuthGuard] no token -> redirect to loginpage');
  router.navigateByUrl('/loginpage');
  return false;
};
