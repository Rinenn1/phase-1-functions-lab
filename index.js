function distanceFromHqInBlocks(distance) {
    const hq = 42;

    return distance <= hq ? hq - distance : distance - hq;
}

console.log(distanceFromHqInBlocks(34)); 
console.log(distanceFromHqInBlocks(43)); 


function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));


function distanceTravelledInFeet(start, stop) {
    const travelled = stop - start;
    if (stop >= start){
        return travelled * 264;
    } else 
        return -1 * (travelled * 264);
}

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination){
    let num = destination - start;
    let long = num * 264;

    let fare = long > 0 ? long * 1 : long * -1;

    let math1 = ((fare - 400) * 2)/100

    if (fare < 400){
        return 0;
    } else if (fare >= 400 && fare <=2000){
        return math1;
    } else if (fare > 2000 && fare <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));