import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
})
export class StorageService {
     private readonly USER_LOGGED_IN = 'userLoggedIn';

     constructor() { }

     public setUserLoggedIn(value: boolean) {
          localStorage.setItem(this.USER_LOGGED_IN, String(value));
     }

     public isUserLoggedIn(): boolean {
          return localStorage.getItem(this.USER_LOGGED_IN) === 'true';
     }

     public logout() {
          localStorage.removeItem(this.USER_LOGGED_IN);
     }

     public clearAll() {
          localStorage.clear();
          sessionStorage.clear();
     }
}