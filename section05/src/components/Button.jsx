/*
const Button = (props) => {
    console.log(props);
    return (
        <button style={{ color: props.color }}>
            {props.text} - {props.color}
        </button>
    );
};
*/

// color가 undefined일 수 있기 때문에 아래와 같이 디폴트값을 선언해 준다.
// (undefined인 경우 toUpperCase() 사용 시 오류 발생 가능.)
const Button = ({ children, text, color = "black" }) => {
    const onClickButton = (e) => {  // e: 이벤트 객체.
        // e로 합성 이벤트(Synthetic Base Event) 객체가 전달된다. 
        // 합성 이벤트: React에서는 모든 웹 브라우저 종류의 이벤트 객체를 하나로 통일한 형태를 지원한다.
        // Cross Browsing Issue: 브라우저별 스펙이 달라 발생하는 문제.
        console.log(e);
        console.log(text);
    };
    return (
        <button 
            onClick={onClickButton} 
                // onClick에서 실제로 실행되는 함수를 '이벤트 핸들러'라고 한다.
            // onMouseEnter={onClickButton}
                // onMouseEnter: 마우스를 버튼 위에 올렸을 때 실행.
            style={{ color: color }}>
                {text} - {color.toUpperCase()}
                {children}
        </button>
    );
};

export default Button;