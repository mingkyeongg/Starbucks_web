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

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () { // 스크롤되면 function 실행
	console.log('scroll!')
	if(window.scrollY > 500) {
		gsap.to(badgeEl, 0.6, {
			opacity: 0,
			display: 'none'
		});
	} else {
		gsap.to(badgeEl, 0.6, {
			opacity: 1,
			display: 'block'
		});
	}
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	// gsap.to(요소, 지속시간, 옵션)
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * .7, // 첫번째는 0.7초 뒤에 두번째는 1.4초 뒤에...
		opacity: 1
	});
});

// Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true
});

new Swiper('.promotion .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop:true,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
		clickable: true // 사용자의 페이지 번호 요소 제어
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
	isHidePromotion = !isHidePromotion // 반대값
	if (isHidePromotion) {
		// 숨김처리
		promotionEl.classList.add('hide');

	} else {
		// 보임 처리
		promotionEl.classList.remove('hide');
	}
});
