"use strict";
var router_1 = require('@angular/router');
var auth_component_1 = require('./auth.component');
var login_component_1 = require('./login/login.component');
var forgot_pass_component_1 = require('./forgot-pass/forgot-pass.component');
var recover_pass_component_1 = require('./recover-pass/recover-pass.component');
var ROUTES = [{
        path: '',
        component: auth_component_1.AuthComponent,
        children: [{
                path: '',
                component: login_component_1.LoginComponent
            },
            {
                path: 'forgot-pass',
                component: forgot_pass_component_1.ForgotPassComponent
            },
            {
                path: 'recover-pass/:code',
                component: recover_pass_component_1.RecoverPassComponent
            }]
    }];
exports.authRouting = router_1.RouterModule.forChild(ROUTES);
//# sourceMappingURL=auth.routing.js.map