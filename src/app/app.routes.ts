import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { ProfileLibrary } from './profile-library/profile-library/profile-library';
import { CarritoComponent } from './cart/cart/carrito';
import { RouteGuard } from './services/route-guard';
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
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
    //{
    //    path: 'detail',
    //    component: detalle,
    //    title: 'detail'
    //},
];
