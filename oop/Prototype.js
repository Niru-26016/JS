let Human ={
    legs:2,
    hands:2,
    eyes:2,
}

let men={
    hair:"Shot hair",
}

Object.setPrototypeOf(men,Human);

console.log(Object.getPrototypeOf(men));
console.log(men);
console.log(men.hands);
