import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor(private _MoviesService: MoviesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request.clone({
      // url:request.url.replace(this._MoviesService.api_key,'api_key=dac547664a87a73be180a68834360494')
      url:request.url.replace('api_key=','api_key=dac547664a87a73be180a68834360494')
    });
    return next.handle(modifiedRequest);
  }
}
