import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardStrategyComponent } from './features/dashboard.strategy/dashboard.strategy.component';
import { InvoiceComponent } from './features/invoice/invoice.component';
import { ApprovalComponent } from './features/approval/approval.component';
import { AuthGuard } from './core/guards/auth-guard.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardStrategyComponent, data: { roles: ['admin','user'] }, canActivate: [AuthGuard] },
    { path: 'invoice', component: InvoiceComponent, data: { roles: ['admin','user'] }, canActivate: [AuthGuard] },
    { path: 'approval', component: ApprovalComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login' }
];
