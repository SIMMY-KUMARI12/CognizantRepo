import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = 'dummy-token-123';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log('HTTP Request:', authReq.url);
  console.log('Authorization:', authReq.headers.get('Authorization'));

  return next(authReq);
};