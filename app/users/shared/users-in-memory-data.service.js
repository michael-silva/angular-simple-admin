"use strict";
var UsersInMemoryDataService = (function () {
    function UsersInMemoryDataService() {
    }
    UsersInMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, name: 'Admin User', password: '123456', login: 'admin', token: 'secret-token' },
            { id: 12, name: 'Simple User', password: '123456', login: 'simple', token: 'secret-token' },
            { id: 13, name: 'User', password: '123456', login: 'user', token: 'secret-token' },
        ];
        return { users: users };
    };
    return UsersInMemoryDataService;
}());
exports.UsersInMemoryDataService = UsersInMemoryDataService;
//# sourceMappingURL=users-in-memory-data.service.js.map