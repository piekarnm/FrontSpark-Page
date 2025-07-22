const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const allNavItems = document.querySelectorAll('.nav-mobile__link')
const navLogo = document.querySelector('.company')
const footerYear = document.querySelector('.footer-year')
const form = document.querySelector('.section-contact__msg-card-form')
const msgStatus = document.querySelector('.msg-status')
const policyModal = document.querySelector('#privacyPolicyModal')
const policyModalBody = policyModal.querySelector('.pp-modal__content')
const PolicyOpenBtn = document.querySelector('.pp-open')
const PolicyCloseBtn = policyModal.querySelector('.pp-close')

let lastFocusedElement = null

PolicyOpenBtn.addEventListener('click', openPolicyModal)
PolicyCloseBtn.addEventListener('click', closePolicyModal)

document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && policyModal.classList.contains('active')) {
		closePolicyModal()
	}
})

function openPolicyModal() {
	lastFocusedElement = document.activeElement
	policyModal.classList.add('active')
	policyModal.removeAttribute('hidden')
	document.body.classList.add('modal-open')

	policyModalBody.setAttribute('tabindex', '-1')
	policyModalBody.focus()
}

function closePolicyModal() {
	policyModal.classList.remove('active')
	policyModal.setAttribute('hidden', '')
	document.body.classList.remove('modal-open')

	if (lastFocusedElement) lastFocusedElement.focus()
}

form.addEventListener('submit', async e => {
	e.preventDefault()

	msgStatus.classList.remove('success', 'error')
	msgStatus.textContent = ''

	try {
		const res = await fetch(form.action, {
			method: 'POST',
			body: new FormData(form),
		})

		const data = await res.json().catch(() => ({}))

		if (!res.ok || !data.ok) throw new Error(data.msg || 'Wystąpił błąd wysyłania!')

		msgStatus.classList.add('success')
		msgStatus.textContent = data.msg || 'Wiadomość została wysłana!'
		form.reset()
	} catch (err) {
		msgStatus.classList.add('error')
		msgStatus.textContent = err.message || 'Wystąpił błąd wysyłania!'
	}
})

const openNav = () => {
	let delayTime = 0
	navMobile.classList.add('nav-mobile--active')
	allNavItems.forEach(item => item.classList.add('nav-link-animation'))
	burgerBtn.classList.add('hamburger-open')
}

const closeNav = () => {
	navMobile.classList.remove('nav-mobile--active')
	allNavItems.forEach(item => item.classList.remove('nav-link-animation'))
	burgerBtn.classList.remove('hamburger-open')
}

const toggleNav = () => {
	if (navMobile.classList.contains('nav-mobile--active')) {
		closeNav()
	} else {
		openNav()
	}
}

// Data footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// emailInfo()
handleCurrentYear()

// Event listener dla przycisku hamburgera
burgerBtn.addEventListener('click', toggleNav)

// Po kliknięciu w logo lub dowolny link nawigacyjny, zamykamy nawigację
navLogo.addEventListener('click', closeNav)
allNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})

window.addEventListener('scroll', handleObserver)
