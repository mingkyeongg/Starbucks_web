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
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { // 스크롤되면 function 실행
	console.log('scroll!')
	if(window.scrollY > 500) {
		gsap.to(badgeEl, 0.6, {
			opacity: 0,
			display: 'none'
		});
		// 버튼 보이기
		gsap.to(toTopEl, 0.2, {
			x: 0
	});
	} else {
		gsap.to(badgeEl, 0.6, {
			opacity: 1,
			display: 'block'
		});
		// 버튼 숨기기
		gsap.to(toTopEl, 0.2, {
			x: 100
	});
	}
}, 300));


toTopEl.addEventListener('click', function () {
	gsap.to(window, .7, {
		scrollTo: 0 // 화면의 위치를 0으로
	});
});

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

new Swiper('.awards .swiper-container', {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next'
	}
})

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

function random(min, max) {
	return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1,
		// 한번 재생된 애니메이션 다시 뒤로
		yoyo: true,
		ease: "power1.inOut",
		delay: random(0, delay)
	});
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
	new ScrollMagic
		.Scene({
			triggerElement : spyEl, // 보여짐 여부를 감시할 요소를 지정
			triggerHook: .8
		})
		.setClassToggle(spyEl, 'show')
		.addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();