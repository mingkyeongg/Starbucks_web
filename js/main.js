const searchEl = document.querySelector('.search'); // document : Html 그 자체다.
const searchInputEl = searchEl.querySelector('input'); // search 선택자 안에서 찾게 된다.

searchEl.addEventListener('click', function () {
	searchInputEl.focus(); // 포커스 강제적용
});

searchInputEl.addEventListener('focus', function () {
	searchEl.classList.add('focused'); // 클래스 정보를 가지고 있는 곳에서 추가하겠다.
	searchInputEl.setAttribute('placeholder', '통합검색'); // attribute : html의 속성
});

searchInputEl.addEventListener('blur', function () {
	searchEl.classList.remove('focused'); // 클래스 정보 제거
	searchInputEl.setAttribute('placeholder', ''); // attribute : html의 속성
});