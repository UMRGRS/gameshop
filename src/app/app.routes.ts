import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProfileLibrary } from './profile-library/profile-library';
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'Library',
        component: ProfileLibrary,
        title: 'Profile and Library'
    },
];
