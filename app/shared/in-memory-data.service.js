"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, name: 'Admin User', password: '123456', login: 'admin', token: 'secret-token' },
            { id: 12, name: 'Simple User', password: '123456', login: 'simple', token: 'secret-token' },
            { id: 13, name: 'User', password: '123456', login: 'user', token: 'secret-token' },
        ];
        var tokens = [{ login: 'admin', password: '123456', token: 'asdfghjkl' }];
        return { 'token': tokens };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map