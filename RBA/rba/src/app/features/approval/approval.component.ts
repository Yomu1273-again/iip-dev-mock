import { Component } from '@angular/core';
import { AdminRequestsQueue } from '../../database/adminrequests';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approval.component.html',
  styleUrl: './approval.component.css'
})
export class ApprovalComponent {

  adminRequests = new AdminRequestsQueue();
  req: any [] = [];

  ngOnInit(): void {
    console.log(this.adminRequests.view());
    this.adminRequests.view().forEach((request) => {
      this.req.push(request.user);
      console.log(this.req);
    });
  }

  approveItem(item:any) {
    this.adminRequests.approveByUser(item);
  }

  rejectItem(item:any) {
    this.adminRequests.dequeueByUser(item);
  }

}
