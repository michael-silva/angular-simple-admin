"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users.component');
var user_list_component_1 = require('./user-list/user-list.component');
var user_profile_component_1 = require('./user-profile/user-profile.component');
var user_wizzard_component_1 = require('./user-wizzard/user-wizzard.component');
var user_tabform_component_1 = require('./user-tabform/user-tabform.component');
var ROUTES = [{
        path: '',
        component: users_component_1.UsersComponent,
        children: [{
                path: '',
                component: user_list_component_1.UserListComponent
            },
            {
                path: 'profile',
                component: user_profile_component_1.UserProfileComponent
            },
            {
                path: ':id',
                component: user_tabform_component_1.UserTabFormComponent
            },
            {
                path: 'new',
                component: user_wizzard_component_1.UserWizzardComponent
            }]
    }];
exports.usersRouting = router_1.RouterModule.forChild(ROUTES);
//# sourceMappingURL=users.routing.js.map