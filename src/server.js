const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.set('superSecret', 'superSecret');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rand = (s, e) => Math.floor(Math.random() * (e - s)) + s;
const fields = [{ title: 'Id', data: 'id', orderable: true },
{ title: 'Name', data: 'name', orderable: true },
{ title: 'Type', data: 'type', orderable: true },
{ title: 'Created Date', data: 'createdDate', orderable: true }];
const names = ['Jack', 'Bruce', 'John', 'Sue', 'Sabrine', 'Michael'];
const lastnames = ['Smith', 'Silva', 'Wayne', 'Armstrong', 'Hendrickson', 'Donald'];
const types = ['Admin', 'Simple', 'Finance', 'Marketing', 'Logistic'];


let USERS = [
    { id: 1, name: 'Admin User', password: '123456', login: 'admin', token: 'secret-token' },
    { id: 2, name: 'Simple User', password: '123456', login: 'simple', token: 'secret-token' },
    { id: 3, name: 'User', password: '123456', login: 'user', token: 'secret-token' },
];
for (let i = 4; i < 100; i++) {
    USERS.push({
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

app.use(cors());

app.route('/api/authenticate')
    .post(function (req, res) {
        //mocked user
        const user = { login: req.body.login, password: req.body.password };

        //validation of mocked user
        if (user.login !== "admin" || user.password !== "123456")
            res.status(500).send({ errors: ["Login and/or password is invalid."] });
        else {
            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, app.get('superSecret'), {
                expiresIn: "1d"
            });

            // return the information including token as JSON
            res.json({ token: token, name: 'Username' });
        }
    });

const router = express.Router();

router.route('/users/table')
    .get(function (req, res) {
        const table = {
            selectable: true,
            page: +req.query.page,
            length: +req.query.length,
            total: USERS.length,
            columns: fields
        };

        var first = table.page * table.length;
        table.data = USERS.slice(first, first + table.length);
        res.send(table);
    });

router.route('/users')
    .get(function (req, res) {
        const data = req.query.name ? USERS.filter(user => user.name.indexOf(req.query.name) >= 0) : USERS;
        res.send({ data: data });
    })
    .post(function (req, res) {
        const user = { id: ++lastId, name: req.body.name };
        USERS.push(user);
        res.send({ data: user });
    });

router.route('/users/:id')
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

function authenticate(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers.authorization;

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            errors: ['No token provided.']
        });

    }
}

app.use('/api', authenticate, router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
