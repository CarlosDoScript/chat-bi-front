import { Routes } from '@angular/router';
import { Access } from './access';
import { Login } from './login';
import { Error } from './error';

// export const authRoutes: Routes [
//     { path: 'access', loadComponent: Access },
//     { path: 'error', component: Error },
//     { path: 'login', component: Login }
// ];

const login = () => import('./login').then(x => x.Login);

export const loginRoute: Routes = [
    {
        path: '',
        loadComponent: login
    }
];
