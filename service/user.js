const users = require('../database/user.json');

function create(user) {
    users.push(user);
    return user;
}

function find (id) {
    return users.find((user) => {
        return user.id === id;
    });
}

function findAll() {
    return users;
}

function remove(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            if( i == 0 ) {
                users.splice(0,1);
            } else {
                users.splice(i, i);
            }
            return true;
        }
    }
    return false;
}

module.exports = { find, findAll, create, remove };