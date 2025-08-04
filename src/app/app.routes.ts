import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { ProfileLibrary } from './profile-library/profile-library/profile-library';
import { CarritoComponent } from './cart/cart/carrito';
import { RouteGuard } from './services/route-guard';
import { DetallesJuegoComponent } from './detalles-juego/detalles-juego';
import { AdminPage } from './admin/admin-page/admin-page';
import { ModPage } from './moderator/mod-page/mod-page';
import { RouteGuardAdmin } from './services/route-guard-admin';
import { RouteGuardMod } from './services/route-guard-mod';
import { RestorePassword } from './restore-password/restore-password/restore-password';
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'restore-password',
        component: RestorePassword,
        title: 'Restore password',
    },
    {
        path: 'library',
        component: ProfileLibrary,
        title: 'Your library',
        canActivate: [RouteGuard]
    },
    {
        path: 'cart',
        component: CarritoComponent,
        title: 'cart'
    },
    {
        path: 'detail',
        component: DetallesJuegoComponent,
        title: 'detail'
    },
    {
        path: 'admin',
        component: AdminPage,
        title: 'Admin panel',
        canActivate: [RouteGuardAdmin]
    },
    {
        path: 'moderator',
        component: ModPage,
        title: 'Moderation panel',
        canActivate: [RouteGuardAdmin, RouteGuardMod]
    },
    { path: '**', redirectTo: '' } 
];
