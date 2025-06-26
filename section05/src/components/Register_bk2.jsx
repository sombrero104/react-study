import { useState } from "react";

// [State로 사용자 입력 관리하기]

// 간단한 회원가입 폼 
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {
    // 이전(Register_bk.jsx)에는 여러개의 State로 나눠서 관리했던 
    // 4가지 데이터(name, birth, country, bio)를
    // 아래와 같이 객체 형태로 만들어서 하나의 State로 함께 관리할 수 있다. 
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    console.log(input);

    const onChangeName = (e) => {
        setInput({
            ...input,   // ... (스프레드 연산자)를 사용해서 관련 없는 값들은 그대로 유지되도록 함. 
            name: e.target.value    // 변경하고자 하는 프로퍼티 값만 바꿔주도록 함. 
        });
    }

    const onChangeBirth = (e) => {
        setInput({
            ...input,   // ... (스프레드 연산자)를 사용해서 관련 없는 값들은 그대로 유지되도록 함. 
            birth: e.target.value    // 변경하고자 하는 프로퍼티 값만 바꿔주도록 함. 
        });
    }

    const onChangeCountry = (e) => {
        setInput({
            ...input,   // ... (스프레드 연산자)를 사용해서 관련 없는 값들은 그대로 유지되도록 함. 
            country: e.target.value    // 변경하고자 하는 프로퍼티 값만 바꿔주도록 함. 
        });
    }

    const onChangeBio = (e) => {
        setInput({
            ...input,   // ... (스프레드 연산자)를 사용해서 관련 없는 값들은 그대로 유지되도록 함. 
            bio: e.target.value    // 변경하고자 하는 프로퍼티 값만 바꿔주도록 함. 
        });
    }

    return (
        <div>
            <div><input value={input.name} onChange={onChangeName} placeholder={"이름"} /> {input.name}</div>
            <div><input type="date" value={input.birth} onChange={onChangeBirth} /> {input.birth}</div>
            <div>
                <select value={input.country} onChange={onChangeCountry}>
                    <option value="">선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select> {input.country}
            </div>
            <div>
                <textarea value={input.bio} onChange={onChangeBio} /> {input.bio}
            </div>
        </div>
    );
}
    
export default Register;
