import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './web-components/navbar/navbar.component';
import { MongoServiceService } from './core/services/mongo-service/mongo-service.service';
import { HttpClient } from '@angular/common/http';
import { FastapiServiceService } from './core/services/fastapi-service/fastapi-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, NavbarComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'rba';

  test: any;

  constructor(private fastapiService: FastapiServiceService) {
  }

  ngOnInit() {
    this.fastapiService.getItems().subscribe(data => {
      console.log(data);
      this.test = data;
    });
  }


}