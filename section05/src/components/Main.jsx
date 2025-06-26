import "./Main.css";

// [JSX 주의사항]
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 
//    (true, undefined, null, 객체 자체는 렌더링 되지 않음.)
// 3. 모든 태그는 닫혀있어야 한다. 
// 4. 최상위 태그는 반드시 하나여야만 한다. 
//    아래 예시에서는 main 태그가 최상위 태그.
//    최상위 태그로 빈 태그(<>)도 사용 가능. (대신 최상위 태그가 없는 것처럼 렌더링 된다.)
const Main = () => {
    /*const number = 10;
    const obj = { a : 1 };
    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
            {obj.a}
        </main>
    );*/

    const user = {
        name: "sombrero104",
        isLogin: true,
    };

    /* 
    return <>
    {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    </>;
     */

    if (user.isLogin) {
        /*
        return <div style={{
            backgroundColor: "red",
            borderBottom: "5px solid blue",
        }}>로그아웃</div>;
         */
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    
};

export default Main;
