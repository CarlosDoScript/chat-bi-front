import { Routes } from '@angular/router';

export default [
    { path: '**', redirectTo: '/notfound' },
    { path: 'login', redirectTo: '/login'}
] as Routes;
