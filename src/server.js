var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rand = (s: number, e: number) => Math.floor(Math.random() * (e - s)) + s;
const fields = [{ title: 'Id', data: 'id', orderable: true },
    { title: 'Name', data: 'name', orderable: true },
    { title: 'Type', data: 'type', orderable: true },
    { title: 'Created Date', data: 'createdDate', orderable: true }];
const names = ['Jack', 'Bruce', 'John', 'Sue', 'Sabrine', 'Michael'];
const lastnames = ['Smith', 'Silva', 'Wayne', 'Armstrong', 'Hendrickson', 'Donald'];
const types = ['Admin', 'Simple', 'Finance', 'Marketing', 'Logistic'];


let USERS = [
    { id: 11, name: 'Admin User', password: '123456', login: 'admin', token: 'secret-token' },
    { id: 12, name: 'Simple User', password: '123456', login: 'simple', token: 'secret-token' },
    { id: 13, name: 'User', password: '123456', login: 'user', token: 'secret-token' },
];
for (let i = 0; i < 100; i++) {
    users.push({
        id: i + 1,
        name: names[rand(1, names.length)] + ' ' + lastnames[rand(1, lastnames.length)],
        type: types[rand(1, types.length)],
        age: rand(20, 50),
        lastChange: {
            date: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}`,
            userId: rand(1, 100)
        },
        createdDate: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}`
    });
}

let table = [];
let lengths = [50, 25, 15];
for (let i = 10; i < users.length; i += lengths.pop()) {
    for (let j = 0; j < users.length / i; j++) {
        table.push({
            selectable: true,
            page: j,
            length: i,
            total: users.length,
            columns: fields,
            data: users.slice(j * i, j * i + i)
        });
    }
}

let tokens = [{ login: 'admin', password: '123456', token: 'asdfghjkl' }];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.route('/api/table')
    .get(function (req, res) {
        const data = req.query.name ? USERS.filter(user => user.name.indexOf(req.query.name) >= 0) : USERS;
        res.send({ data: table });
    })

app.route('/api/users')
    .get(function (req, res) {
        const data = req.query.name ? USERS.filter(user => user.name.indexOf(req.query.name) >= 0) : USERS;
        res.send({ data: data });
    })
    .post(function (req, res) {
        const user = { id: ++lastId, name: req.body.name };
        USERS.push(user);
        res.send({ data: user });
    });

app.route('/api/users/:id')
    .get(function (req, res) {
        const data = USERS.filter(user => user.id === +req.params.id);
        if (data.length === 0) res.send({ error: "User not found!" });
        else res.send({ data: data[0] });
    })
    .put(function (req, res) {
        const i = USERS.findIndex(user => user.id === +req.params.id);
        if (i === -1) res.send({ error: "User not found!" });
        else {
            USERS[i].name = req.body.name;
            res.send({ data: USERS[i] });
        }
    })
    .delete(function (req, res) {
        const i = USERS.findIndex(user => user.id === +req.params.id);
        if (i === -1) res.send({ error: "User not found!" });
        else {
            USERS.splice(i, 1);
            res.send({ data: {} });
        }
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
