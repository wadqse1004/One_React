// 1.배열순회
let arr = [1, 2, 3];

// 1-1 배열 인덱스

for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

// 1-2 for of 반복문
for(let item of arr)
{
    console.log(item);
}

// 2. 객체 순회
let person = {
    name : "자바",
    age : 7,
    same : "c#"
}

// 2-1 Object.keys 사용 // Object.values
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys)
{
    console.log(key, person[key]);
}

// 2-2 for in
for(let key in person)
{
    console.log(key);
}