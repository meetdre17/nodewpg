const user = {
    username: 'Batman',
    password: 'Alfred1960ROCKS!'
};
const shouldOpenBatcave = function (user) {
    if (user.username == 'Batman' && user.password == 'Alfred1960ROCKS!') {
        return true
    } else {
        return false
    }
}
console.log(shouldOpenBatcave(user) ? 'Welcome back batman!!' : 'Sorry, you can\'t enter the Batcave, try again..');

