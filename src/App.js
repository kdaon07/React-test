/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  // function 제목바꾸기() {
  //   글제목변경( ['여자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // }

  function 제목바꾸기() { // State는 직접 건드리지 말기 ex) 글제목[0] = 12345
    var newArray = [...글제목]; // state를 복제하면 변수명 = state가 아닌 [...state]를 사용해야한다(deep copy)
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  function 정렬() {
    var newArray = [...글제목];
    
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 정렬 }>버튼</button>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
