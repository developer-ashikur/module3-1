function animalCount(depth) {
    let animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        const firstPart = 10 * 50;
        const remaining = depth - 10;
        animal = firstPart + (remaining * 100);
    }
    else {
        const firstPart = 10 * 50;
        const secondPart = 10 * 100;
        const remaining = depth - 20;
        animal = firstPart + secondPart + (remaining * 300);
    }
    return animal;
}
const total = animalCount(27);
console.log("total", total);