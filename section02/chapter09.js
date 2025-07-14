// 5가지 배열 변형매서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "java", type : "j"},
    {name : "C#", type : "#"},
    {name : "Ruby", type : "r"}
]

const filtering = arr1.filter((item) => {
    if(item.type != "#") return true;
})

//console.log(filtering);

// 2.map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 새로운 배열로 반환
let arr2 = [1,2,3];

const newArr = arr2.map((item, idx, arr) => {
    //console.log(idx, item);
    return item * 2;
})

//console.log(newArr);

// 3. sort
// 배열을 사전순으로 정렬하는 매소드
let arr3 = [ "b", "c", "a"];
arr3.sort();

//console.log(arr3);
let arr4 = [10,2,5];
arr4.sort((a, b) => {
    if(a > b){
        //b가 a 앞으로 와야할떄 양수 반환
        return 1;
    }
    else if( a < b)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}) 
//console.log(arr4);

// 4. toSorted
// 정렬된 '새로운' 배열을 반환하는 매소드
let arr5 = ["c", "a", "b"];
const sort = arr5.toSorted();

//console.log(arr5);
//console.log(sort);

// 5. join
// 배열의 모든 요소를 하나으 문자열로 합쳐서 반환하는 매소드
let arr6 = ["What", "The", "Fxxx"];
const joined = arr6.join(''); //구분자 설정 가능, 기본은 콤마
console.log(joined);

