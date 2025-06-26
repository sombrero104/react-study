// async 
// 동기적으로 작동하는(원래는 Promise를 반환하지 않는) 어떤 함수를 비동기 함수로 만들어주는 키워드.
// 함수가 Promise를 반환하도록 변환해주는 키워드.

// await 
// await이라는 키워드와 함께 사용했을 때 async의 강점을 알 수 있다. 
// async 함수 내부에서만 사용이 가능한 키워드. 
// 비동기 함수가 다 처리되기를 기다리는 역할을 한다. 

/*
async function getData() {
    return {
        name: "aaa",
        id: "bbb",
    };
}
*/

async function getData() {
    return new Promise((resolve, reject) => {
       setTimeout(() => { 
        resolve({
            name: "aaa",
            id: "bbb",
        });
       }, 1500);
    });
}

/*
function printData() {
    getData().then((result) => {
        console.log(result);
    });
}
*/

// 위처럼 then()을 사용하지 않아도 getData()가 완료되면 data로 반환된다. 
async function printData() {
    const data = await getData();
    console.log(data);
}

// console.log(getData());
printData();

