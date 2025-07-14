//6가지의 요소 조작 매서드

// 1. push
// 배열의 맨 뒤에 새로운요소를 추가하는 매서드
let arr1 = [1,2,3];
arr1.push(4,5,6);

//console.log(arr1);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3];
//console.log(arr2.pop());

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
//console.log(arr2.shift());

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
let arr4 = [1,2,3];
arr4.unshift(0);
//console.log(arr4);

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let slice = arr5.slice(2,5);
console.log(slice);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concat = arr6.concat(arr7);
console.log(concat);