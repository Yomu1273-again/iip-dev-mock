import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { users } from '../../../database/userbase';
import { Router, ActivatedRoute } from '@angular/router';
import { MongoServiceService } from '../mongo-service/mongo-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router, private mongoService: MongoServiceService) { }

  private roleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  login(username: string, password: string): Observable<any> {
    console.log('<-- In Auth Service -->');
    localStorage.setItem('username', username);
    this.mongoService.getAllDocuments().subscribe((data:any) => {
      const users = Object.values(data);
      const user = users.find((user:any) => user.name === username);
      if (user) {
        this.router.navigate(['/invoice']);
      } else {
        this.router.navigate(['/login']);
      }
    });
    
    return of({ username: username, password: password });
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  getRole(): Observable<string> {
    return this.roleSubject.asObservable();
  }

  isAuthenticated(next:any) : Observable<boolean> {
    const username = localStorage.getItem('username');
    if (username !== null) {
      const usered = this.mongoService.findUser(username).subscribe((data:any) => {
        console.log(data.role);
        this.roleSubject.next(data.role || '');
        return data.role && next.data['roles'].includes(data.role);
      });
    }
    return of(false); // Add a return statement at the end of the function
  }
}
