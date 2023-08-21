// menu header
function mobileMenu() {
	const windowWidth = $(window).width();

	$('.menu-hamburger').click(function () {
		$(this).siblings('.menu-overlay').addClass('active');
		$(this).siblings('.menu-items').addClass('active');
	});

	if (windowWidth < 992) {
		$('.menu-parent i').click(function () {
			$(this)
				.toggleClass('active')
				.parent()
				.siblings('.menu-sub')
				.slideToggle();
		});
	}

	$(document).mouseup(function (e) {
		if (
			!$('.menu-items').is(e.target) &&
			$('.menu-items').has(e.target).length === 0
		) {
			$('.menu-items').siblings('.menu-overlay').removeClass('active');
			$('.menu-items').removeClass('active');
		}
	});
}
function scrollTop() {
	$(window).scroll(function () {
		let scrollY = $(window).scrollTop();

		if (scrollY > 500) $('#scrollToTop').addClass('show-scroll');
		else $('#scrollToTop').removeClass('show-scroll');
	});

	$('#scrollToTop').click(function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		return false;
	});
}

function scrollSticky() {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		var header = $('.header');
		var headerTopbar = $('.header-top');
		var headerMain = $('.header-main');
		var headerTopbar__height = headerTopbar.innerHeight();
		var headerMain__height = headerMain.innerHeight();
		var main = $('main');

		if (scrollTop > headerTopbar__height) {
			header.addClass('sticky');
			main.css('margin-top', headerMain__height);
		} else {
			header.removeClass('sticky');
			main.css('margin-top', 0);
		}
	});
}

function textarea__autoHeight() {
	$('textarea')
		.each(function () {
			this.setAttribute(
				'style',
				'height:' + this.scrollHeight + 'px;overflow-y:hidden;'
			);
		})
		.on('input', function () {
			this.style.height = 'auto';
			this.style.height = this.scrollHeight + 'px';
		});
}

$(document).ready(function () {
	mobileMenu();
	scrollTop();
	scrollSticky();
	textarea__autoHeight();
});
