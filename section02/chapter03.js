// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three] = arr;

console.log(one, two, three);

let person = {
    name : "이름",
    age : 12,
    hobby : "취미"
}

let {name, age, hobby, d} = person;

console.log(name, age, hobby, d);