import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminRequestsQueue } from '../../database/adminrequests';
import { Router } from '@angular/router';
import { MongoServiceService } from '../../core/services/mongo-service/mongo-service.service';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../core/services/auth-service/auth-service.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvoiceComponent {

  userArray: any = [];
  currentRole: any;

  constructor(private router: Router, private mongoService: MongoServiceService, private authService: AuthServiceService) {}  
  
  adminReq(){
    const adminRequests = new AdminRequestsQueue();
    const user = localStorage.getItem('username');
    if (user !== null) {
      adminRequests.enqueue({user: user });
      this.mongoService.makeAdmin(user);
    }
    console.log(adminRequests.view());
  }

  gotoApproval(){
    this.router.navigate(['/approval']);
  }

  displayAllUsers(){
    this.mongoService.getAllDocuments().subscribe((data:any) => {
      this.userArray = data;
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('username');
    if (user !== null) {
      const roleObservable = this.authService.getRole();
      roleObservable.subscribe((role:any) => {
        this.currentRole = role;
      });
    }
  }

}
