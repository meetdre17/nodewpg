function validateUser(username, password) {
    if (username === 'nacho' && password === 'Nerd1979' || username === 'pedro' && password === 'Batman0217' || username === 'marta' && password === 'Mother2312') {
        console.log(`Welcome ${username}, nice to see you again`)
        return true
    } else {
        console.log(`please put valid credentials`)
        return false
    }
};

validateUser('pedro', 'Nerd1979')
