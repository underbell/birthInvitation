$(function(){

	//Init Navigation
	var nav = $('.swiper-nav').swiper({
		slidesPerView: 'auto',
		freeMode:true,
		freeModeFluid:true,
		onSlideClick: function(nav){
			pages.swipeTo( nav.clickedSlideIndex )
		}
	})

	//Function to Fix Pages Height
	function fixPagesHeight() {
		$('.swiper-pages').css({
			height: $(window).height()-nav.height
		})
	}
	$(window).on('resize',function(){
		fixPagesHeight()
	})
	fixPagesHeight()

	//Init Pages
	var pages = $('.swiper-pages').swiper()

	//Scroll Containers
	$('.scroll-container').each(function(){
		$(this).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true,
			scrollbar: {
				container:$(this).find('.swiper-scrollbar')[0]
			}
		})
	})

	//Gallery
	var swiperGallery = $('.swiper-gallery').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery .swiper-scrollbar')[0]
		}
	})
	swiperGallery.reInit()
	
	// 사용할 앱의 Javascript 키를 설정해 주세요.
    Kakao.init('a4d22e0ef320effbf440e09dda663a1c')

    // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createTalkLinkButton({
      container: '#kakao-link-btn',
      label: '소현이의 첫번째 생일을 축하해주세요~♡',
      image: {
        src: 'http://www.underbell.pe.kr/public/img/photo/invit01.png',
        width: '480',
        height: '800'
      },
      webButton: {
        text: '소현이 돌잔치',
        url: 'http://www.underbell.pe.kr' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
      }
    })
})