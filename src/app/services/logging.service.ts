import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logStatusChange(status: string): void {
    console.log(`Server status changed to "${status}"`);
  }
}
