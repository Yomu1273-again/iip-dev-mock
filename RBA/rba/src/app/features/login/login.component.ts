import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { AuthServiceService } from '../../core/services/auth-service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  providers: [AuthServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  htmlInput: string = '';
  highlighted: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {

  }

  loginSubmit(){
    this.authService.login(this.userName, this.password)
    .pipe(first())
    .subscribe({
      next: data => {
        console.log('Login successful');
        console.log("rcvd username",localStorage.getItem('username'));
      },
      error: error => {
        console.log('Login failed');
      }
    });
  }
}