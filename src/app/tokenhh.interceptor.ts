import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenhhInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let nreq = request.clone({
      // url:request.url.replace('Token','cwcwcwcwdac547664a87a73be180a68834360494')
      // url:request.url+'swetty'
    })
    return next.handle(nreq);
  }
}
