/* eslint-disable1 */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const posts = '블로그 글 테스트';

	let [blogName, changeBlogName] = useState('남자 코트 추천');
	let [semiName, changeSemiName] = useState(['2번째 글이라는 뜻 ', '배열도 된다']);
	let [star, upcountStar] = useState(0);

	function test1() {
		return 100;
	}

	function changeName() {
		let newData = [...semiName];
		newData[0] = '잘 바뀌는지';
		changeSemiName(newData);
	}

	return (
		<div className='App'>
			<div className='black-nav'>
				<div style={{color: 'red', fontSize: '30px'}}>개발 Blog</div>
			</div>
			<button onClick={changeName}>버튼</button>
			<img src={logo} />
			<h4>{posts}</h4>
			<h4>{test1()}</h4>
			<div className='list'>
				<h3>
					{blogName}{' '}
					<span
						onClick={() => {
							upcountStar(star + 1);
						}}>
						★
					</span>
					{star}
				</h3>
				<p>7월 test</p>
				<hr />
			</div>
			<div className='list'>
				<h3>{semiName[0]}</h3>
				<p>6월 test</p>
				<hr />
			</div>
			<div className='list'>
				<h3>{semiName[1]}</h3>
				<p>5월 test</p>
				<hr />
			</div>

			<Modal />
		</div>
	);
}

function Modal() {
	return (
		<div className='modal'>
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
