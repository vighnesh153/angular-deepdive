import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class UsersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const updatedRequest = request.clone({
      headers: request.headers.append('best-pokemon', 'pikachu'),
    });
    return (
      next
        .handle(updatedRequest)
        // response interceptor
        .pipe(map((response) => response))
    );
  }
}
