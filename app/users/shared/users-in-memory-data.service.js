"use strict";
var UsersInMemoryDataService = (function () {
    function UsersInMemoryDataService() {
    }
    UsersInMemoryDataService.prototype.createDb = function () {
        var rand = function (s, e) { return Math.floor(Math.random() * (e - s)) + s; };
        var fields = [{ title: 'Id', data: 'id' },
            { title: 'Name', data: 'name' },
            { title: 'Age', data: 'age' },
            { title: 'Date', data: 'date' }];
        var names = ['Admin', 'Simple', 'User', 'Finance', 'Marketing', 'Logistic'];
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({
                id: i + 1,
                name: names[rand(1, names.length)],
                age: rand(20, 50),
                date: rand(1, 30) + "/" + rand(1, 12) + "/" + rand(1996, 2016) });
        }
        var users = [];
        var lengths = [50, 25, 15];
        for (var i = 10; i < data.length; i += lengths.pop()) {
            for (var j = 0; j < data.length / i; j++) {
                users.push({
                    page: j,
                    length: i,
                    total: data.length,
                    columns: fields,
                    data: data.slice(j * i, j * i + i)
                });
            }
        }
        return { users: users, user: data };
    };
    return UsersInMemoryDataService;
}());
exports.UsersInMemoryDataService = UsersInMemoryDataService;
//# sourceMappingURL=users-in-memory-data.service.js.map