"use strict";
var router_1 = require('@angular/router');
var not_found_component_1 = require('./errors/not-found/not-found.component');
var home_component_1 = require('./home/home.component');
var help_component_1 = require('./help/help.component');
var auth_guard_service_1 = require('./shared/auth-guard.service');
var ROUTES = [{
        path: '',
        canActivateChild: [auth_guard_service_1.AuthGuard],
        children: [{
                path: 'home',
                component: home_component_1.HomeComponent
            },
            {
                path: 'help',
                component: help_component_1.HelpComponent
            },
            {
                path: 'users',
                loadChildren: 'app/users/users.module#UsersModule',
                canLoad: [auth_guard_service_1.AuthGuard]
            }]
    },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
        canLoad: [auth_guard_service_1.AuthGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(ROUTES);
//# sourceMappingURL=app.routing.js.map