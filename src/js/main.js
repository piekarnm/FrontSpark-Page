const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav--mobile')
const allNavItems = document.querySelectorAll('.nav--mobile__content__links__link')
const navLogo = document.querySelector('.company')
// const footerYear = document.querySelector('.footer-year')
// const allSections = document.querySelectorAll('.section')
// const msgStatus = document.querySelector('.msg-status')

// const emailInfo = () => {
// 	if (document.location.search === '?mail_status=sent') {
// 		msgStatus.classList.add('success')
// 		msgStatus.textContent = 'Wiadomość wysłana!'

// 		setTimeout(() => {
// 			msgStatus.classList.remove('success')
// 		}, 3000)
// 	}

// 	if (document.location.search === '?mail_status=error') {
// 		msgStatus.classList.add('error')
// 		msgStatus.textContent = 'Wystąpił błąd'

// 		setTimeout(() => {
// 			msgStatus.classList.remove('error')
// 		}, 3000)
// 	}
// }

const openNav = () => {
	let delayTime = 0
	navMobile.classList.add('nav--mobile--active')
	allNavItems.forEach(item => item.classList.add('nav-link-animation'))
	burgerBtn.classList.add('hamburger-open')
}

const closeNav = () => {
	navMobile.classList.remove('nav--mobile--active')
	allNavItems.forEach(item => item.classList.remove('nav-link-animation'))
	burgerBtn.classList.remove('hamburger-open')
}

const toggleNav = () => {
	if (navMobile.classList.contains('nav--mobile--active')) {
		closeNav()
	} else {
		openNav()
	}
}

// Data footer
// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }

// emailInfo()
// handleCurrentYear()

// Event listener dla przycisku hamburgera
burgerBtn.addEventListener('click', toggleNav)

// Po kliknięciu w logo lub dowolny link nawigacyjny, zamykamy nawigację
navLogo.addEventListener('click', closeNav)
allNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})

window.addEventListener('scroll', handleObserver)
