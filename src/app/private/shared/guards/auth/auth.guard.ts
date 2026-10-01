import { CanActivateFn, Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = () => {

     const storageService: StorageService = inject(StorageService);
     const router: Router = inject(Router);

     if (storageService.isUserLoggedIn()) {
          return true;
     }

     return router.createUrlTree(['/login']);
}