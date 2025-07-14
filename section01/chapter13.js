// 1. 콜백함수
function main(value){
  value();  
}

//나중에 실행시키기 위해 함수 인수로 전달하는 함수가 콜백함수 
function sub()
{
    console.log("Sub");
}

main(sub);

main(() => {
    console.log("sub22");
});

//2. 콜백함수 활용
function repeat(count, callBack){
    for(let index = 1;  index <= count; index++){
        console.log(index);
    }
}

repeat(5, (index) =>{
console.log(index);
});

repeat(5, function(index){
    console.log(index * 2);
    });