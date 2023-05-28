import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          console.log('Data received', data);
        },
        error: (err) => {
          console.log('error occurred');
          console.error(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
