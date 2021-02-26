'use strict';

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
	 const results = ['寿司','カレー','魚','ピザ','炒飯','うなぎ','パスタ','焼肉','シチュー','そば'];
	 const n = Math.floor(Math.random() * results.length);
	 btn.textContent = results[n];
	});

	btn.addEventListener('mousedown', () => {
		btn.classList.add('pressed');
	});

	btn.addEventListener('mouseup', ()  =>{
		btn.classList.remove('pressed');
	});
}