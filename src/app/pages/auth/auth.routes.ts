import { Routes } from '@angular/router';

const login = () => import('./login').then(x => x.Login);

export const loginRoute: Routes = [
    {
        path: '',
        loadComponent: login
    }
];

