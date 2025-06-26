function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // Promise 객체가 생성됨과 동시에 이 콜백함수가 호출되어 비동기 작업이 실행된다. 
        // '실제로 비동기 작업을 실행하는 함수'라는 뜻에서 이 함수를 executor라고 부른다. 

        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }

            // console.log("안녕");
            // resolve("안녕");
            // reject("왜 실패했는지 이유...");
        }, 2000);
    });

    return promise;
}

add10(0).then((result) => { 
    console.log(result);

    // return을 하게 되면 기존 p객체가 아닌 아래 결과의 객체를 반환하게 된다. 
    return add10(result);
}).then((result) => {
    console.log(result);
});

/*
// 다시 콜백지옥을 만들 수 있는 버전.
const p = add10(0);
p.then((result) => { 
    console.log(result);

    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
});
*/

/*
setTimeout(() => {
    console.log(promise);
}, 3000);
*/

// Promise 체이닝: then/catch 메서드 실행 후 Promise 객체가 그대로 반환되기 때문에 
//                아래와 같이 체이닝이 가능하다.
/*
promise
    .then((value) => { // then() 메서드: Promise 작업이 성공했을 경우에만 호출된다. 
        console.log(value);
    })
    .catch((error) => { // catch() 메서드: Promise 작업이 실패했을 때 호출된다. 
        console.log(error); 
    });
*/

