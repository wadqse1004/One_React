// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역활

let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];

console.log(arr2);


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest)
{
    console.log(rest)
}

funcB(...arr1)