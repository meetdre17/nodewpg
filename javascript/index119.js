const data = [42, true, function() {return 'The meaning of life is: '}];
const message = data[2]() + data[0];

if (data[1]) {
    console.log(message);
}
