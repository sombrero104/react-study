import { useState } from "react";
// React 라이브러리 useState를 추가해준다.
// userState()는 2개의 요소를 받고, 반환하는 State를 새로 생성한다.
// 첫번째는 State의 현재 값이고, 두번째는 이 State를 변경시키는 상태 변화 함수이다.
// React에서는 State 값이 변경되었을 때에만 리렌더링을 해준다. 
// 때문에 화면에서 바로 변경사항이 적용되어야 할 때에는 일반 변수가 아닌 State를 사용해야 한다. 

// const Bulb = ({light}) => { // props.light 값을 인자로 받는다. 
  // 부모로 부터 받은 State(light) 값이 변경되면 리렌더링되는 것을 확인할 수 있다. 

const Bulb = () => { 
  // const state = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <div>
      {light ==="ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON")
        }}>전구 {light === "ON" ? "끄기" : "켜기"}</button>
    </div>
  );
};

export default Bulb;