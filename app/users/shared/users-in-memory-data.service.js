"use strict";
var UsersInMemoryDataService = (function () {
    function UsersInMemoryDataService() {
    }
    UsersInMemoryDataService.prototype.createDb = function () {
        var rand = function (s, e) { return Math.floor(Math.random() * (e - s)) + s; };
        var fields = [{ title: 'Id', data: 'Id' },
            { title: 'Name', data: 'Name' },
            { title: 'Age', data: 'Age' },
            { title: 'Date', data: 'Date' }];
        var names = ['Admin', 'Simple', 'User', 'Finance', 'Marketing', 'Logistic'];
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({
                Id: i + 1,
                Name: names[rand(1, names.length)],
                Age: rand(20, 50),
                Date: rand(1, 30) + "/" + rand(1, 12) + "/" + rand(1996, 2016) });
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
        console.log(users);
        return { users: users };
    };
    return UsersInMemoryDataService;
}());
exports.UsersInMemoryDataService = UsersInMemoryDataService;
//# sourceMappingURL=users-in-memory-data.service.js.map