const user = {
    username : null,
    password : null,
    greet: function() {
        if (user.username !== null) {
            console.log(`Hello, I'm user ${user.username}`);
        } else {
            console.log('Please assign a username value');
        }
    },
    updaterUsername: function(username) {
        user.username = username;
    },
    updatePassword: function(password) {
        user.password = password;
    },
}

user.greet();
user.updaterUsername('Sam');
user.updatePassword('123456');
user.greet();