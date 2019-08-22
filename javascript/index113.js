function getShapePerimeter(base, height) {
    if (base == height) {
        perimeter = 4*base
        console.log(`The perimeter of the square is ${perimeter}`);
    } else if (base != height) {
        perimeter = (2*base) + (2*height)
        console.log(`The perimeter of the rectangle is ${perimeter}`);
    }
    // if (perimeter < 100) {
    //     console.log('The perimeter is fine');
    // } else if (perimeter > 100) {
    // } console.log('The perimeter is too big');
    message = (perimeter <= 100) ? 'The perimeter is fine' : 'The perimter is too big';
    console.log(message);
}

getShapePerimeter(50,20);
getShapePerimeter(5,5);
