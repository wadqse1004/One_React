// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자

let obj2 = {}; // 객체 리터넬

// 2. 객체 프로퍼티(객체 속성)

let person = {
    name : "박상준",
    age : 33,
    extra : {},  //객체 가능
    10 : 25, //숫자 가능
    "Like cat" : true, // 쌍따움표는 필요 없지만 예외적으로 띄워쓰기할때 사용
    test : () => {
        console.log("메소드 함수");
    }, //함수도 가능
}


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = console.log( person.name);
let age = console.log(person["age"]);
person.test();

// 3-2 프로퍼티 추가
person.job = "developer";
person["company"] = "dentop";

// 3-3 프로퍼티 수정
person[10] = 45;
person.age = 32;

// 3-4 프로퍼티 삭제
delete person[10];
delete person.name;

// 3-5 프로퍼티 존재 유뮤 (in 연산자)
let result = "name" in person;
console.log(result);