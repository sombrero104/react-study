import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';


function App() {
  // {...} 스프레드 연산자로 모든 Props를 한번에 전달할 수도 있다.
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* 
      <Header />
      <Main />
      <Footer /> 
      <Button text={"메일"} color={"red"} />
      */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
          <div>자식 요소</div> {/* 하위 요소는 children으로 전달된다. */}
          <Header/> {/* 다른 컴포넌트도 전달 가능. */}
      </Button>
    </>
  );
}

export default App
