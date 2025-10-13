import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {
  getSum(num1:number , num2:number) {
    const result = num1 + num2;
    return result ;
  }
  onLogin : Subject<boolean> = new Subject<boolean>();
  appName = "angular 20";
  private apiUrl = 'https://api.freeprojectapi.com/api/GoalTracker/';

  constructor(private http: HttpClient) { }

  // ✅ Service method to get users
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl + 'getAllUsers');
  }
  
}
