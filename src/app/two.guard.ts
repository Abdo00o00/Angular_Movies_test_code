import { CanActivateFn , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
export const twoGuard: CanActivateFn = (route, state) => {


  route.params.subscribe({
    next: () => {
      console.log('this is the route params'+route.params);
      
    }
  })
  if (this._AuthService.userData.getValue() != null) {
    return false
  }
  return true;
};
