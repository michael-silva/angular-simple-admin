import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent }      from './errors/not-found/not-found.component';

import { HomeComponent }      from './home/home.component';
import { HelpComponent }      from './help/help.component';
import { AuthGuard }      from './shared/auth-guard.service';

const ROUTES: Routes = [{
        path: '',
        canActivateChild: [AuthGuard],
        children: [{
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'help',
            component: HelpComponent
        },
        {
            path: 'users',
            loadChildren: 'app/users/users.module#UsersModule',
            canLoad: [AuthGuard]
        }]
    },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);